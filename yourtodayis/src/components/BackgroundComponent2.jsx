// 배경사진을 넣는 컴포넌트 

import React from 'react';
import backgroundImage from './img/main.png'; // 이미지 경로 설정

const BackgroundComponent = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    position: 'fixed', /* 화면에 고정된 위치 */
    top: 0,
    left: 0,
    zIndex: -1 /* LoginForm보다 뒤에 배치 */

  };

  return (
    <div style={divStyle}>
    </div>
  );
};

export default BackgroundComponent;
