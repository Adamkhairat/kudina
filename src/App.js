import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
