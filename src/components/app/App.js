import './App.css';
import PhoneNumberPage from '../phoneNumberPage/phoneNumberPage';
import FinnalyPage from '../finallyPage/finnalyPage';
import VideoComponent from '../videoComponent/videoComponent';
import HomePage from '../homePage/homePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <VideoComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="phone" element={<PhoneNumberPage />} />
        <Route path="finnaly" element={<FinnalyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
