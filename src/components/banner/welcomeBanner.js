import './welcomeBanner.css';
import qrCode from './qr-code.png';
import { Link } from 'react-router-dom/';

const WelcomeBanner = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-banner">
        <strong className="welcome-text-on-top">
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
          <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
        </strong>
        <img className="welcome-qr-code" src={qrCode} alt="QR-code"></img>
        <div className="welcome-text-on-bottom">Сканируйте QR-код или нажмите ОК</div>
        <Link to="phone">
          <button className="welcome-btn-ok">OK</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeBanner;
