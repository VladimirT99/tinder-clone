import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './Header.css';
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Header({backButton}) {
  return (
    <div className='header'>
        <IconButton>
            {(backButton === 1) ? <Link to="/" className='backButton'><ArrowBackIosIcon className = "header_icon" fontSize='large'/></Link> : (backButton === 2) ? <Link to= "/chat" className='backButton'><ArrowBackIosIcon className = "header_icon" fontSize='large'/></Link> : <PersonIcon className = "header_icon" fontSize='large'/>}
        </IconButton>
        <Link to = "/">
        <img className="header_logo"
        src='https://imgs.search.brave.com/4Q6UXuhV2Q9h6fha8Til10IZYKj5syIaNFbRIDIsYE0/rs:fit:1200:1080:1/g:ce/aHR0cDovL3RvdXMt/bG9nb3MuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzA0/L2xvZ28tVGluZGVy/LnBuZw'/>
        </Link>
        <Link to = "/chat">
          <IconButton>
            <ChatBubbleOutlineIcon className='header_icon' fontSize='large'/>
          </IconButton>
        </Link>
        
    </div>
  )
}

export default Header;