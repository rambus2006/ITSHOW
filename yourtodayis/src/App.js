import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';   // Login 컴포넌트를 ./components/Login에서 임포트
import Home from './components/Home';     // Home 컴포넌트를 ./components/Home에서 임포트
import Diary from './components/Diary';   // Diary 컴포넌트를 ./components/Diary에서 임포트
import Index from './components/Index';   // Index 컴포넌트를 ./components/Index에서 임포트
import GetAPI from './components/GetAPI'; // GetAPI 컴포넌트를 ./components/GetAPI에서 임포트
import Album from './components/Album';   // Album 컴포넌트를 ./components/Album에서 임포트
import AlbumImg from './components/AlbumImg' ;

import LoginTest from './components/LoginTest'
const Router = () => {
  return (
    <BrowserRouter>                      {/* React Router의 BrowserRouter 컴포넌트를 사용하여 라우터 설정 */}
      <Routes>                           {/* 여러 개의 Route를 포함할 수 있는 Routes 컴포넌트 */}
        <Route path='/' element={<Index />} />   {/* '/' 경로에 Index 컴포넌트를 렌더링 */}
        <Route path='/LoginTest' element={<LoginTest />} />   {/* '/Login' 경로에 Login 컴포넌트를 렌더링 */}
        <Route path='/Home' element={<Home />} />     {/* '/Home' 경로에 Home 컴포넌트를 렌더링 */}
        <Route path='/Diary' element={<Diary />} />   {/* '/Diary' 경로에 Diary 컴포넌트를 렌더링 */}
        <Route path='/GetAPI' element={<GetAPI />} /> {/* '/GetAPI' 경로에 GetAPI 컴포넌트를 렌더링 */}
        <Route path='/Album' element={<Album />} />   
        {/* <Route path='/Album' element={<AlbumImg />} />   '/Album' 경로에 Album 컴포넌트를 렌더링 */}

        {/* <Route path='/Sidebar' element={<Sidebar />} /> */} {/* 주석 처리된 코드: Sidebar 컴포넌트를 '/Sidebar' 경로에 렌더링 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;   // Router 컴포넌트를 외부로 내보냄
