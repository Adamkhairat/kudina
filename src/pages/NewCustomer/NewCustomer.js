import React from 'react'
import MobileNav from '../../components/Navbar/MobileNav'
import SideMenu from '../../components/SideMenu/SideMenu'
import Form from './Blocks/Form'

const NewCustomer = () => {
  return (
    <>
    {/* web view */}
    <div className='container-fluid uk-visible@m'>
      <div className='row'>
        <div className='col-3' style={{borderRight: '1px solid #E3E3E3'}}>
          <SideMenu />
        </div>
        <div className='col-9'>
          <Form />
        </div>
      </div>
    </div>

    {/* web view */}
    <div className='uk-hidden@m'>
    <MobileNav />
    <Form />
    </div>
    
    </>
  )
}

export default NewCustomer