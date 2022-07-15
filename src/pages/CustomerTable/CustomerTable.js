import React from 'react'
import MobileNav from '../../components/Navbar/MobileNav'
import SideMenu from '../../components/SideMenu/SideMenu'
import Table from './Blocks/Table'

const CustomerTable = () => {
  return (
    <>
    {/* Web View */}
    <div className='container-fluid uk-visible@m'>
    <div className='row'>
      <div className='col-3' style={{borderRight: '1px solid #E3E3E3'}}>
        <SideMenu />
      </div>
      <div className='col-9'>
      <div className='heading-two-bold uk-margin-top uk-text-center'>Customer Table</div>
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
      </div>
    </div>
    </div>

    {/* Mobile View */}
    <div className='uk-hidden@m'>
    <div className='heading-two-bold uk-margin-top uk-text-center'>Customer Table</div>
    <MobileNav />
    <Table />
    <Table />
    <Table />
    <Table />
    <Table />
    </div>
    </>
  )
}

export default CustomerTable