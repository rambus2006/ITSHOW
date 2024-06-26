// 라우터 지정도 여기서 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Login from /'./components/Login';
import Login from './components/Login';
import Home from './components/Home';
import Diary from './components/Diary';
import Index from './components/Index';
import GetAPI from './components/GetAPI'
import Album from './components/Album';
import Logintest from './components/LoginTest';
const Router = () => {
	return (
	<BrowserRouter>                                    
      <Routes>                                           
        <Route path='/' element={<Index/>} />   
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Logintest' element={<Logintest/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Diary' element={<Diary/>}/>
        <Route path='/GetAPI' element={<GetAPI/>}/>
        <Route path='/Album' element={<Album/>}/>
        {/* <Route path='/Sidebar' element={<Sidebar/>}/> */}
      </Routes>
    </BrowserRouter>
	);
};

export default Router;