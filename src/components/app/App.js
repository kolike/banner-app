import "./App.css";
import WelcomeBanner from "../banner/welcomeBanner";
import PhoneNumberPage from "../phoneNumberPage/phoneNumberPage";
import FinnalyPage from "../finallyPage/finnalyPage";
import VideoComponent from "../videoComponent/videoComponent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <VideoComponent/>
      <Routes>
        <Route path="/" element={<WelcomeBanner />} />
        <Route path="/phone" element={<PhoneNumberPage />} />
        <Route path="/finnaly" element={<FinnalyPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
