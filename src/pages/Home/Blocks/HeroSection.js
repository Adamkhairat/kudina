import React from 'react';
import {Link} from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='uk-text-center'>
        <div className='web-display'>Making More Possible <br></br> With Kudina</div>
        <div>We provide financial solutions that excellently drive your progress.</div>
        <Link className='' to="/login">
          <button style={{backgroundColor: '#CD2844', color: '#ffffff'}} className='uk-button uk-margin-large-top '>Get Started</button>
        </Link>
    </div>
  )
}

export default HeroSection;