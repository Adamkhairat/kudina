import React from 'react';
import {Link} from 'react-router-dom';
import Form from './Blocks/Form';

const Login = () => {
  return (
    <div className='uk-container uk-text-center'>
        <Link style={{textDecoration: 'none'}} to="/">
        <div className='uk-margin-large-top body-large-bold' style={{color: 'black'}}>Kudina<span style={{color: '#CD2844'}}>.</span></div>
        </Link>
        <div>Sign in by entering the information below</div>
        <Form />
    </div>
  )
}

export default Login;