// 라우터 지정도 여기서 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Login from /'./components/Login';
import Login from './components/Login';
import Home from './components/Home';
import Diary from './components/Diary';
import Index from './components/Index';
import GetAPI from './components/GetAPI'

const Router = () => {
	return (
	<BrowserRouter>                                    
      <Routes>                                           
        <Route path='/' element={<Index/>} />   
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Diary' element={<Diary/>}/>
        <Route path='/GetAPI' element={<GetAPI/>}/>
        {/* <Route path='/Sidebar' element={<Sidebar/>}/> */}
      </Routes>
    </BrowserRouter>
	);
};

export default Router;