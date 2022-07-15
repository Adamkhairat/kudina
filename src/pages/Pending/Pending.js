import React from 'react'
import MobileNav from '../../components/Navbar/MobileNav'
import SideMenu from '../../components/SideMenu/SideMenu'
import RequestList from './Blocks/RequestList'

const Pending = () => {
  return (
    <>
    {/* Web View */}
    <div className='container-fluid uk-visible@m'>
    <div className='row'>
      <div className='col-3' style={{borderRight: '1px solid #E3E3E3'}}>
        <SideMenu />
      </div>
      <div className='col-9'>
        <RequestList />
      </div>
    </div>
    </div>

    {/* Mobile View */}
    <div className='uk-hidden@m'>
    <MobileNav />
    <RequestList />
    </div>
    
    </>
  )
}

export default Pending