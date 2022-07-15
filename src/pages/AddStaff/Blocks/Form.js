import React from 'react'
import {Link} from 'react-router-dom';

const Form = () => {
  return (
    <>
    <div className='container uk-text-center'>
    <div className='heading-two-bold uk-margin-top uk-text-center'>Add New Staff</div>
    <form>
    <div className='uk-margin-top'>
        <input class="uk-input uk-form-width-large" type="text" placeholder="Full Name" />
    </div>
    <div className='uk-margin-top'>
        <input class="uk-input uk-form-width-large" type="email" placeholder="Email Address" />
    </div>
    <div class="uk-margin-top">
        <div uk-form-custom="target: > * > span:first-child">
        <select className='uk-input uk-form-width-large'>
            <option className='body-small' value="">User Role</option>
            <option value="1">Brand Manager</option>
            <option value="2">Base User</option>
            <option value="2">Admin</option>
            <option value="2">Super Admin</option>
        </select>
        <button class="uk-button uk-button-default uk-form-width-medium " type="button" tabindex="-1">
            <span></span>
            <span uk-icon="icon: chevron-down; ratio: 1"></span>
        </button>
        </div>
    </div>
    </form>
    <Link to="/dashboard" className='uk-margin-large-top'>
        <button style={{backgroundColor: '#CD2844'}} class="uk-button uk-button-primary uk-form-width-large uk-margin-large-top uk-visible@m">Add Staff</button>
        <button style={{backgroundColor: '#CD2844'}} class="uk-button uk-button-primary uk-form-width-medium uk-margin-large-top uk-hidden@m">Add Staff</button>
    </Link>
    </div>
    </>
  )
}

export default Form