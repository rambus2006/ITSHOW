import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './RightPage.module.css';

function RightPage() {
  const [secondUserName, setSecondUserName] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000'); // 데이터를 가져올 URL
        if (response.data.length > 0) {
          alert(response.data[1].name)
          setSecondUserName(response.data[1].name); // 첫 번째 데이터의 이름을 상태에 저장
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


  
  return (
    <div>
      <header className={style.header}>
        <h3 className={style.Rname}>{secondUserName}의 일기장</h3>
        <hr className={style.line} />
      </header>
      <main className={style.main}>
      
        
      </main>
      </div>
    )
}
export default RightPage;