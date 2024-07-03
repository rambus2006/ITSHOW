import React, { useState } from 'react'; // React와 useState 함수 가져오기
import BackgroundComponent from './BackgroundComponent2.jsx'; // 배경 컴포넌트 가져오기
import BackgroundComponent3 from './BackgroundComponent3.jsx'; // 또 다른 배경 컴포넌트 가져오기
import DiaryCover from './img/DiaryCover.png'; // 다이어리 커버 이미지 가져오기
import './Home.css'; // CSS 파일 가져오기
import AlbumCover from './img/AlbumCover.png'; // 앨범 커버 이미지 가져오기
import per1img from './img/p1img.png'; // 첫 번째 사람 이미지 가져오기
import per2img from './img/p2img.png'; // 두 번째 사람 이미지 가져오기
import lineimg from './img/line.png'; // 라인 이미지 가져오기

function Home() {

  // 다이어리 페이지로 이동하는 함수
  const handleImageClick = () => {
    window.location.href="http://localhost:3000/Diary"; // 다이어리 페이지로 이동
  };

  // 앨범 페이지로 이동하는 함수
  const handleAlbumClick = () => {
    window.location.href="http://localhost:3000/Album"; // 앨범 페이지로 이동
  };

  // 세션 스토리지에서 사용자 이름 가져오는 함수
  const getname = () => {
    const name = sessionStorage.getItem("name"); // 세션 스토리지에서 이름 가져오기
    return name; // 이름 반환
  }

  return (
    <div className="Home"> {/* Home 클래스의 div */}
      <div className='elements'> {/* 요소들을 담는 div */}
        <div className='elementstable'> {/* 요소들 정리하는 테이블 div */}
          {/* 배경 위 요소들 */}
          {/* 헤더바 */}
            <div className='person1'> {/* 첫 번째 사람 정보를 담는 div */}
              <div className='person1_img'> {/* 첫 번째 사람 이미지 */}
                <img src={per1img} alt="" />
              </div>
              <div className='person1_src'> {/* 첫 번째 사람 이름과 소개 */}
                <h4>{getname()}</h4> {/* 사용자 이름 표시 */}
                <p>난 겨울이 그렇게 좋더라</p> {/* 소개글 */}
              </div>
            </div>
            {/* 라인 */}
            <div className='lineimg'> {/* 라인 이미지 */}
              <img src={lineimg} alt=''/>
            </div>
            <div className='person2'> {/* 두 번째 사람 정보를 담는 div */}
              <div className='person2_img'> {/* 두 번째 사람 이미지 */}
                  <img src={per2img} alt="" />
                </div>
                <div className='person2_src'> {/* 두 번째 사람 이름과 소개 */}
                  <h4>임한별</h4> {/* 이름 */}
                  <p>난 여름</p> {/* 소개글 */}
                </div>
            </div>
          {/* 표지  */}
          {/* 다이어리 & 앨범 이동 */}
          
            <div className="img-container" onClick={handleImageClick}> {/* 다이어리 커버 이미지 */}
              <img src={DiaryCover} alt="Diary Cover"/>
            </div>
            <div className="img-container2" onClick={handleAlbumClick}> {/* 앨범 커버 이미지 */}
              <img src={AlbumCover} alt="Diary Cover"/>
            </div>
        </div>
      </div>
      
      {/* 배경 */}
      <BackgroundComponent3 /> {/* 배경 컴포넌트3 */}
      <BackgroundComponent /> {/* 배경 컴포넌트2 */}
    </div>
  );
}

export default Home; // Home 컴포넌트를 내보내기
