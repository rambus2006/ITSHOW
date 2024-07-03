import './Diary.css'; // CSS 파일 가져오기
import React, { useState, useEffect, useRef } from 'react'; // React와 여러 훅 가져오기
import LeftPage from './LeftPage'; // 왼쪽 페이지 컴포넌트 가져오기
import RightPage from './RightPage'; // 오른쪽 페이지 컴포넌트 가져오기
import BackgroundComponent from './BackgroundComponent2.jsx'; // 배경 컴포넌트 가져오기
import axios from 'axios'; // HTTP 요청을 보내기 위한 axios 라이브러리 가져오기
import Sidebar from './Sidebar.jsx'; // 사이드바 컴포넌트 가져오기

function Diary() {
  // 사용자 이름과 이메일을 세션 스토리지에서 가져오기
  const inusername = sessionStorage.getItem('name');
  const storagemail = sessionStorage.getItem('email');
  // 일기 항목을 저장할 상태 변수와 상태 업데이트 함수
  const [diaryEntries, setDiaryEntries] = useState([]);
  // 타이머를 참조하기 위한 ref 변수
  const timeoutRef = useRef(null);

  // 컴포넌트가 처음 렌더링될 때 일기 데이터를 가져오는 함수
  useEffect(() => {
    const fetchDiaryEntries = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/diary'); // 서버에서 일기 데이터를 가져오기
        const data = response.data;
        setDiaryEntries(data); // 받아온 데이터를 상태에 저장
      } catch (error) {
        console.error('일기 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchDiaryEntries();
  }, []);

  // 홈 페이지로 이동하는 함수
  const gotohome = () => {
    window.location.href = "http://localhost:3000/Home"; // 홈 페이지로 이동
  };

  // 타이머 초기화 함수
  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // 기존 타이머를 지우기
    }
    timeoutRef.current = setTimeout(() => {
      window.location.href = "http://localhost:3000/"; // 60초 동안 아무런 변화가 없으면 홈으로 이동
    }, 60000); // 60초 설정
  };

  // 사용자의 활동을 감지하는 이벤트 리스너 등록
  useEffect(() => {
    const handleUserActivity = () => {
      resetTimer(); // 사용자가 활동하면 타이머를 초기화
    };

    window.addEventListener('mousemove', handleUserActivity); // 마우스 움직임 감지
    window.addEventListener('keydown', handleUserActivity); // 키보드 입력 감지

    resetTimer(); // 컴포넌트가 마운트될 때 타이머를 초기화

    return () => {
      window.removeEventListener('mousemove', handleUserActivity); // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener('keydown', handleUserActivity);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // 타이머 제거
      }
    };
  }, []);

  return (
    <div className="container"> {/* 전체 컨테이너 */}
      <section className="box"> {/* 상자 모양 섹션 */}
        <div className="box-sidebar"> {/* 사이드바 영역 */}
          <Sidebar /> {/* 사이드바 컴포넌트 */}
        </div>
        <aside className="box-contents"> {/* 콘텐츠 영역 */}
          <div className="book-shape-div"> {/* 책 모양 div */}
            <header className='header'> {/* 헤더 */}
              <h3 className='name'>{inusername}의 일기장</h3> {/* 사용자 이름의 일기장 */}
              <hr className='line' /> {/* 가로줄 */}
            </header>
            <LeftPage /> {/* 왼쪽 페이지 컴포넌트 */}
            <div className="book-shape-line"></div> {/* 책 모양의 중앙 라인 */}
            {diaryEntries && <RightPage diaries={diaryEntries.filter(d => d.email !== storagemail)} />} {/* 오른쪽 페이지 컴포넌트, 사용자의 이메일이 아닌 일기들만 표시 */}
          </div>
        </aside>
      </section>
      <BackgroundComponent /> {/* 배경 컴포넌트 */}
    </div>
  );
}

export default Diary; // Diary 컴포넌트를 내보내기
