// 배경사진을 넣는 컴포넌트 

import React from 'react';
import LoginImage from './img/book.png'; // 이미지 경로 설정

const BackgroundComponent = () => {
  const divStyle = {
    backgroundImage: `url(${LoginImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position:'absolute',
    height: '100vh',
    width: '100%'
  };

  return (
    <div style={divStyle}>
    </div>
  );
};

export default BackgroundComponent;
