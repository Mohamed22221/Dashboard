import React from 'react'
import "./MemberId.css"
import userRows from './DomyData';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import IosShareIcon from '@mui/icons-material/IosShare';

//members
import man1 from"../../img/man1.jpg"
import man2 from"../../img/man2.jpg"
import man3 from"../../img/man3.jpg"
import woman1 from"../../img/woman1.jpeg"
import woman2 from"../../img/woman2.jpeg"
const MemberId = ({memper}) => {


  return (
    <div className='main-member'>
        <div className='title-member'>
            
             <span>Edit Memper</span>
             <button>Create</button>
        </div>
       <div className='right-left'>
        {/*information user */}
       <div className='information-member'>

        <div className='about-member'>
         <div className='img-member'>
         <img src={woman1}/>
        </div>   
       <div className='text-member'>
         <h3>Anna Becker</h3>
        <span>SoftWare Engineri</span>
       </div>
        </div>

        <div className='acount-Details'>
            <span>Account Details</span>
            <div className='main-acount-Details'>
                <div className='username'>
                    <PersonIcon className='icone-about' />
                    annabeck99
                </div>
                <div className='date'>
                    <DateRangeIcon className='icone-about' />
                    22/2/2003
                </div>
            </div>
        </div>
        <div className='acount-Details'>
            <span>Contact Details</span>
            <div className='main-acount-Details'>
                <div className='username'>
                    <LocalPhoneIcon className='icone-about' />
                    +0111 6518 134
                </div>
                <div className='date'>
                    <EmailIcon className='icone-about' />
                    Annabeck25@gmail.come
                </div>
                <div className='email'>
                    <HomeWorkIcon className='icone-about' />
                    Egypt / giza
                </div>
            </div>
        </div>
        
        </div>
         {/*information user */}
        <div className='form-member'>
            
            <div className='left-form'>
            <span>Edit</span>
            <div className='inbut-form'>
                <label >Username</label>
                <input type="text" placeholder='annabeck99' />
            </div>
            <div className='inbut-form'>
                <label >Full Name</label>
                <input type="text" placeholder='Anna Becker' />
            </div>
            <div className='inbut-form'>
                <label >Email</label>
                <input type="email" placeholder='Annabeck25@gmail.come' />
            </div>
            <div className='inbut-form'>
                <label >Phone</label>
                <input type="number" placeholder='+0111 6518 134' />
            </div>
            <div className='inbut-form'>
                <label >Address</label>
                <input type="text" placeholder='Egypt / giza' />
            </div>
            
            </div>
            <div className='right-form'>
                <div className="about-right-form">
                    <div className='img'>
                        <img src={woman1} alt="" />

                    </div>
                    <div className='send'>
                        <label htmlFor='send'>
                            <IosShareIcon  />
                        </label>
                    <input type="file" id='send' style={{display :"none"}} />
                    </div>
                </div>
                <div >
                    <button className='button-update'>update</button>
                </div>
            </div>
        </div>
       </div>
     
    </div>
  )
}

export default MemberId