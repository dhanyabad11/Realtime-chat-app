import { Button, ButtonGroup } from '@chakra-ui/react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';


function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
