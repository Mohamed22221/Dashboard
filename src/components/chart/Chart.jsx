
import './Chart.css'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
 const Chart = () => {
  const data = [
    {
      name: 'Jan',
      "Active User": 4000,
    
    },
    {
      name: 'Fep',
      "Active User": 3000,

    },
    {
      name: 'Mar',
      "Active User": 2000,
    
    },
    {
      name: 'Apr',
      "Active User": 2780,
      
    },
    {
      name: 'May',
      "Active User": 1890,
     
    },
    {
      name: 'Jan',
      "Active User": 2390,
      
    },
    {
      name: 'Jul',
      "Active User": 3490,
      
    },
    {
      name: 'Sep',
      "Active User": 3490,
      
    },
    {
      name: 'Oct',
      "Active User": 3190,
      
    },
    {
      name: 'Nov',
      "Active User": 5490,
      
    },
    {
      name: 'Des',
      "Active User": 4490,
      
    },
  ];
  
  return (
    <div className='main-chart'>
     <div className='chart'>
      <h3 className='chart-title'>Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey='Active User' stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
     </div>
      </div>
  )
}

export default Chart