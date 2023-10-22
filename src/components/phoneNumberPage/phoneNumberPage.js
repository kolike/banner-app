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
          <button className="btn"><div className="btn__text">1</div></button>
          <button className="btn"><div className="btn__text">2</div></button>
          <button className="btn"><div className="btn__text">3</div></button>
        </li>
        <li className="frame">
          <button className="btn"><div className="btn__text">4</div></button>
          <button className="btn"><div className="btn__text">5</div></button>
          <button className="btn"><div className="btn__text">6</div></button>
        </li>
        <li className="frame">
          <button className="btn"><div className="btn__text">7</div></button>
          <button className="btn"><div className="btn__text">8</div></button>
          <button className="btn"><div className="btn__text">9</div></button>
        </li>
        <li className="frame">
          <button className="btn-delete"><div className="btn__text">Стереть</div></button>
          <button className="btn"><div className="btn__text">0</div></button>
        </li>
      </ul>
      <label htmlFor="confirm">Согласие на обработку персональных данных</label>
      <input type="checkbox"></input>
      <button>ПОДТВЕРДИТЬ НОМЕР</button>
    </div>
  );
};
export default PhoneNumberPage;
