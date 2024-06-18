const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const PORT = 8082;

// 더미 데이터 예시 (배열 형태)
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'alflaAkrh'},
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', password: 'alflaAkrh'},
  { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com', password: 'alflaAkrh'}
];



// CORS 설정
app.use(cors({
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
      //로그인에 성공했을 떄 alert 창
      socket.emit('loginResponse', { success: true, message: '로그인 성공' });
    } else {
      //로그인에 실패했을 때 alert 창
      socket.emit('loginResponse', { success: false, message: '로그인 실패' });
    }
  });

  socket.on('disconnect', () => {
    console.log('클라이언트 연결 해제');
  });
});

// React 정적 파일 제공
app.use(express.static(path.join(__dirname, 'build')));

// 모든 요청을 React 앱으로 라우팅
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 서버 시작
server.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
