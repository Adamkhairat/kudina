import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const state = {
  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'New Customers',
      backgroundColor: 'rgba(216, 135, 148, 1)',
      borderColor: 'rgba(205, 40, 68, 1)',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56]
    }
  ]
}


const BarChart = () => {
  return (
    <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'New Customers',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    </div>
  )
}

export default BarChart;