import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LeftPage.css';
import Modal from './Modal';
import CommentSection from './CommentSection'
import 'bootstrap/dist/css/bootstrap.min.css';
import SocketModel from './SocketModel';

function LeftPage() {
  const [diaryText, setDiaryText] = useState(''); // 입력된 일기 내용을 상태로 관리

  const handleSaveDiary = () => {
    // 또는 다른 방식으로 출력할 수 있음 (예: 모달창 등)
  };

  const handleDiaryInputChange = (e) => {
    setDiaryText(e.target.value); // 입력된 텍스트를 diaryText 상태에 업데이트
  };
  return (
    <div>
      <main className='main'>
        <SocketModel
          diaryText={diaryText} // 입력된 일기 내용을 Modal 컴포넌트로 전달
          onDiaryInputChange={handleDiaryInputChange} // 입력 변경 이벤트 핸들러 전달
          onSaveDiary={handleSaveDiary} // 저장 버튼 클릭 이벤트 핸들러 전달
        />
        {/* 댓글 기능(정렬이 안되서 보류) */}
        {/* <CommentSection/> */}
        {/* 댓글 기능 대신 사진...나중에 채팅 기능으로 변환할 예정  */}
      </main>
      
    </div>
  );
}

export default LeftPage;