import './phoneNumberPage.css';
import { Link } from 'react-router-dom/';
import { useState, useMemo } from 'react';

const PhoneNumberPage = () => {
  const [phoneInput, setPhoneInput] = useState('');

  console.log('phoneInput: ', phoneInput);
  const phone = useMemo(() => {
    let result = '+7(___)___-__-__';
    if (!phoneInput) {
      return result;
    }
    for (let value of phoneInput) {
      result = result.replace('_', value);
    }
    return result;
  }, [phoneInput]);

  const addNumber = (e) => {
    if (phoneInput.length < 10) {
      setPhoneInput(phoneInput + e.target.textContent);
    }
  };

  return (
    <div className="layout">
      <div className="header-text"> Введите ваш номер мобильного телефона</div>
      <div className="phone-number">{phone}</div>
      <div className="sub-text">и с Вами свяжется наш менеждер для дальнейшей консультации</div>
      <ul className="numpad">
        <li className="frame41">
          <button onClick={addNumber} className="btn">
            <div className="btn__text">1</div>
          </button>
          <button onClick={addNumber} className="btn">
            <div className="btn__text">2</div>
          </button>
          <button onClick={addNumber} className="btn">
            <div className="btn__text">3</div>
          </button>
        </li>
        <li className="frame41">
          <button onClick={addNumber} className="btn">
            <div className="btn__text">4</div>
          </button>
          <button onClick={addNumber} className="btn">
            <div className="btn__text">5</div>
          </button>
          <button onClick={addNumber} className="btn">
            <div className="btn__text">6</div>
          </button>
        </li>
        <li className="frame41">
          <button onClick={addNumber} className="btn">
            <div className="btn__text">7</div>
          </button>
          <button onClick={addNumber} className="btn">
            <div className="btn__text">8</div>
          </button>
          <button onClick={addNumber} className="btn">
            <div className="btn__text">9</div>
          </button>
        </li>
        <li className="frame44">
          <button className="btn-delete">
            <div className="btn__text">Стереть</div>
          </button>
          <button onClick={addNumber} className="btn">
            <div className="btn__text">0</div>
          </button>
        </li>
        <li className="frame45">
          <label className="check-text" htmlFor="confirm">
            Согласие на обработку персональных данных
          </label>
          <input className="check" type="checkbox"></input>
        </li>
        <li className="frame44">
          <Link to="/finnaly">
            <button className="confirm-btn">ПОДТВЕРДИТЬ НОМЕР</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default PhoneNumberPage;
