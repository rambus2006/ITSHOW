import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styles from './Login.module.css'; // CSS 파일 import
import BackgroundComponent from './BackgroundComponent2';

const socket = io('http://localhost:4000');

const Logintest = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // loginResponse 이벤트를 수신하여 처리
    
    socket.on('loginResponse', (response) => {
      //이름 저장
      sessionStorage.setItem('name',response.name)
      
      if (response.success) {
        alert('로그인 성공');
      
        // 로그인 성공 시 localStorage에 데이터 저장
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);

        // 서버에서 사용자 이름 가져오는 함수
        window.location.href="http://localhost:3000/Home"
      } else {
        alert('로그인 실패');
      }
    });

    // 컴포넌트가 언마운트될 때 socket 이벤트 리스너 제거
    return () => {
      socket.off('loginResponse');
    };
  }, [email, password]);
  
  const handleLogin = (e) => {
    e.preventDefault(); // 폼 submit 기본 동작 막기

    socket.emit('login', { email, password });
  };

  return (
    <div>

      <div className={styles.logincontainer}>
        <BackgroundComponent />
        <div className={styles.LoginForm}>
          <form onSubmit={handleLogin} className={styles.Loginform}>
            <div className={styles.title}>
              <h2 className={styles.h2text}>Login</h2>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="username" className={styles.label}>Email:</label>
              <input 
                type="text" 
                id="username" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input} 
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password:</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Password"
                value={password}
                className={styles.input} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button  type="submit" className={styles.button1}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logintest;
