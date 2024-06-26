import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import styles from './Login.module.css'; // CSS 파일 import
import BackgroundComponent from './BackgroundComponent2';
import kakaobutton from './img/kakao_login_small.png';
//import { redirect } from '/react-router-dom';

const socket = io('http://localhost:4000');

const Logintest = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginResult, setLoginResult] = useState(false);
  const [kakaoToken, setKakaoToken] = useState(null);

  useEffect(() => {
    // Kakao SDK 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    script.onload = () => {
      // Kakao SDK 스크립트가 로드된 후 Kakao.init() 호출
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init('397368ee84d7d601d5665891d7ef7186');
      }
      console.log(window.Kakao.isInitialized());
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

      //일반적으로 로그인 할 때 
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

  //카카오로 로그인 할 때 
  const loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: function(authObj) {
        console.log('Kakao login success', authObj);
        setKakaoToken(authObj.access_token);
        setLoginResult(true);
      },
      fail: function(err) {
        console.error('Kakao login failed', err);
      },
    });
  };

  useEffect(() => {
    if (loginResult && kakaoToken) {
      fetchUserInfo();
    }
  }, [loginResult, kakaoToken]);

  const fetchUserInfo = () => {
    window.Kakao.API.request({
      url: '/v2/user/me',
      data: {
        property_keys: ['kakao_account.email', 'kakao_account.profile.nickname'],
      },
      success: function(response) {
        console.log(response);
        const { kakao_account } = response;
        // console.log(kakao_account);
        const profile_nickname = kakao_account.profile.nickname;
        const account_email = kakao_account.email;

        // 카카오로 로그인할 때 
        // 세션 스토리지에 사용자 정보 저장
        sessionStorage.setItem('name', profile_nickname);
        sessionStorage.setItem('email', account_email);

        console.log(`닉네임: ${profile_nickname}, 이메일: ${account_email}`);
        //window.location.href = "http://localhost:3000/Home";

      },
      fail: function(error) {
        alert("다시 로그인을 다시하세요.")
        console.error('Failed to fetch user info', error);
      },
    });
    
  };

  return (
    <div>
      
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
            <div id="kakao-login-btn" href="#" onClick={loginWithKakao} className={styles.kakaobutton} width="240">
                <img src={kakaobutton} alt="카카오 로그인 버튼" />
            </div>
            
            
          </form>
        </div>
      </div>
      <h1>{loginResult ? "Kakao login success" : "Kakao login not yet"}</h1>
    </div>
  );
};

export default Logintest;
