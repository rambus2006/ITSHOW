import './Diary.css';
import React, { useState, useEffect } from 'react';
import LeftPage from './LeftPage';
import RightPage from './RightPage';
import BackgroundComponent from './BackgroundComponent2.jsx';
import axios from 'axios';
import Sidebar from './Sidebar.jsx';

//다이어리에서 fetch해서 필터로 거르기 
//props로 right page로 보내기 
function Diary() {
  const inusername = sessionStorage.getItem('name');
  const storagemail = sessionStorage.getItem('email');
  const [diaryEntries, setDiaryEntries] = useState([]);

  useEffect(() => {
    const fetchDiaryEntries = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/diary');
        // console.log('서버 응답:', response.data); // 데이터를 확인하는 로그
        const data = response.data;
        setDiaryEntries(data); // 받아온 데이터를 상태에 저장
        
      } catch (error) {
        console.error('일기 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchDiaryEntries();
  }, []);

  return (
    <div class="container">
      <section class="box">
        <div class="box-sidebar">
            <Sidebar/>
          </div>
          <aside class="box-contents">
              <div className="book-shape-div">
                <header className='header'>
                  <h3 className='name'>{inusername}의 일기장</h3>
                  <hr className='line' />
                </header>
                <LeftPage />
                <div className="book-shape-line"></div>
                {
                  diaryEntries && <RightPage diaries={diaryEntries.filter(d => d.email !== storagemail)}/> 
                }
              </div>
        </aside>
        
      </section>
      <BackgroundComponent />

    </div>
  );
}

export default Diary;
