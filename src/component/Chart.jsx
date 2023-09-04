import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale,LinearScale,PointElement,LineElement,Title, Tooltip,Legend} from 'chart.js'

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title, Tooltip,Legend)

const Chart = ({array= [], currency, days}) => {

  const prices = [];
  const date = ['12/06/23','15/07/23','18/09/23'];

  for (let i = 0; i < array.length; i++) {
    prices.push(array[i][1]);
    if(days == '24h') date.push(new Date(array[i][0]).toLocaleTimeString()); 
    else date.push(new Date(array[i][0]).toLocaleDateString());
    
  }

  const data = {
     labels:date,
        datasets:[{
        label: `Price in ${currency}`,
        data: prices,borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.8)"
      }]
  }
  
  return (
    <Line options={{
        responsive : true,
    }}
    data={data}
    />
  )
}

export default Chart
