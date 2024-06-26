import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styles from './Login.module.css'; // CSS 파일 import
import BackgroundComponent from './BackgroundComponent2';

const socket = io('http://localhost:4000');
const { Kakao } = window;

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginResult, setLoginResult] = useState(false);

  useEffect(() => {
    // Kakao SDK 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    script.onload = () => {
      // Kakao SDK 스크립트가 로드된 후 Kakao.init() 호출
      Kakao.init('397368ee84d7d601d5665891d7ef7186');
    };

    document.head.appendChild(script);

    // 컴포넌트가 언마운트될 때 스크립트 제거
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // loginResponse 이벤트를 수신하여 처리
    socket.on('loginResponse', (response) => {
      sessionStorage.setItem('name', response.name);

      if (response.success) {
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        window.location.href = "http://localhost:3000/Home";
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
    e.preventDefault();
    socket.emit('login', { email, password });
  };

  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/Home',
    });
  };

  const fetchUserInfo = () => {
    Kakao.API.request({
      url: '/v2/user/me',
      data: {
        property_keys: ['kakao_account.email', 'kakao_account.profile.nickname'],
      },
    })
    .then(function(response) {
      const { kakao_account } = response;
      console.log(kakao_account);
      const profile_nickname = kakao_account.profile.nickname;
      const account_email = kakao_account.email;

      setLoginResult(true);

      console.log(`닉네임: ${profile_nickname}, 이메일: ${account_email}`);
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  useEffect(() => {
    if (loginResult) {
      fetchUserInfo();
    }
  }, [loginResult]);

  return (
    <div>
      <a id="kakao-login-btn" href="#" onClick={loginWithKakao}>
        <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
      </a>
      <p id="token-result"></p>
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
            <button type="submit" className={styles.button1}>Login</button>
          </form>
        </div>
      </div>
      <h1>{loginResult ? "Kakao login success" : "Kakao login not yet"}</h1>
    </div>
  );
};

export default LoginComponent;
