// 배경사진을 넣는 컴포넌트 

import React from 'react';
import backgroundImage from './img/headerback.png'; // 이미지 경로 설정

const BackgroundComponent3 = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex:1,
    position:'absolute',
    height: '28vh',
    width: '100%'
  };

  return (
    <div style={divStyle}>
    </div>
  );
};

export default BackgroundComponent3;
