// server.js 파일에 아래 코드 추가
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000; // 사용할 포트 번호

// 더미 데이터 예시 (배열 형태)
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com' }
];
app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000' // 허용할 출처를 여기에 지정
}));

// GET 요청에 대한 라우트 정의
app.get('/', (req, res) => {
  res.json(users); // users 배열을 JSON 형태로 반환
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
