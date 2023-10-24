import './welcomeBanner.css';
import qrCode from './qr-code.png';
import { Link } from 'react-router-dom/';

const WelcomeBanner = ({ setIsPlaying }) => {
  return (
    <div className="layout">
      <div className="banner">
        <div className="text">ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!</div>
        <img src={qrCode} alt="QR-code"></img>
        <div className="sub-text">Сканируйте QR-код или нажмите ОК</div>
        <Link to="phone">
          <button className="buttton" onClick={() => setIsPlaying(false)}>
            <p className="btn-text">OK</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeBanner;
