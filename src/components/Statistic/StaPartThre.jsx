import React from 'react'
import './StaPartThre.css'
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Myphoto from '../../img/my-photo.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Balance } from '@mui/icons-material';
const StaPartThre = () => {
  return (
    <div className='sta-part-Thre'>
       <div className='left-sta-part-thre'>
            <div className='sta-apout'>
                <img src={Myphoto} alt='myphoto' />
                <h3>Mohamed Hamdy</h3>
                <p>Front End React</p>
                <UpgradeIcon className='Upgrade' />
            </div>
            <div className='sta-information'>
               <span className='title-sta-information'>information</span> 
               <div className='up-information'>
                <div className='email-information'>
                 <p> Email </p> 
                <a href="mailto:someone@example.com?Subject=Hello%20again"
                 target="_top">hamdymedo525@gmail.com</a>
                </div>
                <div className='phone-information'>
                <p>Phone</p>
                <p>0111 6798 122</p>
                </div>
               </div>
               <span className='title-sta-information'>Projects</span>
               <div className='up-information'>
                <div className='email-information'>
                 <p> Recent </p> 
                 <p>Guruable Admin</p>
                 </div>
                <div className='phone-information'>
                <p>Most Viewed</p>
                <p>dashboard</p>
                </div>
               </div>
               <div className='social-information'>
                <FacebookIcon className='social-icon-information' />
                <LinkedInIcon className='social-icon-information' />
                <InstagramIcon className='social-icon-information' />

               </div>
              </div>
            
       </div>
       <div className='right-sta-part-thre'>
           <div className='project-risk'>
               <div className='risk-rate'>
               <p>Project risk</p>
                <span>
                 <b>5</b>   
                </span>
                <h3>Balance</h3>
                <a href='#'>Chaange Your Risk</a>
               </div>
            <div className='button-project-task'>
                <button>Download overall Report</button>
            </div>
           </div>
           <div className='project'>
          
           </div>
       </div>  
    </div>
  )
}

export default StaPartThre