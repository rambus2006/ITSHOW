import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './RightPage.module.css'; // CSS 파일 임포트

const socket = io('http://localhost:4000'); // 서버의 주소와 포트에 맞게 URL을 설정합니다.

const DiaryList = () => {
  const [diaries, setDiaries] = useState([]); // 일기 목록을 관리할 상태 변수
  const sessionEmail = sessionStorage.getItem('email') || ''; // 세션 스토리지에서 이메일 가져오기

  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행되는 부수 효과 함수
    // 서버로부터 일기 저장 이벤트를 받아 처리합니다.
    socket.on('diarySaved', (entry) => {
      // 자신의 이메일과 다를 경우에만 새로운 일기를 목록에 추가합니다.
      if (entry.email !== sessionEmail) {
        setDiaries((prevDiaries) => [...prevDiaries, entry]);
      }
    });

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
    return () => {
      socket.off('diarySaved');
    };
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정합니다.

  return (
    <div className='list'>
      <ul className='li'>
        {/* 일기 목록을 표시합니다. */}
        {diaries.map((entry, idx) => (
          <li key={idx} style={{top: ((idx + 1) * 200) + "px"}}>
            <p>{entry.message}</p>
            <p>{entry.createdAt}</p>
            <p>{entry.writer}로부터 온 일기</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiaryList;
