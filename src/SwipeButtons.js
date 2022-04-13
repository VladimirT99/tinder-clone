import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function SwipeButtons() {
  return (
    <div className='swipe_buttons'>
        <IconButton className='swipe_button_replay'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        
        <IconButton className='swipe_button_close'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        
        <IconButton className='swipe_button_star'>
            <StarIcon fontSize='large'/>
        </IconButton>
        
        <IconButton className='swipe_button_favourite'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>

        <IconButton className='swipe_button_flash'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons