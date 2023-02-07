import './App.css';
import HomeScreen from './components/HomeScreen';
import PlayScreen from './components/PlayScreen';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
function App() {
  const [userName, setUserName] = useState(null);
  return (
    // <HomeScreen />
    <Routes>
        <Route exact path="/" element={<PlayScreen setUserName = {setUserName}/>} />
        <Route exact path="/home" element={<HomeScreen userName = {userName}/>} />
    </Routes>
  );
}

export default App;