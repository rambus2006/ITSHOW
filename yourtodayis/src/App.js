
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Login from /'./components/Login';
import Logintest from './components/Logintest';
import Home from './components/Home';
import Diary from './components/Diary';
const Router = () => {
	return (
	<BrowserRouter>                                    
      <Routes>                                           
        <Route path='/' element={<Logintest/>} />       
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Diary' element={<Diary/>}/>
      </Routes>
    </BrowserRouter>
	);
};

export default Router;