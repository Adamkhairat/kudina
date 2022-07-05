import React from 'react';
import {Link} from 'react-router-dom';

const SideMenu = () => {
    
  return (
    <>
    <div className='uk-margin-top'>
    <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
        <Link style={{textDecoration: 'none'}} to="/">
            <div className='body-large-bold' style={{color: 'black'}}>Kudina<span style={{color: '#CD2844'}}>.</span></div>
        </Link>

        <div style={{height: 40, cursor: 'pointer'}} className='uk-margin-medium-top sidemenu uk-flex uk-flex-center uk-flex-middle'>Dashboard</div>
        <div style={{height: 40, cursor: 'pointer'}} className='uk-margin-medium-top sidemenu uk-flex uk-flex-center uk-flex-middle'>View User Profile</div>
        <div style={{height: 40, cursor: 'pointer'}} className='uk-margin-medium-top sidemenu uk-flex uk-flex-center uk-flex-middle'>Register New Customer</div>
        <div style={{height: 40, cursor: 'pointer'}} className='uk-margin-medium-top sidemenu uk-flex uk-flex-center uk-flex-middle'>Customers</div>
        <div style={{height: 40, cursor: 'pointer'}} className='uk-margin-medium-top sidemenu uk-flex uk-flex-center uk-flex-middle'>Add Staff</div>
        <div style={{height: 40, cursor: 'pointer'}} className='uk-margin-medium-top sidemenu uk-flex uk-flex-center uk-flex-middle'>Pending</div>       
    </ul>
    </div>
    </>
  )
}

export default SideMenu;