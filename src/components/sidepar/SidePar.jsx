import React from 'react'
import './SidePar.css'
import {  Link } from "react-router-dom";
//icons Matreial
  import LineStyleIcon from '@mui/icons-material/LineStyle';
  import TimelineIcon from '@mui/icons-material/Timeline';
  import TrendingUpIcon from '@mui/icons-material/TrendingUp';
  import PermIdentityIcon from '@mui/icons-material/PermIdentity';
  import StorefrontIcon from '@mui/icons-material/Storefront';
  import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
  import BarChartIcon from '@mui/icons-material/BarChart';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
  import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
  import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
  import ReportIcon from '@mui/icons-material/Report';

const SidePar = (props) => {
  return (
    <div className={props.click ? "side-par active" : "side-par"}>
     
        <div className='main-slide'>
           {/*one pranch slide */} 
            <div className='pranch-slide'>
                <h3>Dashbord</h3>
                <ul  >
                  <Link to="/Home" >
                 
                    <li onClick={props.close}>
                    <LineStyleIcon className="sidebarIcon" />
                   Home
                    </li> 
                    </Link>
                    <li onClick={props.close}>
                    <TimelineIcon className="sidebarIcon" />
                       Analytcs
                    </li>
                    <li onClick={props.close}>
                    <TrendingUpIcon className="sidebarIcon" />
                        Sales
                    </li>
                    
                </ul>
            </div>
        
              {/*two pranch slide */} 
              <div className='pranch-slide'>
                <h3>Quick Menu</h3>
                <ul>
                  <Link to="/User">
                    
                
                    <li onClick={props.close}>
                  
                    <PermIdentityIcon className="sidebarIcon" />
                   
                     Users
                   
                    
                    </li>
                    </Link>
                    <li onClick={props.close}>
                    <StorefrontIcon className="sidebarIcon" />
                    Products
                    </li>
                    <li onClick={props.close}>
                    <AttachMoneyIcon className="sidebarIcon" />
                    Transactions
                    </li>
                    <li onClick={props.close}>
                    <BarChartIcon className="sidebarIcon" />
                    Reports
                    </li>
                    
                </ul>
            </div>
              {/*three pranch slide */} 
              <div className='pranch-slide'>
                <h3>Notifications</h3>
                <ul>
                    <li onClick={props.close}>
                    <MailOutlineIcon className="sidebarIcon" />
                    Mail
                    </li>
                    <li onClick={props.close}>
                    <DynamicFeedIcon className="sidebarIcon" />
                    Feedback
                    </li>
                    <li onClick={props.close}>
                    <ChatBubbleOutlineIcon className="sidebarIcon" />
                    Messages
                    </li>
                    
                </ul>
            </div>
              {/*four pranch slide */} 
              <div className='pranch-slide'>
                <h3>Staff</h3>
                <ul>
                    <li onClick={props.close}>
                    <WorkOutlineIcon className="sidebarIcon" />
                    Manage
                    </li>
                    <li onClick={props.close}>
                    <TimelineIcon className="sidebarIcon" />
                    Analytics
                    </li>
                    <li onClick={props.close}>
                    <ReportIcon className="sidebarIcon" />
                    Reports
                    </li >
                    
                </ul>
            </div>

        </div>
        </div>
  )
}

export default SidePar