import React from 'react';
import {Link} from 'react-router-dom';

const Form = () => {
  return (
    <div className='uk-text-center uk-margin-medium-top'>
        <form>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Enter Your Email Address" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="password" placeholder="Enter Your Password" />
            </div>
            {/* <div className='uk-margin'>
                <div>Forget Password ?</div>
            </div> */}
            <Link to="/dashboard" className='uk-margin-large-top'>
                <button style={{backgroundColor: '#CD2844'}} class="uk-button uk-button-primary uk-form-width-large uk-margin-large-top">Login</button>
            </Link>
        </form>
    </div>
  )
}

export default Form;