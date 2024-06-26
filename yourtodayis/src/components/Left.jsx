// 소켓 작업 전 컴포넌트  
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import './Modal.module.css'; // 스타일 파일

function Modal2({ sendDataToParent }) {
  const [showModal, setShowModal] = useState(false);
  const [inputText, setInputText] = useState(''); // 입력된 텍스트를 상태로 관리
  const [htmlContent, setHtmlContent] = useState('일기를 입력하세요');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value); // 입력된 텍스트 업데이트
  };

  const handleSaveChanges = async () => {
    const htmlCode = `<p>${inputText}</p>`; // Create HTML string
    setHtmlContent(htmlCode); // Store HTML content in state

    // 서버에다가 내용 보내기
    try {
      const response = await axios.post('http://localhost:4000/api/diary', {
        message: inputText,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('Response from server:', response.data);

      // 성공적으로 저장 후 inputText 초기화
      setInputText('');
      handleCloseModal(); // 모달 닫기
    } catch (error) {
      console.error('Error saving diary entry:', error);
      handleCloseModal(); // 모달 닫기

    }
  };

  return (
    <div className="Modal">
      <p className='inputText' onClick={handleOpenModal}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </p>

      <Modal show={showModal} onHide={handleCloseModal} className="texttoleft">
        <Modal.Header closeButton>
          <Modal.Title>일기 작성</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="일기 내용을 입력하세요..."
            rows={5}
            style={{ width: '100%', padding: '10px' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modal2;
