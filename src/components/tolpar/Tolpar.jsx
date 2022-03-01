import React from 'react'
import { useState } from 'react';
//icons tollpar
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
//img tollpar
import myPhoto from '../../img/my-photo.jpg'
import './Tolpar.css'
const tolpar = (props) => {
 
  return (
    <div className='tolpar'>
        <div className='child-tolpar'>
            <div className='left-tolpar'>
                <span>MOadmin</span>
            </div>
            <div className='right-tolpar'>
            <div className='main-icon'>
                   <button className='show' onClick={props.handleClick}> <MenuIcon  
                    /></button> 
                    
                </div>
                <div className='main-icon'>
                    <CircleNotificationsIcon  />
                    <span>2</span>
                </div>
                <div className='main-icon'>
                    <LanguageIcon />
                    <span>2</span>
                </div>
                <div className='main-icon'>
                    <SettingsIcon />
                   
                </div>
               <div className='img'>
                <img src={myPhoto} alt="myphoto" />
               </div>
            </div>  

        </div>
        
    </div>
  )
}

export default tolpar