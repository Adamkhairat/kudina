import React from 'react';
import BarChart from './Chart';


const Statistics = () => {
  return (
    <div className='uk-margin-top container'>
        <div className='body-normal-bold'>Good Morning, Alexander</div>
        <div className='body-small subtext-color'>Welcome back, nice to see you again!</div>

        <div className='row uk-margin-medium-top'>
            <div className='col-4'>
                <div style={{border: '1px solid #E3E3E3', borderRadius: '10px'}} className='uk-card uk-card-body'>
                    <div style={{justifyContent: 'space-between'}} className='uk-flex'>
                        <div>Advance</div>
                        <div className='uk-flex uk-flex-middle'>Daily <span className='' uk-icon="icon: chevron-down; ratio: 0.8"></span></div>
                    </div>
                    <div className='heading-two-bold uk-margin-top'>N100,000</div>
                    <div className='subtext-color'>16-06-2022</div>
                </div>
            </div>
            <div className='col-4'>
                <div style={{border: '1px solid #E3E3E3', borderRadius: '10px'}} className='uk-card uk-card-body'>
                    <div style={{justifyContent: 'space-between'}} className='uk-flex'>
                        <div>Recovery</div>
                        <div className='uk-flex uk-flex-middle'>Daily <span className='' uk-icon="icon: chevron-down; ratio: 0.8"></span></div>
                    </div>
                    <div className='heading-two-bold uk-margin-top'>N90,000</div>
                    <div className='subtext-color'>16-06-2022</div>
                </div>
            </div>
            <div className='col-4'>
                <div style={{border: '1px solid #E3E3E3', borderRadius: '10px'}} className='uk-card uk-card-body'>
                    <div style={{justifyContent: 'space-between'}} className='uk-flex'>
                        <div>Accumulation</div>
                        <div className='uk-flex uk-flex-middle'>Daily <span className='' uk-icon="icon: chevron-down; ratio: 0.8"></span></div>
                    </div>
                    <div className='heading-two-bold uk-margin-top'>N10,000</div>
                    <div className='subtext-color'>16-06-2022</div>
                </div>
            </div>
        </div>

        <div>
            <BarChart />
        </div>
    </div>
  )
}

export default Statistics;