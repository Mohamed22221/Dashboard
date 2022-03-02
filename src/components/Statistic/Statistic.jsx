import React from 'react'
import "./Statistic.css"
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArticleIcon from '@mui/icons-material/Article';
import ClassIcon from '@mui/icons-material/Class';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import StaPartTwo from './StaPartTwo';
const Statistic = () => {
  return (
     <div className='main-Statistic'>
    <div className='Statistic'>
        <div className='one-Statistic'>
            <div className='Statistic-item'>
                <div className='about-header-Statistic'>
                    <h3 className='price-one'>$30200</h3>
                    <span>All Earnings</span>
                    </div>
                  <div className='icon-header-Statistic'>
                    <BarChartIcon className='icon' />
                  </div>  
            </div>
            <div className='foter-header-Statistic-1'>
                <h4>% change</h4>
                <TrendingUpIcon className='icon' />
                
            </div>
        </div>
        <div className='one-Statistic'>
            <div className='Statistic-item'>
                <div className='about-header-Statistic'>
                    <h3 className='price-two'>290+</h3>
                    <span>Page Views</span>
                    </div>
                  <div className='icon-header-Statistic'>
                    <ArticleIcon className='icon' />
                  </div>  
            </div>
            <div className='foter-header-Statistic-2'>
                <h4>% change</h4>
                <TrendingUpIcon className='icon' />
                
            </div>
        </div>
        <div className='one-Statistic'>
            <div className='Statistic-item'>
                <div className='about-header-Statistic'>
                    <h3 className='price-three'>145</h3>
                    <span>Task</span>
                    </div>
                  <div className='icon-header-Statistic'>
                    <ClassIcon className='icon' />
                  </div>  
            </div>
            <div className='foter-header-Statistic-3'>
                <h4>% change</h4>
                <TrendingDownIcon className='icon' />
                
            </div>
        </div>
        <div className='one-Statistic'>
            <div className='Statistic-item'>
                <div className='about-header-Statistic'>
                    <h3 className='price-four'>500</h3>
                    <span>Downloads</span>
                    </div>
                  <div className='icon-header-Statistic'>
                    <CloudDownloadIcon className='icon' />
                  </div>  
            </div>
            <div className='foter-header-Statistic-4'>
                <h4>% change</h4>
                <TrendingDownIcon className='icon' />
                
            </div>
        </div>
    </div>
    <StaPartTwo />
    </div> 
  )
}

export default Statistic