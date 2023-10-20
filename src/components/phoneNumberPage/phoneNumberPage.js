import "./phoneNumberPage.css";

const PhoneNumberPage = () => {
  return (
    <div className="layout">
      <div className="header-text"> Введите ваш номер мобильного телефона</div>
      <div className="phone-number">+7(___)___-__-__</div>
      <div className="sub-text">
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </div>
      <ul className="numpad">
        <li className="frame">
          <button> 1</button>
          <button> 2</button>
          <button> 3</button>
        </li>
        <li className="frame">
          <button> 4</button>
          <button> 5</button>
          <button> 6</button>
        </li>
        <li className="frame">
          <button> 7</button>
          <button> 8</button>
          <button> 9</button>
        </li>
        <li className="frame">
          <button> Стереть </button>
          <button> 0</button>
        </li>
      </ul>
      <label htmlFor="confirm">Согласие на обработку персональных данных</label>
      <input type="checkbox"></input>
      <button>ПОДТВЕРДИТЬ НОМЕР</button>
    </div>
  );
};
export default PhoneNumberPage;
