import React from 'react';
import {Link} from 'react-router-dom';

const RequestList = () => {
  return (
    <>
    <div className='uk-text-center uk-margin-top heading-two-bold'>Pending Requests</div>

    <div className='sidemenu' style={{cursor: 'pointer'}}>
    <hr style={{color: '#E3E3E3'}} className=''></hr>
    <div className='container'>
    <Link to="/RequestDetail" className='sidemenu' style={{textDecoration: 'none', color: '#33343D', }}>
        <div className='row'>
            <div className='col'>John Doe Applied For Loan</div>
            <div className='col uk-text-right caption'>2 hrs ago</div>
        </div>
    </Link>
    </div>
    <hr style={{color: '#E3E3E3'}} className=''></hr>
    </div>

    <div className='sidemenu' style={{cursor: 'pointer'}}>
    <hr style={{color: '#E3E3E3'}} className=''></hr>
    <div className='container'>
    <Link to="/RequestDetail" className='sidemenu' style={{textDecoration: 'none', color: '#33343D', }}>
        <div className='row'>
            <div className='col'>John Doe Applied For Loan</div>
            <div className='col uk-text-right caption'>2 hrs ago</div>
        </div>
    </Link>
    </div>
    <hr style={{color: '#E3E3E3'}} className=''></hr>
    </div>

    <div className='sidemenu' style={{cursor: 'pointer'}}>
    <hr style={{color: '#E3E3E3'}} className=''></hr>
    <div className='container'>
    <Link to="/RequestDetail" className='sidemenu' style={{textDecoration: 'none', color: '#33343D', }}>
        <div className='row'>
            <div className='col'>John Doe Applied For Loan</div>
            <div className='col uk-text-right caption'>2 hrs ago</div>
        </div>
    </Link>
    </div>
    <hr style={{color: '#E3E3E3'}} className=''></hr>
    </div>

    <div className='sidemenu' style={{cursor: 'pointer'}}>
    <hr style={{color: '#E3E3E3'}} className=''></hr>
    <div className='container'>
    <Link to="/RequestDetail" className='sidemenu' style={{textDecoration: 'none', color: '#33343D', }}>
        <div className='row'>
            <div className='col'>John Doe Applied For Loan</div>
            <div className='col uk-text-right caption'>2 hrs ago</div>
        </div>
    </Link>
    </div>
    <hr style={{color: '#E3E3E3'}} className=''></hr>
    </div>

    <div className='sidemenu' style={{cursor: 'pointer'}}>
    <hr style={{color: '#E3E3E3'}} className=''></hr>
    <div className='container'>
    <Link to="/RequestDetail" className='sidemenu' style={{textDecoration: 'none', color: '#33343D', }}>
        <div className='row'>
            <div className='col'>John Doe Applied For Loan</div>
            <div className='col uk-text-right caption'>2 hrs ago</div>
        </div>
    </Link>
    </div>
    <hr style={{color: '#E3E3E3'}} className=''></hr>
    </div>

    <div className='sidemenu' style={{cursor: 'pointer'}}>
    <hr style={{color: '#E3E3E3'}} className=''></hr>
    <div className='container'>
    <Link to="/RequestDetail" className='sidemenu' style={{textDecoration: 'none', color: '#33343D', }}>
        <div className='row'>
            <div className='col'>John Doe Applied For Loan</div>
            <div className='col uk-text-right caption'>2 hrs ago</div>
        </div>
    </Link>
    </div>
    <hr style={{color: '#E3E3E3'}} className=''></hr>
    </div>
    
    
    </>
  )
}

export default RequestList