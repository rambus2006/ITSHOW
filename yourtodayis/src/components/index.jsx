import React from 'react';                       // React 라이브러리를 임포트
import BackgroundComponent from './BackgroundComponent2'; // BackgroundComponent2 컴포넌트를 임포트
import Loginimg from './Loginimg';               // Loginimg 컴포넌트를 임포트
import styles from './Index.module.css';         // Index.module.css 모듈 스타일을 임포트

function Index() {
  // 로그인 창으로 이동하는 함수
  function toLogin() {
    window.location.href = "http://localhost:3000/Logintest"; // 로그인 페이지로 리다이렉트
  }

  return (
    <div onClick={toLogin} className={styles.Index}> {/* 클릭 시 toLogin 함수 호출, 클래스 이름 설정 */}
      <div className={styles.Text}> {/* 텍스트 컨테이너의 클래스 이름 설정 */}
        <div className={`${styles.blinking} ${styles.Text}`}> {/* 깜박이는 텍스트와 클래스 이름 설정 */}
          Press To Start
        </div>
      </div>
      <Loginimg /> {/* Loginimg 컴포넌트 렌더링 */}
      <BackgroundComponent /> {/* BackgroundComponent2 컴포넌트 렌더링 */}
    </div>
  );
}

export default Index;  // Index 컴포넌트를 외부로 내보냄
