import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LeftPage.css';
import Modal from './Modal';
import CommentSection from './CommentSection'
import 'bootstrap/dist/css/bootstrap.min.css';

function LeftPage() {
  const [firstUserName, setFirstUserName] = useState('');
  const [diaryText, setDiaryText] = useState(''); // 입력된 일기 내용을 상태로 관리
  const [dataFromChild, setDataFromChild] = useState('');

  const handleDataFromChild = (data) => {
    // 자식 컴포넌트에서 전달한 데이터 처리
    console.log('Data from child:', data);
    setDataFromChild(data); // 부모 컴포넌트 상태 업데이트
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000'); // 데이터를 가져올 URL
        if (response.data.length > 0) {
          setFirstUserName(response.data[0].name); // 첫 번째 데이터의 이름을 상태에 저장
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // 데이터 가져오는 함수 호출

    // cleanup 함수 (선택사항): 컴포넌트가 언마운트될 때 호출됨
    return () => {
      // cleanup 코드 (예: 타이머나 구독 해제)
    };
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정 (컴포넌트가 마운트될 때만 실행)

  const handleSaveDiary = () => {
    // 저장 버튼 클릭 시 diaryText 상태를 출력
    alert(diaryText);
    // 또는 다른 방식으로 출력할 수 있음 (예: 모달창 등)
  };

  const handleDiaryInputChange = (e) => {
    setDiaryText(e.target.value); // 입력된 텍스트를 diaryText 상태에 업데이트
  };

  return (
    <div>
      <header className='header'>
        <h3 className='name'>{firstUserName}의 일기장</h3>
        <hr className='line' />
      </header>
      <main className='main'>
        {/* Modal 컴포넌트 */}
        <Modal
          diaryText={diaryText} // 입력된 일기 내용을 Modal 컴포넌트로 전달
          onDiaryInputChange={handleDiaryInputChange} // 입력 변경 이벤트 핸들러 전달
          onSaveDiary={handleSaveDiary} // 저장 버튼 클릭 이벤트 핸들러 전달
          sendDataToParent={handleDataFromChild}
        />
        {/* 댓글 기능(정렬이 안되서 보류) */}
        <CommentSection/>
      
      </main>
      
    </div>
  );
}

export default LeftPage;
