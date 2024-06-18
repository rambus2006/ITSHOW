const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

// 라우터 설정
const indexRouter = require('./routes/index');
const messageRouter = require('./routes/messages');

// 미들웨어
app.use(cors({
  origin: 'http://localhost:3000' // 허용할 출처를 여기에 지정
}));
app.use(bodyParser.json());

// indexRouter로 이동할 수 있게 연결 
app.use('/', indexRouter);
app.use('/api/messages', messageRouter);

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
