// Album.jsx 파일

import React, { useState, useEffect, useRef } from 'react'; // 리액트 훅들을 가져옵니다.
import style from './Album.module.css'; // 앨범 컴포넌트의 스타일 파일을 가져옵니다.
import BackgroundComponent from './BackgroundComponent2'; // 배경 컴포넌트를 가져옵니다.
import Polaroid from './Polaroid'; // 폴라로이드 컴포넌트를 가져옵니다.
import { FaHome } from "react-icons/fa"; // 홈 아이콘을 가져옵니다.

import r1 from './img/r1.jpg'; // 이미지 파일을 가져옵니다.
import r2 from './img/r2.jpg'; // 이미지 파일을 가져옵니다.
import line from './img/Vector 15.png'; // 이미지 파일을 가져옵니다. (서로 다른 이미지로 설정 필요)
import r4 from './img/r4.png'; // 이미지 파일을 가져옵니다. (서로 다른 이미지로 설정 필요)
import r5 from './img/r5.jpg'; // 이미지 파일을 가져옵니다.
import r6 from './img/r6.jpg'; // 이미지 파일을 가져옵니다.
import r7 from './img/r7.jpg'; // 이미지 파일을 가져옵니다.
import r8 from './img/r8.jpg'; // 이미지 파일을 가져옵니다.

const Album = () => {
  const [picture, setPicture] = useState(null); // 업로드된 사진을 저장하는 상태 변수
  const inputRef = useRef(null); // 파일 입력 요소에 접근하기 위한 useRef 훅
  const [timer, setTimer] = useState(60); // 타이머 상태 변수
  const timeoutRef = useRef(null); // 타이머의 ID를 저장하는 useRef 훅

  // 홈으로 이동하는 함수
  const gotohome = () => {
    window.location.href = "http://localhost:3000/Home";
  };

  // 사진 변경 시 처리하는 함수
  const handleChangePicture = () => {
    const file = inputRef.current.files[0]; // 선택된 첫 번째 파일을 가져옵니다.
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPicture(reader.result); // 업로드된 사진을 상태에 설정합니다.
      };
      reader.readAsDataURL(file); // 파일을 데이터 URL로 읽습니다.
    }
    resetTimer(); // 타이머를 재설정합니다.
  };

  // 폴라로이드 클릭 시 처리하는 함수
  const handlePolaroidClick = () => {
    inputRef.current.click(); // 파일 입력 요소에 클릭 이벤트를 발생시킵니다.
    resetTimer(); // 타이머를 재설정합니다.
  };

  // 타이머를 초기화하는 함수
  const resetTimer = () => {
    setTimer(60); // 타이머를 60초로 설정합니다.
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // 기존의 타이머를 제거합니다.
    }
    timeoutRef.current = setTimeout(() => {
      window.location.href = "http://localhost:3000"; // 60초 후에 홈 화면으로 이동합니다.
    }, 60000);
  };

  // 사용자의 활동을 감지하여 타이머를 재설정하는 이벤트 리스너를 등록합니다.
  useEffect(() => {
    const handleUserActivity = () => {
      resetTimer(); // 사용자 활동이 감지되면 타이머를 재설정합니다.
    };

    window.addEventListener('mousemove', handleUserActivity); // 마우스 이벤트를 감지합니다.
    window.addEventListener('keydown', handleUserActivity); // 키보드 이벤트를 감지합니다.

    resetTimer(); // 컴포넌트가 마운트될 때 타이머를 초기화합니다.

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // 타이머가 활성화된 경우 제거합니다.
      }
    };
  }, []);

  // JSX를 반환하여 화면에 렌더링합니다.
  return (
    <div>
      <FaHome className={style.home} onClick={gotohome} /> {/* 홈으로 이동하는 아이콘 버튼 */}
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.r1}>
            <Polaroid
              imageUrl={r1}
              title="Uploaded Image"
              description="2022-05-19"
            />
          </div>
          <div className={style.r2}>
            <Polaroid
              imageUrl={r2}
              title="Example Image 2"
              description="2022-08-28"
            />
          </div>
          <div className={style.r3}>
            <Polaroid
              imageUrl={r6}
              title="Example Image 3"
              description="2023-09-13"
            />
          </div>
          <div className={style.r4}>
            <input type="file" accept="image/*" className={style.fileinput} ref={inputRef} onChange={handleChangePicture} style={{ display: 'none' }} />
            <div onClick={handlePolaroidClick}>
              <Polaroid
                imageUrl={picture || r4}
                title="Example Image 4"
                description="2024-06-21"
              />
            </div>
          </div>
        </div>
        <div className={style.row2}>
          <div className={style.r5}>
            <Polaroid
              imageUrl={r5}
              title="Example Image 5"
              description="2022-06-23"
            />
          </div>
          <div className={style.r6}>
            <Polaroid
              imageUrl={r7}
              title="Example Image 6"
              description="2023-07-04"
            />
          </div>
          <div className={style.r7}>
            <div onClick={handlePolaroidClick}>
              <Polaroid
                imageUrl={r8}
                title="Example Image 7"
                description="2024-01-31"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.line}>
        <img src={line} alt=""/>
      </div>
      <BackgroundComponent /> {/* 배경 컴포넌트 */}
    </div>
  );
}

export default Album;
