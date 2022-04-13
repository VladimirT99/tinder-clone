import React from 'react'
import Header from './Header'
import SingleChat from './SingleChat'
import {Link} from 'react-router-dom';
import "./Chat.css"

function Chat() {
  return (
    <div>
    <Header backButton={1}/>
    <Link to="/chat/sarah" className='sarah'>
    <SingleChat
    name = "Sarah"
    message="How are you?"
    timestamp = "35 minutes ago"
    profilePic = "https://media.allure.com/photos/60cb7d2f8166bad6af178ac3/4:3/w_3992,h_2994,c_limit/sarah%20hyland%202020.jpg"/>
    </Link>
    <SingleChat
    name = "Robin"
    message="Wazzaaaaap?"
    timestamp="10 minutes ago"
    profilePic="https://pbs.twimg.com/profile_images/1293276114572451845/kUaqPYxf_400x400.jpg"/>
    <SingleChat
    name="Lily"
    message="Hello :)"
    timestamp = "7 seconds ago"
    profilePic = "https://legendsrevealed.com/entertainment/wp-content/uploads/2015/11/lily2.jpg"/>
    </div>
  )
}

export default Chat