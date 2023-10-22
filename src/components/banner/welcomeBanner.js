import "./welcomeBanner.css";
import qrCode from "./qr-code.png";

const WelcomeBanner = () => {
  return (
    <div className="layout">
      <div className="banner">
        <div className="text">
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
        </div>
        <img src={qrCode} alt="QR-code"></img>
        <div className="sub-text">Сканируйте QR-код или нажмите ОК</div>
        <button className="buttton">
          <p className="btn-text">OK</p>
        </button>
      </div>
    </div>
  );
};
export default WelcomeBanner;
