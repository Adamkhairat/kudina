import React from 'react';
import {Link} from 'react-router-dom';

const SideMenu = () => {
    
  return (
    <>
    <div className='uk-margin-top uk-visible@m'>
    <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
        <Link style={{textDecoration: 'none'}} to="/">
            <div className='body-large-bold' style={{color: 'black'}}>Kudina<span style={{color: '#CD2844'}}>.</span></div>
        </Link>

        <div style={{height: 40, cursor: 'pointer'}} className='uk-margin-medium-top sidemenu uk-flex uk-flex-center uk-flex-middle'>
          <Link className='sidemenu' style={{textDecoration: 'none', color: 'black'}} to="/Dashboard">Dashboard</Link>
        </div>
        <div style={{height: 40, cursor: 'pointer'}} className='uk-margin-medium-top sidemenu uk-flex uk-flex-center uk-flex-middle'>
        <Link className='sidemenu' style={{textDecoration: 'none', color: 'black'}} to="/UserProfile">View User Profile</Link>
        </div>
        <div style={{height: 40, cursor: 'pointer'}} className='uk-margin-medium-top sidemenu uk-flex uk-flex-center uk-flex-middle'>
        <Link className='sidemenu' style={{textDecoration: 'none', color: 'black'}} to="/NewCustomer">Register New User</Link>
        </div>
        <div style={{height: 40, cursor: 'pointer'}} className='uk-margin-medium-top sidemenu uk-flex uk-flex-center uk-flex-middle'>
        <Link className='sidemenu' style={{textDecoration: 'none', color: 'black'}} to="/CustomerTable">Customers</Link>
        </div>
        <div style={{height: 40, cursor: 'pointer'}} className='uk-margin-medium-top sidemenu uk-flex uk-flex-center uk-flex-middle'>
        <Link className='sidemenu' style={{textDecoration: 'none', color: 'black'}} to="/AddStaff">Add Staff</Link> 
        </div>
        <div style={{height: 40, cursor: 'pointer'}} className='uk-margin-medium-top sidemenu uk-flex uk-flex-center uk-flex-middle'>
        <Link className='sidemenu' style={{textDecoration: 'none', color: 'black'}} to="/Pending">Pending</Link>
        </div>       
    </ul>
    </div>

    <div>
    <nav className='uk-navbar uk-navbar-transparent uk-text-center uk-hidden@m' uk-navbar>
        <div class="uk-navbar-left">
            <ul class="uk-navbar-item">
                <li style={{listStyle: 'none'}} class="uk-active body-large-bold"><a style={{textDecoration: 'none', color: 'black'}} href="#/">Kudina<span style={{color: '#CD2844'}}>.</span></a></li>
            </ul>
       </div>

      <div className='uk-navbar-right'>
      <ul  class="uk-navbar-nav ">
        <li class="">
        <a uk-toggle="target: #offcanvas-nav-primary" href="#/">
          <span style={{color: 'black'}} uk-icon="menu"></span>
        </a>
        </li>
        </ul>

        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                <div style={{backgroundColor: 'white'}} class="uk-offcanvas-bar uk-fle uk-flex-column">
                <a className='uk-margin-top' href="#/">
                    <span style={{color: 'black'}} class="uk-offcanvas-close" uk-close uk-icon='close'></span>
                </a>

                <div className='uk-margin-large-top'>
                <li style={{listStyle: 'none'}} class="uk-active body-large-bold"><a style={{textDecoration: 'none', color: 'black'}} href="#/">Kudina<span style={{color: '#CD2844'}}>.</span></a></li>
                </div>

                <div className='uk-margin-large-top'>
                <ul class="uk-nav uk-margin-auto-vertical">

                    <div className='body-small sidemenu'><a style={{textDecoration: 'none', padding: 20, color: 'black'}} href="#/">Services</a></div>
                    <div className='uk-margin-top'><a className='body-small' style={{textDecoration: 'none', padding: 20, color: 'black'}} href="#/">About Us</a></div>
                    <div className='uk-margin-top'><a className='body-small' style={{textDecoration: 'none', padding: 20, color: 'black'}} href="#/">Contact</a></div>
                    <div className='uk-margin-top'>
                    <Link to="/login">
                        <button style={{borderColor: '#CD2844', color: '#CD2844'}} class="uk-button uk-button-default">Get Started</button>
                    </Link>
                    </div>
                </ul>
                </div>
                </div>
        </div>

      </div>
      </nav>
    </div>
    </>
  )
}

export default SideMenu;