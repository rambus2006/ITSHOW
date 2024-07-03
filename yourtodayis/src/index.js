import React from 'react';                   // React 라이브러리를 임포트
import ReactDOM from 'react-dom/client';      // ReactDOM 클라이언트를 임포트
import './index.css';                         // 글로벌 CSS 파일을 임포트
import App from './App';                      // App 컴포넌트를 임포트
import reportWebVitals from './reportWebVitals';  // 웹 성능 측정 기능을 임포트

const root = ReactDOM.createRoot(document.getElementById('root')); // 'root' DOM 요소를 찾아서 ReactDOM 루트를 생성
root.render(
  <React.StrictMode>   {/* StrictMode로 감싸서 애플리케이션의 잠재적 문제를 감지 */}
    <App />            {/* App 컴포넌트를 렌더링 */}
  </React.StrictMode>
);

// 웹 애플리케이션의 성능을 측정하고 로깅하는 함수 호출
// 예: reportWebVitals(console.log)처럼 사용할 수 있음
// 더 알아보기: https://bit.ly/CRA-vitals
reportWebVitals();
