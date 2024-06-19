let diaryEntries = [];

// 새로운 일기를 저장하는 함수
const saveDiaryEntry = (req, res) => {
  const { writer, message, createdAt,email } = req.body;

  // 받은 데이터를 다이어리 엔트리로 만듭니다
  const newEntry = {
    writer,
    message,
    createdAt,
    email
  };
   // 배열에 새로운 일기 추가
  diaryEntries.push(newEntry);
  res.status(200).json({ message: '일기가 성공적으로 저장되었습니다.' });
};

// 모든 일기 항목을 반환하는 함수
const getAllDiaryEntries = (req, res) => {
  res.status(200).json(diaryEntries);
};

module.exports = {
  saveDiaryEntry,
  getAllDiaryEntries
};