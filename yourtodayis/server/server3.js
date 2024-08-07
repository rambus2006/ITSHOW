const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// 로그인 화면
<<<<<<< HEAD
const users = [
  { id: 1, name: '이승준', email: 'john.doe@example.com', password: 'alflaAkrh' },
  { id: 2, name: '문태일', email: 'jane.smith@example.com', password: 'alflaAkrh' },
  { id: 3, name: '임한별', email: 'mike.johnson@example.com', password: 'alflaAkrh' }
=======
// 더미 데이터 예시 (배열 형태)
const users = [
  { id: 1, name: '이승준', email: 'john.doe@example.com', password: 'alflaAkrh'},
  { id: 2, name: '문태일', email: 'jane.smith@example.com', password: 'alflaAkrh'},
  { id: 3, name: '임한별', email: 'mike.johnson@example.com', password: 'alflaAkrh'}
>>>>>>> 8ac78590c6c92844322d6d71e82ee0439cb14cd3
];

// CORS 설정
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000' // 허용할 출처를 여기에 지정
<<<<<<< HEAD
=======

>>>>>>> 8ac78590c6c92844322d6d71e82ee0439cb14cd3
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
<<<<<<< HEAD
    const username = user ? user.name : null;

    if (user) {
      socket.emit('loginResponse', { success: true, message: '로그인 성공', name: username });
=======
    const username = user.name;
    
    if (user) {
      socket.emit('loginResponse', { success: true, message: '로그인 성공',name:username});

>>>>>>> 8ac78590c6c92844322d6d71e82ee0439cb14cd3
    } else {
      socket.emit('loginResponse', { success: false, message: '로그인 실패' });
    }
  });

<<<<<<< HEAD
  socket.on('saveDiary', (data) => {
    console.log('일기 저장 요청 수신:', data);

    // 데이터를 모든 클라이언트에게 브로드캐스트
    io.emit('diarySaved', {
      ...data,
      createdAt: new Date().toLocaleString()
    });
  });

=======
>>>>>>> 8ac78590c6c92844322d6d71e82ee0439cb14cd3
  socket.on('disconnect', () => {
    console.log('클라이언트 연결 해제');
  });
});

// React 정적 파일 제공
app.use(express.static(path.join(__dirname, 'build')));

<<<<<<< HEAD
// 추가한 부분
=======
//추가한 부분
>>>>>>> 8ac78590c6c92844322d6d71e82ee0439cb14cd3
app.use(bodyParser.json());

// 라우터 설정
const indexRouter = require('./routes/index');
const diaryRouter = require('./routes/diary');

// 기본 경로로 이동할 수 있도록 설정 
app.use('/', indexRouter);
<<<<<<< HEAD
app.use('/api/diary', diaryRouter);
=======
app.use('/api/diary',diaryRouter)

>>>>>>> 8ac78590c6c92844322d6d71e82ee0439cb14cd3

// 서버 시작
server.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
