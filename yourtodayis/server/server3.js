const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

// 라우터 설정
const indexRouter = require('./routes/index');
const diaryRouter = require('./routes/diary');

const app = express();
const PORT = 4000;

// 더미 데이터 예시 (배열 형태)
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'alflaAkrh'},
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', password: 'alflaAkrh'},
  { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com', password: 'alflaAkrh'}
];

let diaryEntries = [];

// CORS 설정
app.use(cors({
  origin: 'http://localhost:3000' // 허용할 출처를 여기에 지정
}));

// 미들웨어 등록
app.use(bodyParser.json());

// 라우터 등록
app.use('/', indexRouter);
app.use('/api/diary', diaryRouter);

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

  socket.on('newUser', (name) => {
    console.log(`${name} 님이 접속했습니다.`);
    io.emit('update', { type: 'connect', name: name, message: `${name} 님이 접속했습니다.` });
  });

  socket.on('message', (data) => {
    console.log('메시지 수신:', data);

    // 새로운 일기 항목 생성
    const newEntry = {
      id: diaryEntries.length + 1,
      message: data.message
    };

    // 배열에 새로운 일기 추가
    diaryEntries.push(newEntry);

    // 서버에서 모든 클라이언트에게 메시지 전송
    io.emit('update', { type: 'message', name: '익명', message: data.message });
  });

  socket.on('disconnect', () => {
    console.log('클라이언트 연결 해제');
  });
});

// React 정적 파일 제공
app.use(express.static(path.join(__dirname, 'build')));

// 모든 요청을 React 앱으로 라우팅
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', '../../src/components/Login.jsx'));
});

// 서버 시작
server.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
