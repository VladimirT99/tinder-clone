import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import "./ChatScreen.css"
import Header from "./Header";

function ChatScreen() {
  const [messages, setMessages] = useState([
      {
          name: "Sarah",
          image: "https://media.allure.com/photos/60cb7d2f8166bad6af178ac3/4:3/w_3992,h_2994,c_limit/sarah%20hyland%202020.jpg",
          message: "Hello"
      },
      {
        name: "Sarah",
        image: "https://media.allure.com/photos/60cb7d2f8166bad6af178ac3/4:3/w_3992,h_2994,c_limit/sarah%20hyland%202020.jpg",
        message: "How are you?"
    },
    {
        message: "Hello :)"
    }
  ])
  
    return (
    <div className='ChatScreen'>
        <Header backButton={2}/>
        <p className="chatScreen_timestamp">You matched with Sarah on 12/4/2022</p>
        {messages.map((message) =>(
          message.name ? <div className='chatScreen_message'>
                
                <Avatar className='chatScreen_image'
                alt = {message.name}
                src = {message.image}
                />
                <p className='chatScreen_text'>{message.message}</p>
            </div>
            :
            <div className='chatScreen_message'>
              <p className='chatScreen_textUser'>{message.message}</p>
            </div>
        ))}
    </div>
  )
}

export default ChatScreen