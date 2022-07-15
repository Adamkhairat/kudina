import React from 'react'
import {Link} from 'react-router-dom';

const RequestDetail = () => {
  return (
    <>
    <div className='container uk-text-center'>
    <Link style={{textDecoration: 'none'}} to="/">
      <div className='uk-margin-medium-top body-large-bold' style={{color: 'black'}}>Kudina<span style={{color: '#CD2844'}}>.</span></div>
    </Link>
    <div className='uk-margin-medium-top body-normal-bold'>Jane Doe Applied for a loan of 20,000.00</div>
    <div className='body-small uk-margin-to'>lorem ipsum dolor ipsum dlor lorem ipsum dolor um dlor lorem ipsum dolor
    lorem ipsum dolor ipsum dlor lorem ipsum dolor </div>
    <Link to="/dashboard" className='uk-margin-large-top'>
        <button style={{backgroundColor: '#CD2844'}} class="uk-button uk-button-primary uk-form-width-large uk-margin-large-top uk-visible@m">Accept Request</button>
        <button style={{backgroundColor: '#CD2844'}} class="uk-button uk-button-primary uk-form-width-medium uk-margin-large-top uk-hidden@m">Accept Request</button>
    </Link>
    </div>
    
    </>
  )
}

export default RequestDetail