const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const PORT = 4000;

// 더미 데이터 예시 (배열 형태)
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com' }
];

// CORS 설정
app.use(cors({
  origin: 'http://localhost:3000' // 허용할 출처를 여기에 지정
}));

// GET 요청에 대한 라우트 정의
app.get('/', (req, res) => {
  res.json(users); // users 배열을 JSON 형태로 반환
});

// HTTP 서버 생성
const server = http.createServer(app);

// Socket.IO 설정
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('새 클라이언트 연결');

  // 메시지 수신 시
  socket.on('message', (data) => {
    console.log('메시지 수신:', data);
    io.emit('message', data); // 모든 클라이언트에게 메시지 전송
  });

  // 클라이언트 연결 해제 시
  socket.on('disconnect', () => {
    console.log('클라이언트 연결 해제');
  });
});

// 서버 시작
server.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});