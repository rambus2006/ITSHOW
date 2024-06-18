let message = '';

exports.saveMessage = (req, res) => {
  const { htmlContent } = req.body;
  message = htmlContent; // 메시지 저장

  // 클라이언트에 성공 응답 보내기
  res.status(200).json({ message: '메시지가 성공적으로 저장되었습니다.' });
};

exports.getMessage = (req, res) => {
  res.status(200).json({ message });
};
