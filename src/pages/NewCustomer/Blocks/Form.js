import React from 'react';
import {Link} from 'react-router-dom';

const Form = () => {
  return (
    <>
    <div className='container uk-text-center'>
        <div className='heading-two-bold uk-margin-top'>Register a New Customer</div>

        <form>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="First Name" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Last Name" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="email" placeholder="Email Address" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="date" placeholder="" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Phone Number" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Home Address" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Enter the Approved Sum" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Bank Name" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Account Number" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Account Name" />
            </div>
            <div className='uk-margin-top'>
                <div className='body-small'>Upload Your Profile Image</div>
                <input class="uk-input uk-form-width-large uk-margin-top" type="file" placeholder="Profile Image" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Nature of Job" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Daily Income" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Monthly Income" />
            </div>
            
            <div class="uk-margin-top">
                <div uk-form-custom="target: > * > span:first-child">
                <select className='uk-input uk-form-width-large'>
                    <option className='body-small' value="">Home Status</option>
                    <option value="1">Tenant</option>
                    <option value="2">Owner</option>
                </select>
                <button class="uk-button uk-button-default uk-form-width-large" type="button" tabindex="-1">
                    <span></span>
                    <span uk-icon="icon: chevron-down; ratio: 1"></span>
                </button>
               </div>
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Work Address" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Particulars" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Value" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Guarantors Name" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Guarantors Number" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Guarantors Job" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Guarantors Address" />
            </div>
            <Link to="/dashboard" className='uk-margin-large-top'>
                <button style={{backgroundColor: '#CD2844'}} class="uk-button uk-button-primary uk-form-width-large uk-margin-medium-top uk-margin-bottom uk-visible@m">Register Customer</button>
                <button style={{backgroundColor: '#CD2844'}} class="uk-button uk-button-primary uk-margin-medium-top uk-margin-bottom uk-hidden@m">Register Customer</button>
            </Link>
        </form>
    </div>
    </>
  )
}

export default Form