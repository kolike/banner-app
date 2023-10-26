import './finnalyPage.css';
import { Link } from 'react-router-dom/';

const FinnalyPage = () => {
  return (
    <div className="finnaly-page">
      <div className="finnaly-banner">
        <strong className="finnaly-text-top">
          ЗАЯВКА <br /> ПРИНЯТА
        </strong>
        <div className="finnaly-text-bottom">
          Держите телефон под рукой.
          <br /> Скоро с Вами свяжется менеджер.
        </div>
      </div>
      <Link className="finnaly-btn-close" to="/">
        <img src="/close-icon.svg" alt="close-icon" />
      </Link>
      <img className="finnaly-qr-code" src="/qr-code.svg" alt="qr-code" />
    </div>
  );
};

export default FinnalyPage;
