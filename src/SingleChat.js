import React from 'react'
import { Avatar } from '@mui/material'
import "./SingleChat.css";

function SingleChat({name, message, timestamp, profilePic}) {
  return (
    <div className='SingleChat'>
            <Avatar className='chat_image' alt = {name} src = {profilePic}/>
            <div className='chat_details'>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <div className='chat_timestamp'>{timestamp}</div>
    </div>
  )
}

export default SingleChat