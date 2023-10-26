import './finnalyPage.css';
import { Link } from 'react-router-dom/';

const FinnalyPage = () => {
  return (
    <>
      <div className="finnaly-page">
        <div className="banner-screen">
          <div className="btn">
            <Link to="/">
              <button className="btn-close">
                <p className="btn-text">X</p>
              </button>
            </Link>
          </div>
          <div className="text-top">ЗАЯВКА ПРИНЯТА</div>
          <div className="text-bottom">
            Держите телефон под рукой
            <br /> Скоро с Вами свяжется менеджер
          </div>
        </div>
      </div>
    </>
  );
};

export default FinnalyPage;
