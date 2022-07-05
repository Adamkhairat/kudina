import React from 'react'
import SideMenu from './Blocks/SideMenu';
import Statistics from './Blocks/Statistics';

const Dashboard = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div style={{borderRight: '1px solid #E3E3E3'}} className='col-3'>
            <SideMenu />
            </div>
            <div className='col-9'>
            <Statistics />
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Dashboard;