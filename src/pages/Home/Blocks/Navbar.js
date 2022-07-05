import React from 'react';
import {Link} from 'react-router-dom';

const  Navbar = () => {
  return (
    <div>
        <nav class="uk-navbar-container uk-navbar-transparent uk-text-center" uk-navbar>
            <div class="uk-navbar-left uk-text-center">
                <ul class="uk-navbar-item">
                    <li style={{listStyle: 'none'}} class="uk-active body-large-bold"><a style={{textDecoration: 'none', color: 'black'}} href="#/">Kudina<span style={{color: '#CD2844'}}>.</span></a></li>
                </ul>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-item">
                        <div className='body-small'><a style={{textDecoration: 'none', padding: 20, color: 'black'}} href="#/">Services</a></div>
                        <div><a className='body-small' style={{textDecoration: 'none', padding: 20, color: 'black'}} href="#/">About Us</a></div>
                        <div><a className='body-small' style={{textDecoration: 'none', padding: 20, color: 'black'}} href="#/">Contact</a></div>
                        <Link to="/login">
                            <button style={{borderColor: '#CD2844', color: '#CD2844'}} class="uk-button uk-button-default">Get Started</button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;