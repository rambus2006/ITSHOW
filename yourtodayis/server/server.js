const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const PORT = 4000;

// 라우터 설정
const indexRouter = require('./routes/index');
const diaryRouter = require('./routes/diary');

// 미들웨어 등록
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(bodyParser.json());

// 기본 경로로 이동할 수 있도록 설정 
app.use('/', indexRouter);

// /api/diary 경로에 diaryRouter 등록
app.use('/api/diary', diaryRouter);

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});