import React from 'react';
import BackgroundComponent from './BackgroundComponent2';
import Loginimg from './Loginimg';
import styles from './Index.module.css';

function Index() {
  // 로그인 창으로 이동
  function toLogin() {
    window.location.href = "http://localhost:3000/Login";
  }

  return (
    <div onClick={toLogin} className={styles.Index}>
      <div className={styles.Text}>
        <div className={`${styles.blinking} ${styles.Text}`}>
          Press To Start
        </div>
      </div>
      <Loginimg />
      <BackgroundComponent />
    </div>
  );
}

export default Index;
