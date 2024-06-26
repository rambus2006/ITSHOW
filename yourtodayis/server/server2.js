const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// 로그인 화면
// 더미 데이터 예시 (배열 형태)
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'alflaAkrh'},
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', password: 'alflaAkrh'},
  { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com', password: 'alflaAkrh'}
];

// CORS 설정
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000' // 허용할 출처를 여기에 지정
}));

// HTTP 서버 생성
const server = http.createServer(app);

// Socket.IO 설정
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('새 클라이언트 연결');

  socket.on('login', (data) => {
    console.log('로그인 요청 수신:', data); 
    const { email, password } = data;
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      socket.emit('loginResponse', { success: true, message: '로그인 성공' });
    } else {
      socket.emit('loginResponse', { success: false, message: '로그인 실패' });
    }
  });

  socket.on('disconnect', () => {
    console.log('클라이언트 연결 해제');
  });
});

// React 정적 파일 제공
app.use(express.static(path.join(__dirname, 'build')));

//추가한 부분
app.use(bodyParser.json());

// 라우터 설정
const indexRouter = require('./routes/index');
const diaryRouter = require('./routes/diary');

// 기본 경로로 이동할 수 있도록 설정 
app.use('/', indexRouter);

// 다이어리 엔트리를 처리할 POST 엔드포인트 설정
app.post('/api/diary', (req, res) => {
  const { writer, message, createdAt } = req.body;

  // 여기서는 받은 데이터를 처리합니다 (예: 데이터베이스에 저장)
  console.log(`${writer}가 작성한 다이어리 내용 (${createdAt}): ${message}`);

  // 성공 메시지를 응답합니다
  res.status(200).json({ message: '다이어리 엔트리가 성공적으로 받아졌습니다!' });
});


// /api/diary 경로에 diaryRouter 등록
app.use('/api/diary', diaryRouter);
//추가한 부분 끝 


// 서버 시작
server.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
