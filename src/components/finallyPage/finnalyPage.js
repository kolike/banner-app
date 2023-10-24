import './finnalyPage.css';
import { Link } from 'react-router-dom/';

const FinnalyPage = ({ setIsPlaying }) => {
  return (
    <>
      <div className="frame">
        <div className="header-text">ЗАЯВКА ПРИНЯТА</div>
        <div className="sub-text">Держите телефон под рукой. Скоро с Вами свяжется менеджер</div>
      </div>
      <Link to="/">
        <button onClick={() => setIsPlaying(true)}>
          <p className="btn-text">X</p>
        </button>
      </Link>
    </>
  );
};
export default FinnalyPage;
