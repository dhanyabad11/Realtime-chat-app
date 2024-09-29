import React, { useEffect } from 'react'
import axios from 'axios'

function ChatPage() {
  const fetchChats = async() => {
    const data = await axios.get("http://localhost:5001/api/chat")
  }
  useEffect(()=>{
    fetchChats(); 

  },[])

  return (
    
    <div>ChatPage</div>
  )
}

export default ChatPage