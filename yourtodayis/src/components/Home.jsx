import React, { useState } from 'react';
import BackgroundComponent from './BackgroundComponent2.jsx';
import BackgroundComponent3 from './BackgroundComponent3.jsx';
import DiaryCover from './img/DiaryCover.png'; // 이미지 경로 설정
import './Home.css';
import DiaryPage from './DiaryPage.jsx';
import per1img from './img/p1img.png'
import per2img from './img/p2img.png'
import lineimg from './img/line.png'

function Home() {
  

  // 컴포넌트 이동
  const handleImageClick = () => {
    window.location.href="http://localhost:3000/Diary"
  };
  // const handleCloseDiary = () => {
    
  // };
  return (
    <div className="Home">
      <div className='elements'>
        <div className='elementstable'>
          {/* 배경 위 요소들 */}
          {/* 헤더바 */}
            <div className='person1'>
              <div className='person1_img'>
                <img src={per1img} alt="" />
              </div>
              <div className='person1_src'>
                <h4>임한별</h4>
                <p>난 겨울이 그렇게 좋더라</p>
              </div>
            </div>
            {/* 라인 */}
            <div className='lineimg'>
              <img src={lineimg} alt=''/>
            </div>
            <div className='person2'>
              <div className='person2_img'>
                  <img src={per2img} alt="" />
                </div>
                <div className='person2_src'>
                  <h4>문태일</h4>
                  <p>난 여름</p>
                </div>
            </div>
          {/* </div> */}
          {/* 표지  */}
          {/* 다이어리 & 앨범이동 */}
          
            <div className="img-container" onClick={handleImageClick}>
              <img src={DiaryCover} alt="Diary Cover"/>
            </div>
          
        </div>
      </div>
      
      {/* 배경  */}
      <BackgroundComponent3 />
      <BackgroundComponent />
    </div>
  );
}

export default Home;
