import React from 'react'
import PranchHome from './PranchHome'
import './Home.css'
import Chart from '../chart/Chart'
import BigWidget from './BigWidget'
import SmWidget from './SmWidget'
const Home = () => {
  return (
    <div className='home'>
        <PranchHome />
        <Chart />
     <div className='widget-home'>
     <SmWidget />
      <BigWidget />
     
     </div>
    </div>
  )
}

export default Home