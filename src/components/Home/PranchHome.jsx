import React from 'react'
import './PranchHome.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const PranchHome = () => {
  return (
    <div className='main-Pranch'>
        {/*pranch*/}
        <div className='pranch'>
            <div className='title-pranch'>
                <span>Revanue</span>
            </div>
            <div className='price-pranch'>
                <span>$2.415</span>
                <span>-11.4 <span className='icon'><ArrowDownwardIcon /></span></span>
            </div>
            <div className='pargraph-pranch'>
                <span>Compared to last month</span>
            </div>
        </div>
         {/*pranch*/}
         <div className='pranch'>
            <div className='title-pranch'>
                <span>Sales</span>
            </div>
            <div className='price-pranch'>
                <span>$4.515</span>
                <span>-1.4 <span className='icon'><ArrowDownwardIcon /></span></span>

            </div>
            <div className='pargraph-pranch'>
                <span>Compared to last month</span>
            </div>
            

        </div>
         {/*pranch*/}
         <div className='pranch'>
            <div className='title-pranch'>
                <span>Cost</span>
            </div>
            <div className='price-pranch'>
                <span>$9.015</span>
                <span>+11 <span className='icon-3'><ArrowUpwardIcon /></span></span>
             

            </div>
            <div className='pargraph-pranch'>
                <span>Compared to last month</span>
            </div>
            

        </div>
    </div>
  )
}

export default PranchHome