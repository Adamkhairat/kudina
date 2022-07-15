import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import AddStaff from './pages/AddStaff/AddStaff';
import CustomerTable from './pages/CustomerTable/CustomerTable';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NewCustomer from './pages/NewCustomer/NewCustomer';
import RequestDetail from './pages/Pending/Blocks/RequestDetail';
import Pending from './pages/Pending/Pending';
import UserProfile from './pages/UserProfile/UserProfile';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/UserProfile' element={<UserProfile />} />
      <Route path='/NewCustomer' element={<NewCustomer />} />
      <Route path='/CustomerTable' element={<CustomerTable />} />
      <Route path='/AddStaff' element={<AddStaff />} />
      <Route path='/Pending' element={<Pending />} />
      <Route path='/RequestDetail' element={<RequestDetail />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
