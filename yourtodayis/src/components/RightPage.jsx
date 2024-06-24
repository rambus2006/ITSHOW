import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './RightPage.module.css';

const socket = io('http://localhost:4000'); // 서버의 주소와 포트에 맞게 URL을 설정합니다.

const DiaryList = () => {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    // 일기 항목 수신
    socket.on('diarySaved', (entry) => {
      setDiaries((prevDiaries) => [...prevDiaries, entry]);
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      socket.off('diarySaved');
    };
  }, []);

  return (
    <div className='list'>
      <ul className='li'>
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
