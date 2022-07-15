import React from 'react'
import {Link} from 'react-router-dom';

const Table = () => {
  return (
    <>
    
    <hr className='uk-margin-to'></hr>
    <div className='container'>
        <div className='body-small uk-margin-top'>FIRST NAME: ALEXANDER</div>
        <div className='body-small uk-margin-top'>LAST NAME: DOE</div>
        <div className='body-small uk-margin-top'>BRANCH: RAYFIELD JOS</div>
        <div className='body-small uk-margin-top'>PHONE NUMBER: 08133554466</div>
        <div className='body-small uk-margin-top'>ACCOUNT OFFICER: JOHN DOE</div>
        <div className='body-small uk-margin-top'>BALANCE: 4,000.00</div>
        <div className='row'>
            {/* <!-- This is a button toggling the update modal --> */}
            <div className='col-md-4 col-sm-6 uk-margin-top'><button style={{borderColor: '#CD2844', color: '#CD2844'}} className='uk-button uk-button-default' uk-toggle="target: #modal-update" type='button'>Update</button></div>
            {/* <!-- This is a button toggling the update review modal --> */}
            <div className='col-md-4 col-sm-6 uk-margin-top'><button style={{borderColor: '#CD2844', color: '#CD2844'}} className='uk-button uk-button-default' uk-toggle="target: #modal-update-review" type='button'>Show Update</button></div>
            <div className='col-md-4 col-sm-6 uk-margin-top'><button style={{backgroundColor: '#CD2844', color: '#ffffff'}} className='uk-button'>View Customer Profile</button></div>
        </div>
    </div>
    <hr className='uk-margin-to'></hr>
    
    {/* <!-- This is the modal for update --> */}
    <div id="modal-update" data-uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" data-uk-close></button>
            <h2 class="uk-modal-title">Update</h2>
            <form className='uk-modal-body'>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Enter Amount" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Enter Account Officer" />
            </div>
            <div className='uk-margin-top'>
                <input class="uk-input uk-form-width-large" type="text" placeholder="Enter Date" />
            </div>
            
            <Link to="" className='uk-margin-large-top'>
                <button style={{backgroundColor: '#CD2844'}} class="uk-button uk-button-primary uk-form-width-medium uk-margin-large-top uk-hidden@m">Update</button>
                <button style={{backgroundColor: '#CD2844'}} class="uk-button uk-button-primary uk-form-width-large uk-margin-large-top uk-visible@m uk-modal-close" type='button'>Update</button>
            </Link>
            </form>
        </div>
    </div>

    {/* This is the modal for update review */}
    <div id='modal-update-review' data-uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" data-uk-close></button>
            <div className='container'>
                <h2 class="uk-modal-title">Update History</h2>
                <div className='row uk-margin-top'>
                    <div className='col'>10,000.00</div>
                    <div className='col uk-text-right caption'>10-06-2022</div>
               </div>
                <hr style={{color: '#E3E3E3'}} className=''></hr>
                <div className='row uk-margin-top'>
                    <div className='col'>3,000.00</div>
                    <div className='col uk-text-right caption'>10-06-2022</div>
               </div>
                <hr style={{color: '#E3E3E3'}} className=''></hr>
                <div className='row uk-margin-top'>
                    <div className='col'>1500.00</div>
                    <div className='col uk-text-right caption'>10-06-2022</div>
               </div>
                <hr style={{color: '#E3E3E3'}} className=''></hr>
                <div className='row uk-margin-top'>
                    <div className='col'>2,000.00</div>
                    <div className='col uk-text-right caption'>10-06-2022</div>
               </div>
                <hr style={{color: '#E3E3E3'}} className=''></hr>
                <div className='row uk-margin-top'>
                    <div className='col'>1,000.00</div>
                    <div className='col uk-text-right caption'>10-06-2022</div>
               </div>
                <hr style={{color: '#E3E3E3'}} className=''></hr>
            </div>
        </div>
    </div>

    
    </>
  )
}

export default Table