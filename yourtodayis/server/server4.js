// Express와 Socket.IO를 사용한 서버 코드입니다. 클라이언트와 실시간으로 데이터를 주고받고, 파일 업로드 처리와 같은 기능을 수행합니다.

const express = require('express'); // Express 웹 애플리케이션 프레임워크를 가져옵니다.
const cors = require('cors'); // CORS(Cross-Origin Resource Sharing)를 위한 미들웨어를 가져옵니다.
const http = require('http'); // HTTP 서버를 생성하기 위한 모듈을 가져옵니다.
const socketIo = require('socket.io'); // Socket.IO를 사용하기 위한 모듈을 가져옵니다.
const path = require('path'); // 파일 경로와 관련된 유틸리티를 제공하는 모듈을 가져옵니다.
const bodyParser = require('body-parser'); // 요청 본문을 파싱하는 데 사용되는 모듈을 가져옵니다.

const app = express(); // Express 애플리케이션을 생성합니다.
const PORT = 4000; // 서버 포트 번호를 설정합니다.

// 가상의 사용자 데이터 (로그인 화면)
const users = [
  { id: 1, name: '이승준', email: 'john.doe@example.com', password: 'alflaAkrh' },
  { id: 2, name: '문태일', email: 'jane.smith@example.com', password: 'alflaAkrh' },
  { id: 3, name: '임한별', email: 'mike.johnson@example.com', password: 'alflaAkrh' }
];

// CORS 설정
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000' // 로컬 개발 서버 주소를 허용합니다.
}));

// HTTP 서버 생성
const server = http.createServer(app);

// Socket.IO 설정
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000', // 클라이언트의 접근을 허용할 출처를 설정합니다.
    methods: ['GET', 'POST'] // 허용할 HTTP 메서드를 지정합니다.
  }
});

// 클라이언트가 소켓에 연결되었을 때 처리
io.on('connection', (socket) => {
  console.log('새 클라이언트 연결');

  // 로그인 요청 처리
  socket.on('login', (data) => {
    console.log('로그인 요청 수신:', data);
    const { email, password } = data;
    const user = users.find(user => user.email === email && user.password === password);
    const username = user ? user.name : null;

    if (user) {
      socket.emit('loginResponse', { success: true, message: '로그인 성공', name: username });
    } else {
      socket.emit('loginResponse', { success: false, message: '로그인 실패' });
    }
  });

  // 일기 저장 요청 처리
  socket.on('saveDiary', (data) => {
    console.log('일기 저장 요청 수신:', data);

    // 모든 클라이언트에게 일기 저장 이벤트 브로드캐스트
    socket.broadcast.emit('diarySaved', {
      ...data,
      createdAt: new Date().toLocaleString()
    });
  });

  // 클라이언트 연결 해제 처리
  socket.on('disconnect', () => {
    console.log('클라이언트 연결 해제');
  });
});

// React 정적 파일 제공
app.use(express.static(path.join(__dirname, 'build')));

// 추가한 부분: 요청 본문을 JSON으로 파싱하기 위한 미들웨어 설정
app.use(bodyParser.json());

// 라우터 설정
const indexRouter = require('./routes/index');
const diaryRouter = require('./routes/diary');

app.use('/', indexRouter); // 기본 경로 라우터
app.use('/api/diary', diaryRouter); // 일기 API 관련 라우터

// 서버 시작
server.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
