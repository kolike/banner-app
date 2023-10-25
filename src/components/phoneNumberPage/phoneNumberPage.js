import './phoneNumberPage.css';
import { Link } from 'react-router-dom/';
import { useState, useMemo, useEffect, useRef } from 'react';

const PhoneNumberPage = ({ setIsPlaying }) => {
  const [phoneInput, setPhoneInput] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [validateData, setValidateData] = useState(false);
  const [nextPage, setNextPage] = useState(null);

  const [selectedButton, setSelectedButton] = useState(1);
  const btn1 = useRef();
  const btn2 = useRef();
  const btn3 = useRef();
  const btn4 = useRef();
  const btn5 = useRef();
  const btn6 = useRef();
  const btn7 = useRef();
  const btn8 = useRef();
  const btn9 = useRef();
  const btn10 = useRef();
  const btn11 = useRef();
  const btn12 = useRef();
  const btn13 = useRef();

  const focusBtn = () => {
    switch (selectedButton) {
      case 1:
        btn1.current.focus();
        break;
      case 2:
        btn2.current.focus();
        break;
      case 3:
        btn3.current.focus();
        break;
      case 4:
        btn4.current.focus();
        break;
      case 5:
        btn5.current.focus();
        break;
      case 6:
        btn6.current.focus();
        break;
      case 7:
        btn7.current.focus();
        break;
      case 8:
        btn8.current.focus();
        break;
      case 9:
        btn9.current.focus();
        break;
      case 10:
        btn10.current.focus();
        break;
      case 11:
        btn11.current.focus();
        break;
      case 12:
        btn12.current.focus();
        break;
      case 13:
        btn13.current.focus();
        break;
      default:
        btn1.current.focus();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', backspaseNumber);
    return () => {
      document.removeEventListener('keydown', backspaseNumber);
    };
  }, [phoneInput]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 37) {
        setSelectedButton((prev) => (prev === 1 ? 13 : +prev - 1));
      } else if (event.keyCode === 39) {
        setSelectedButton((prev) => (prev === 13 ? 1 : +prev + 1));
      } else if (event.keyCode === 40) {
        setSelectedButton((prev) => {
          if (prev < 7) {
            return (prev += 3);
          } else if (prev === 7 || prev === 8) {
            return 10;
          } else if (prev === 9) {
            return 11;
          } else if (prev === 10 || prev === 11) {
            return 12;
          } else if (prev === 12) {
            return 13;
          } else if (prev >= 13) {
            return 1;
          }
        });
      } else if (event.keyCode === 38) {
        setSelectedButton((prev) => {
          if (prev > 13) {
            return 1;
          } else if (prev <= 3) {
            return 13;
          } else if (prev === 13) {
            return 12;
          } else if (prev === 12) {
            return 11;
          } else if (prev === 11) {
            return 9;
          } else if (prev === 10) {
            return 7;
          } else if (prev <= 9) {
            return (prev -= 3);
          }
        });
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    focusBtn();
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [selectedButton]);

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
      setSelectedButton(+e.target.textContent);
    }
  };

  const clearNumber = () => {
    setPhoneInput('');
  };

  const getData = async () => {
    const response = await fetch(
      `http://apilayer.net/api/validate?access_key=ba9ed546b83b2a39a919b353724fa754&number=7${phoneInput}&country_code=&format=1`,
    );
    const data = await response.json();
    setValidateData(data?.valid);
  };

  const validation = () => {
    getData();
    console.log('DATA: ', validateData);
    if (phoneInput.length === 10 && isChecked && validateData) {
      setNextPage('/finnaly');
    } else {
      return null;
    }
  };

  const backspaseNumber = (e) => {
    if (e.key === 'Backspace') {
      setPhoneInput(phoneInput.slice(0, -1));
    } else if (
      phoneInput.length < 10 &&
      (e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9')
    ) {
      setPhoneInput((phoneInput) => phoneInput + e.key);
      setSelectedButton(+e.key);
    }
    if (e.key === '0') {
      setSelectedButton(() => 11);
    }
  };

  return (
    <div className="layout">
      <div className="header-text">Введите ваш номер мобильного телефона</div>
      <div className="phone-number">{phone}</div>
      <div className="sub-text">и с Вами свяжется наш менеждер для дальнейшей консультации</div>
      <ul className="numpad">
        <li className="frame41">
          <button onClick={addNumber} ref={btn1} className={selectedButton === 1 ? 'active' : ''}>
            1
          </button>
          <button onClick={addNumber} ref={btn2} className={selectedButton === 2 ? 'active' : ''}>
            2
          </button>
          <button onClick={addNumber} ref={btn3} className={selectedButton === 3 ? 'active' : ''}>
            3
          </button>
        </li>
        <li className="frame41">
          <button onClick={addNumber} ref={btn4} className={selectedButton === 4 ? 'active' : ''}>
            4
          </button>
          <button onClick={addNumber} ref={btn5} className={selectedButton === 5 ? 'active' : ''}>
            5
          </button>
          <button onClick={addNumber} ref={btn6} className={selectedButton === 6 ? 'active' : ''}>
            6
          </button>
        </li>
        <li className="frame41">
          <button onClick={addNumber} ref={btn7} className={selectedButton === 7 ? 'active' : ''}>
            7
          </button>
          <button onClick={addNumber} ref={btn8} className={selectedButton === 8 ? 'active' : ''}>
            8
          </button>
          <button onClick={addNumber} ref={btn9} className={selectedButton === 9 ? 'active' : ''}>
            9
          </button>
        </li>
        <li className="frame44">
          <button
            onClick={clearNumber}
            ref={btn10}
            className={selectedButton === 10 ? 'active' : ''}
          >
            Стереть
          </button>
          <button onClick={addNumber} ref={btn11} className={selectedButton === 11 ? 'active' : ''}>
            0
          </button>
        </li>
        <li className="frame45">
          <label className="check-text" htmlFor="confirm">
            Согласие на обработку персональных данных
          </label>
          <input
            className="check"
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked((isChecked) => !isChecked)}
          ></input>
        </li>
        <li className="frame44">
          <Link to={nextPage}>
            <button
              onClick={() => validation()}
              className={selectedButton === 12 ? 'active' : ''}
              ref={btn12}
            >
              ПОДТВЕРДИТЬ НОМЕР
            </button>
          </Link>
        </li>
      </ul>
      <Link to="/">
        <button
          className={selectedButton === 13 ? 'active' : ''}
          ref={btn13}
          onClick={() => setIsPlaying(true)}
        >
          X
        </button>
      </Link>
    </div>
  );
};
export default PhoneNumberPage;
