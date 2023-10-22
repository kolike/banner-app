import "./App.css";
import WelcomeBanner from "../banner/welcomeBanner";
import PhoneNumberPage from "../phoneNumberPage/phoneNumberPage";
import FinnalyPage from "../finallyPage/finnalyPage";
import VideoComponent from "../videoComponent/videoComponent";

function App() {
  return (
    <div>
      <VideoComponent/>
      <WelcomeBanner />
      {/* <PhoneNumberPage /> */}
      {/* <FinnalyPage/> */}
    </div>
  );
}

export default App;
