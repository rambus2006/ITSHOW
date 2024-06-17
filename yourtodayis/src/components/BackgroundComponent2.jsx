import React from 'react';
import backgroundImage from './img/main.png'; // 이미지 경로 설정

const BackgroundComponent = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  
    height: '100vh',
    width: '100%'
  };

  return (
    <div style={divStyle}>
    </div>
  );
};

export default BackgroundComponent;
