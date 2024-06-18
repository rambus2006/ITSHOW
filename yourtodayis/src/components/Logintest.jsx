import React, { useState,useEffect } from 'react';
import io from 'socket.io-client';
import styles from './Login.module.css'; // CSS 파일 import

import BackgroundComponent from './BackgroundComponent2';
const socket = io('http://localhost:4000');

const Logintest = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  useEffect(() => {
    // loginResponse 이벤트를 수신하여 처리
    socket.on('loginResponse', (response) => {
      if (response.success) {
        alert('로그인 성공');
      } else {
        alert('로그인 실패');
      }
      setLoginMessage(response.message);
    });

    // 컴포넌트가 언마운트될 때 socket 이벤트 리스너 제거
    return () => {
      socket.off('loginResponse');
    };
  }, []);
  const handleLogin = () => {
    socket.emit('login', { email, password });

    socket.on('loginResponse', (response) => {
      setLoginMessage(response.message);
    });
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
            <label htmlFor="useremail" className={styles.label}>Useremail:</label>
            <input 
                type="text" 
                id="useremail" 
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
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="submit" className={styles.button1}>Login</button>
        </form>
        </div>
        </div>
    </div>
    
  );
};

export default Logintest;
