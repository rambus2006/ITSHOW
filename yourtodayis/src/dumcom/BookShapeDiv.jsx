import React from 'react';

const BookShapeDiv = () => {
  const divStyle = {
    backgroundColor: '#ffffff', // 하얀색 배경
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // 오른쪽 끝과 아래쪽에 그림자
    borderRadius: '10px', // 끝이 둥근 모서리
    width: '200px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const lineStyle = {
    position: 'absolute',
    left: '50%',
    top: '0',
    width: '2px',
    height: '100%',
    backgroundColor: '#000000', // 검정색 선
  };

  return (
    <div style={divStyle}>
      <div style={lineStyle}></div>
    </div>
  );
};

export default BookShapeDiv;
