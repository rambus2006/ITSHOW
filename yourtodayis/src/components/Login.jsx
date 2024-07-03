import React, { useState, useEffect } from 'react'; // React와 필요한 기능들을 가져옴
import io from 'socket.io-client';                  // socket.io를 사용하기 위해 가져옴
import styles from './Login.module.css';            // CSS 파일을 가져옴
import BackgroundComponent from './BackgroundComponent2'; // 배경 컴포넌트를 가져옴

const socket = io('http://localhost:4000'); // 서버와 연결하기 위해 socket.io 사용
const { Kakao } = window; // 전역 객체에서 Kakao SDK 사용

const LoginComponent = () => {
  // 이메일 상태를 관리하는 함수
  const [email, setEmail] = useState('');
  // 비밀번호 상태를 관리하는 함수
  const [password, setPassword] = useState('');
  // 로그인 결과 상태를 관리하는 함수
  const [loginResult, setLoginResult] = useState(false);

  // 컴포넌트가 처음 화면에 나타날 때 실행되는 코드
  useEffect(() => {
    // Kakao SDK 스크립트를 동적으로 추가
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    script.onload = () => {
      // Kakao SDK 스크립트가 로드된 후 Kakao.init() 호출
      Kakao.init('397368ee84d7d601d5665891d7ef7186');
    };

    document.head.appendChild(script);

    // 컴포넌트가 사라질 때 스크립트를 제거
    return () => {
      document.head.removeChild(script);
    };
  }, []); // 빈 배열을 전달하여 처음 한 번만 실행되도록 함

  // 컴포넌트가 처음 화면에 나타날 때 실행되는 코드
  useEffect(() => {
    // 서버에서 loginResponse 이벤트를 받을 때 실행되는 함수
    socket.on('loginResponse', (response) => {
      // 응답 데이터로부터 사용자 이름을 세션에 저장
      sessionStorage.setItem('name', response.name);

      if (response.success) {
        // 로그인이 성공하면 이메일과 비밀번호를 세션에 저장하고 홈 화면으로 이동
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        window.location.href = "http://localhost:3000/Home";
      } else {
        // 로그인이 실패하면 경고 메시지를 표시
        alert('로그인 실패');
      }
    });

    // 컴포넌트가 사라질 때 이벤트 리스너를 제거
    return () => {
      socket.off('loginResponse');
    };
  }, [email, password]); // email과 password가 바뀔 때마다 실행

  // 로그인 버튼을 눌렀을 때 실행되는 함수
  const handleLogin = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작을 막음
    // 서버로 로그인 요청을 보냄
    socket.emit('login', { email, password });
  };

  // 카카오 로그인 버튼을 눌렀을 때 실행되는 함수
  const loginWithKakao = () => {
    // 카카오 로그인 인증 요청
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/Home',
    });
  };

  // 카카오 사용자 정보를 가져오는 함수
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

      setLoginResult(true); // 로그인 결과 상태를 true로 설정

      console.log(`닉네임: ${profile_nickname}, 이메일: ${account_email}`);
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  // loginResult가 true로 바뀔 때마다 실행되는 코드
  useEffect(() => {
    if (loginResult) {
      fetchUserInfo();
    }
  }, [loginResult]);

  return (
    <div>
      {/* 카카오 로그인 버튼 */}
      <a id="kakao-login-btn" href="#" onClick={loginWithKakao}>
        <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
      </a>
      <p id="token-result"></p>
      {/* 로그인 폼 */}
      <div className={styles.logincontainer}>
        <BackgroundComponent /> {/* 배경 컴포넌트 */}
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
                onChange={(e) => setEmail(e.target.value)} // 이메일 상태를 업데이트
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
                onChange={(e) => setPassword(e.target.value)} // 비밀번호 상태를 업데이트
              />
            </div>
            <button type="submit" className={styles.button1}>Login</button> {/* 로그인 버튼 */}
          </form>
        </div>
      </div>
      <h1>{loginResult ? "Kakao login success" : "Kakao login not yet"}</h1> {/* 로그인 결과 메시지 */}
    </div>
  );
};

export default LoginComponent; // LoginComponent 컴포넌트를 내보냄
