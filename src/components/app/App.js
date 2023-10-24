import './App.css';
import PhoneNumberPage from '../phoneNumberPage/phoneNumberPage';
import FinnalyPage from '../finallyPage/finnalyPage';
import VideoComponent from '../videoComponent/videoComponent';
import HomePage from '../homePage/homePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  console.log(isPlaying);
  return (
    <Router>
      <VideoComponent isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Routes>
        <Route path="*" element={<HomePage isPlaying={isPlaying} setIsPlaying={setIsPlaying} />} />
        <Route path="phone" element={<PhoneNumberPage setIsPlaying={setIsPlaying} />} />
        <Route path="finnaly" element={<FinnalyPage setIsPlaying={setIsPlaying} />} />
      </Routes>
    </Router>
  );
}

export default App;
