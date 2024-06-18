let diaryEntries = [];

// 새로운 일기를 저장하는 함수
const saveDiaryEntry = (req, res) => {
  const { message } = req.body;

  // 새로운 일기 항목 생성
  const newEntry = {
    id: diaryEntries.length + 1,
    message: message
  };

  // 배열에 새로운 일기 추가
  diaryEntries.push(newEntry);

  // 성공적인 응답 반환
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
