import React, { useState } from 'react';
import './LeftPage.css'; // LeftPage 컴포넌트의 스타일 파일 임포트
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 임포트
import SocketModel from './SocketModel'; // SocketModel 컴포넌트 임포트

function LeftPage() {
  const [diaryText, setDiaryText] = useState(''); // 입력된 일기 내용을 상태로 관리하는 useState 훅

  // 일기 저장 버튼 클릭 시 호출될 함수
  const handleSaveDiary = () => {
    // 저장 후 처리할 로직을 추가할 수 있음
  };

  // 일기 입력창의 변경 이벤트 핸들러
  const handleDiaryInputChange = (e) => {
    setDiaryText(e.target.value); // 입력된 텍스트를 diaryText 상태에 업데이트
  };

  return (
    <div>
      <main className='main'>
        {/* SocketModel 컴포넌트에 props로 일기 내용과 이벤트 핸들러를 전달 */}
        <SocketModel
          diaryText={diaryText} // 입력된 일기 내용을 SocketModel 컴포넌트로 전달
          onDiaryInputChange={handleDiaryInputChange} // 입력 변경 이벤트 핸들러 전달
          onSaveDiary={handleSaveDiary} // 저장 버튼 클릭 이벤트 핸들러 전달
        />
      </main>
    </div>
  );
}

export default LeftPage;
