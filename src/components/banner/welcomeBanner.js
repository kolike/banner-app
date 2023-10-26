import './welcomeBanner.css';
import qrCode from './qr-code.png';
import { Link } from 'react-router-dom/';

const WelcomeBanner = () => {
  return (
    <div className="banner">
      <div className="screen">
        <div className="text-on-top">
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
          <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
        </div>
        <img className="qr-code" src={qrCode} alt="QR-code"></img>
        <div className="text-on-bottom">Сканируйте QR-код или нажмите ОК</div>
        <Link to="phone">
          <button className="btn-ok">
            <p className="btn-text">OK</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeBanner;
