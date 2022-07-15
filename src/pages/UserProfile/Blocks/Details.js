import React from 'react';
import avatar from '../img/avatar.png'

const Details = () => {
  return (
    <div>
        <div className='container uk-text-center uk-margin-top'>
            <img style={{width: 200,}} src={avatar} alt='' />
            <div className='heading-two-bold uk-margin-top'>John Doe</div>
        </div>
        <hr></hr>
        <div className='container uk-text-center'>
            <div className='body-small uk-margin-top'>BALANCE: N50,000.00</div>
            <div className='body-small uk-margin-top'>ACCUMULATION: N50,000.00</div>
        </div>
        <hr></hr>
        <div className='container uk-text-center'>
            <div className='body-small uk-margin-top'>LOAN DRAWN: N50,000.00</div>
            <div className='body-small uk-margin-top'>DAILY RATE: N50,000.00</div>
            <div className='body-small uk-margin-top'>PHONE NUMBER: 08035452167</div>
            <div className='body-small uk-margin-top'>EMAIL ADDRESS: alexjoe1020@email.com</div>
            <div className='body-small uk-margin-top'>GUARANTORS NUMBER: 08035452167</div>
            <div className='body-small uk-margin-top'>NATURE OF JOB: JOS, PLATEAU STATE</div>
        </div>
        <hr></hr>
        <div className='container uk-text-center'>
            <div className='body-small uk-margin-top'>ADDRESS: JOS, PLATEAU STATE</div>
            <div className='body-small uk-margin-top'>GUARANTORS ADDRESS: JOS, PLATEAU STATE</div>
        </div>
        <hr></hr>
        <div className='container uk-text-center'>
            <div className='body-small uk-margin-top'>INTEREST CHARGED: N1,000.00</div>
            <div className='body-small uk-margin-top'>ADVANCED DATE: 16 - 06 - 2022</div>
            <div className='body-small uk-margin-top'>EXPIRATION DATE: 16 - 06 - 2022</div>
            <div className='body-small uk-margin-top'>AMOUNT PAID: 40,000.00</div>
        </div>
        <hr></hr>
        <div className='container uk-text-center uk-margin-bottom'>
            <div className='body-small uk-margin-top'>DATE: 16 - 06 - 2022</div>
            <div className='body-small uk-margin-top'>AMOUNT PAID: 16 - 06 - 2022</div>
            <div className='body-small uk-margin-top'>PAYMENT STATUS: 16 - 06 - 2022</div>
            <div className='body-small uk-margin-top'>PAYMENT STATUS: 16 - 06 - 2022</div>
        </div>
    </div>
  )
}

export default Details;