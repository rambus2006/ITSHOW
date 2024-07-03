// 배경사진을 넣는 컴포넌트

import React from 'react';
import backgroundImage from './img/main.png'; // 이미지 경로 설정

const BackgroundComponent = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`, // 백그라운드 이미지 설정
    backgroundSize: 'cover',                   // 이미지가 요소를 완전히 덮도록 설정
    backgroundPosition: 'center',              // 이미지가 가운데에 위치하도록 설정
    height: '100vh',                           // 높이를 뷰포트 높이에 맞게 설정
    width: '100%',                             // 너비를 100%로 설정
    position: 'fixed',                         // 화면에 고정된 위치 설정
    top: 0,                                    // 상단에서 0 위치
    left: 0,                                   // 왼쪽에서 0 위치
    zIndex: -1                                 // LoginForm보다 뒤에 배치
  };

  return (
    <div style={divStyle}> {/* div 스타일을 위에서 정의한 divStyle로 설정 */}
    </div>
  );
};

export default BackgroundComponent; // BackgroundComponent 컴포넌트를 외부로 내보냄
