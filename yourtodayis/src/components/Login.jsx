import React, { useState } from 'react';
import styles from './Login.module.css'; // CSS 파일 import
import BackgroundComponent from './BackgroundComponent2';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    // 여기에 로그인 로직 추가
 
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Login response:', data);
      // 여기서 서버의 응답을 처리할 수 있습니다.
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className={styles.logincontainer}>
      <BackgroundComponent />
      <div className={styles.LoginForm}>
        <form onSubmit={handleSubmit} className={styles.Loginform}>
          <div className={styles.title}>
            <h2 className={styles.h2text}>Login</h2>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>Username:</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className={styles.input} 
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password:</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className={styles.input} 
            />
          </div>
          <button type="submit" className={styles.button1}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
