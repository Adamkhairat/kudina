import React from 'react'
// import SideMenu from './Blocks/SideMenu';
import Statistics from './Blocks/Statistics';
import SideMenu from '../../components/SideMenu/SideMenu';
import MobileNav from '../../components/Navbar/MobileNav';

const Dashboard = () => {
  return (
    <>
    {/* web dashboard */}
    <div className='container-fluid uk-visible@m'>
        <div className='row'>
            <div className="col-3" style={{borderRight: '1px solid #E3E3E3'}}>
            <SideMenu />
            </div>
            <div className='col-9'>
            <Statistics />
            </div>
        </div>
        
    </div>

    {/* mobile dashboard */}
    <div className='uk-hidden@m'>
      <MobileNav />
      <Statistics />
    </div>
    </>
  )
}

export default Dashboard;