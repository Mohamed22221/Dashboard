import React from 'react'
import './StaPartTwo.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import WorkIcon from '@mui/icons-material/Work';
const StaPartTwo = () => {
  return (
    <div className='sta-part-two'>
        {/*row one part */}
        <div className='main-sta-part-two'>
            <div className='part-two-item-1'>
                <div className='text-part-two'>
                    <p>Revenue</p>
                    <h3>$42,562</h3>
                    <p>
                    $5,032 
                    <ArrowUpwardIcon className='icon-sm' />
                    </p>
                </div>
                <div className='icon-part-two'>
                    <FilterAltIcon className='icon-pig' />
                </div>
            </div>
            <div className='part-two-item-2'>
                <div className='text-part-two'>
                    <p>Orders Received</p>
                    <h3>486</h3>
                    <p>
                    $5,032 
                    <ArrowUpwardIcon className='icon-sm' />
                    </p>
                </div>
                <div className='icon-part-two'>
                    <PeopleAltIcon className='icon-pig' />
                </div>
            </div>
            <div className='part-two-item-3'>
                <div className='text-part-two'>
                    <p>Total Sales</p>
                    <h3>1641</h3>
                    <p>
                    $5,032 
                    <ArrowUpwardIcon className='icon-sm' />
                    </p>
                </div>
                <div className='icon-part-two'>
                    <TrackChangesIcon className='icon-pig' />
                </div>
            </div>
        </div>
            {/*row two part */}
            <div className='main-information-stapart'>
                <div className='information-item'>
                    <EmailIcon className='email' />
                    <h2><span className='number-1'>8.62k</span> Subscribers</h2>
                    <p>Your main list is growing</p>
                    <button className='button-1'>Manage List</button>
                </div>
                <div className='information-item'>
                    <TwitterIcon className='twiter' />
                    <h2><span className='number-2'>+40</span> Followers</h2>
                    <p>Your main list is growing</p>
                    <button className='button-2'>Chech Them out</button>
                </div>
                <div className='information-item'>
                    <WorkIcon className='WSorkI' />
                    <h2>Business Plan</h2>
                    <p>This is your current active plan</p>
                    <button className='button-3'>Upgrade to Vip</button>
                </div>
            </div>
    </div>
  )
}

export default StaPartTwo