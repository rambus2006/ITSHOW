import './Diary.css';
import React, { useState, useEffect, useRef } from 'react';
import LeftPage from './LeftPage';
import RightPage from './RightPage';
import BackgroundComponent from './BackgroundComponent2.jsx';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';

function Diary() {
  const inusername = sessionStorage.getItem('name');
  const storagemail = sessionStorage.getItem('email');
  const [diaryEntries, setDiaryEntries] = useState([]);
  const timeoutRef = useRef(null); // 타이머 참조 변수

  useEffect(() => {
    const fetchDiaryEntries = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/diary');
        const data = response.data;
        setDiaryEntries(data); // 받아온 데이터를 상태에 저장
      } catch (error) {
        console.error('일기 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchDiaryEntries();
  }, []);

  const gotohome = () => {
    window.location.href = "http://localhost:3000/Home";
  };

  // 타이머 초기화 함수
  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      window.location.href = "http://localhost:3000/";
    }, 60000); // 60초 동안 아무런 변화가 없으면 홈으로 이동
  };

  // 사용자의 활동을 감지하는 이벤트 리스너 등록
  useEffect(() => {
    const handleUserActivity = () => {
      resetTimer();
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    resetTimer(); // 컴포넌트가 마운트될 때 타이머를 초기화

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="container">
      <section className="box">
        <div className="box-sidebar">
          <Sidebar />
        </div>
        <aside className="box-contents">
          <div className="book-shape-div">
            <header className='header'>
              <h3 className='name'>{inusername}의 일기장</h3>
              <hr className='line' />
            </header>
            <LeftPage />
            <div className="book-shape-line"></div>
            {diaryEntries && <RightPage diaries={diaryEntries.filter(d => d.email !== storagemail)} />}
          </div>
        </aside>
      </section>
      <BackgroundComponent />
    </div>
  );
}

export default Diary;
