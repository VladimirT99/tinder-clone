import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Chat from './Chat';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      <div className="App">
      <Router>
        <Routes>
          <Route path="/chat/:person" element={<ChatScreen/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
