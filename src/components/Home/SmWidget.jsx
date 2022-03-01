import React from 'react'
import './SmWidget.css'
//members
import man1 from"../../img/man1.jpg"
import man2 from"../../img/man2.jpg"
import man3 from"../../img/man3.jpg"
import woman1 from"../../img/woman1.jpeg"
import woman2 from"../../img/woman2.jpeg"
//icon
import VisibilityIcon from '@mui/icons-material/Visibility';
const SmWidget = () => {
  return (
    <div className='main-smgwidge'>
        <span className='title-smgwidge'>New Join Member</span>
      
        <ul >
            <li className='person-smgwidge'>
                <div className='img'>
                    <img src={man1} />
                </div>
                <div className='name'>
                    <span>samy morad</span>
                    <span>Software Engineer</span>
                </div>
                    <button >
                    <VisibilityIcon className='icon-button' />
                    Display
                    </button>
            </li>
           
            <li className='person-smgwidge'>
                <div className='img'>
                    <img src={woman2} />
                </div>
                <div className='name'>
                    <span>sama sayed</span>
                    <span>Software Engineer</span>
                </div>
                    <button >
                    <VisibilityIcon className='icon-button' />
                    Display
                    </button>
            </li>
            <li className='person-smgwidge'>
                <div className='img'>
                    <img src={man2} />
                </div>
                <div className='name'>
                    <span>Ali Hamdy</span>
                    <span>Software Engineer</span>
                </div>
                    <button >
                    <VisibilityIcon className='icon-button' />
                    Display
                    </button>
            </li>
            <li className='person-smgwidge'>
                <div className='img'>
                    <img src={woman1} />
                </div>
                <div className='name'>
                    <span>marwa sayed</span>
                    <span>teacher</span>
                </div>
                    <button >
                    <VisibilityIcon className='icon-button' />
                    Display
                    </button>
            </li>
            <li className='person-smgwidge'>
                <div className='img'>
                    <img src={man3} />
                </div>
                <div className='name'>
                    <span>ahmed sayed</span>
                    <span>proggramer</span>
                </div>
                    <button >
                    <VisibilityIcon className='icon-button' />
                    Display
                    </button>
            </li>
        </ul>
      
            
    </div>
  )
}

export default SmWidget