import './phoneNumberPage.css';
import { Link, useNavigate } from 'react-router-dom/';
import { useState, useMemo, useEffect, useRef } from 'react';

const PhoneNumberPage = () => {
  const [phoneInput, setPhoneInput] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [validateData, setValidateData] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [timeWithoutActions, setTimeWithoutActions] = useState(0);
  const [isWrongNumber, setIsWrongNumber] = useState(false);

  const navigate = useNavigate();

  const buttonsRef = useRef([]);

  useEffect(() => {
    const onKeydown = (e) => {
      if (e.keyCode === 37) {
        setSelectedButtonIndex((prev) => (prev === 0 ? 12 : prev - 1));
      } else if (e.keyCode === 39) {
        setSelectedButtonIndex((prev) => (prev === 12 ? 0 : prev + 1));
      } else if (e.keyCode === 40) {
        setSelectedButtonIndex((prev) => {
          if (prev < 6) {
            return (prev += 3);
          } else if (prev === 6 || prev === 7) {
            return 9;
          } else if (prev === 8) {
            return 10;
          } else if (prev === 9 || prev === 10) {
            return 11;
          } else if (prev === 11) {
            return 12;
          } else if (prev >= 12) {
            return 0;
          }
        });
      } else if (e.keyCode === 38) {
        setSelectedButtonIndex((prev) => {
          if (prev > 12) {
            return 0;
          } else if (prev <= 2) {
            return 12;
          } else if (prev === 12) {
            return 11;
          } else if (prev === 11) {
            return 10;
          } else if (prev === 10) {
            return 8;
          } else if (prev === 9) {
            return 6;
          } else if (prev <= 8) {
            return (prev -= 3);
          }
        });
      } else if (e.key === 'Backspace') {
        setPhoneInput((prev) => prev.slice(0, -1));
        buttonsRef.current[11].disabled = true;
      } else if (
        phoneInput.length < 10 &&
        ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 97 && e.keyCode <= 105))
      ) {
        setIsWrongNumber(false);
        setPhoneInput((phoneInput) => phoneInput + e.key);
        setSelectedButtonIndex(e.key === '0' ? 10 : e.key - 1);
      } else {
        console.log('неизвестная кнопка');
      }
    };

    document.addEventListener('keydown', onKeydown);
    return () => {
      document.removeEventListener('keydown', onKeydown);
    };
  }, [phoneInput.length]);

  useEffect(() => {
    buttonsRef.current[11].disabled = true;
    if (validateData && isChecked) {
      setNextPage('/finnaly');
      buttonsRef.current[11].disabled = false;
    }
  }, [isChecked, validateData]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://apilayer.net/api/validate?access_key=ba9ed546b83b2a39a919b353724fa754&number=7${phoneInput}&country_code=&format=1`,
      );
      const data = await response.json();
      setValidateData(data?.valid);
    };

    if (phoneInput.length === 10 && isChecked) {
      getData();
      buttonsRef.current[11].disabled = false;
    }
  }, [phoneInput, isChecked]);

  useEffect(() => {
    if (phoneInput.length === 10 && !validateData && isChecked) {
      setIsWrongNumber(true);
    } else {
      setIsWrongNumber(false);
    }
  }, [phoneInput, validateData, isChecked]);

  useEffect(() => {
    buttonsRef.current[selectedButtonIndex].focus();
  }, [buttonsRef, selectedButtonIndex]);

  useEffect(() => {
    if (timeWithoutActions >= 10) {
      navigate('/');
    }
  }, [timeWithoutActions, navigate]);

  useEffect(() => {
    const intervalId = setInterval(() => setTimeWithoutActions((prev) => prev + 1), 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setTimeWithoutActions(0);
  }, [phoneInput, isChecked, selectedButtonIndex]);

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
      setIsWrongNumber(false);
      setPhoneInput((prev) => prev + e.target.textContent);
      setSelectedButtonIndex(e.target.textContent === '0' ? 10 : e.target.textContent - 1);
    }
  };

  const clearNumber = () => {
    setPhoneInput('');
    setIsWrongNumber(false);
  };

  return (
    <div className="phonepage">
      <div className="phonepage-phone">
        <Link to="/">
          <img
            className="phonepage-close-button"
            src={selectedButtonIndex === 12 ? 'close-icon.svg' : '/close-icon-white.svg'}
            ref={(el) => (buttonsRef.current[12] = el)}
            alt="close-icon"
          ></img>
        </Link>
        <img className="phonepage-qr-code" src="/qr-code.svg" alt="qr-code" />
        <div className="phonepage-input-text">Введите ваш номер мобильного телефона</div>
        <div className={isWrongNumber ? 'phonepage-wrong-phone-number' : 'phonepage-phone-number'}>
          {phone}
        </div>
        <div className="phonepage-sub-text">
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </div>
        <ul className="phonepage-numpad">
          <li className="phonepage-row">
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[0] = el)}
              className={selectedButtonIndex === 0 ? 'phonepage-btn active' : 'phonepage-btn'}
            >
              1
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[1] = el)}
              className={selectedButtonIndex === 1 ? 'phonepage-btn active' : 'phonepage-btn'}
            >
              2
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[2] = el)}
              className={selectedButtonIndex === 2 ? 'phonepage-btn active' : 'phonepage-btn'}
            >
              3
            </button>
          </li>
          <li className="phonepage-row">
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[3] = el)}
              className={selectedButtonIndex === 3 ? 'phonepage-btn active' : 'phonepage-btn'}
            >
              4
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[4] = el)}
              className={selectedButtonIndex === 4 ? 'phonepage-btn active' : 'phonepage-btn'}
            >
              5
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[5] = el)}
              className={selectedButtonIndex === 5 ? 'phonepage-btn active' : 'phonepage-btn'}
            >
              6
            </button>
          </li>
          <li className="phonepage-row">
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[6] = el)}
              className={selectedButtonIndex === 6 ? 'phonepage-btn active' : 'phonepage-btn'}
            >
              7
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[7] = el)}
              className={selectedButtonIndex === 7 ? 'phonepage-btn active' : 'phonepage-btn'}
            >
              8
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[8] = el)}
              className={selectedButtonIndex === 8 ? 'phonepage-btn active' : 'phonepage-btn'}
            >
              9
            </button>
          </li>
          <li className="phonepage-row">
            <button
              onClick={clearNumber}
              ref={(el) => (buttonsRef.current[9] = el)}
              className={
                selectedButtonIndex === 9 ? 'phonepage-btn-clear active' : 'phonepage-btn-clear'
              }
            >
              Стереть
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[10] = el)}
              className={selectedButtonIndex === 10 ? 'phonepage-btn active' : 'phonepage-btn'}
            >
              0
            </button>
          </li>
          <li className="phonepage-row">
            <img
              src={
                isWrongNumber
                  ? '/wrong-number-icon.svg'
                  : isChecked
                  ? '/checkbox-panel-verified.svg'
                  : '/checkbox-panel-not-verified.svg'
              }
              onClick={() => setIsChecked((prev) => !prev)}
              alt="checkbox"
            />
          </li>
          <li className="phonepage-row">
            <Link to={nextPage}>
              <button
                className={
                  selectedButtonIndex === 11
                    ? 'phonepage-btn-confirm-active'
                    : 'phonepage-btn-confirm'
                }
                ref={(el) => (buttonsRef.current[11] = el)}
              >
                ПОДТВЕРДИТЬ НОМЕР
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default PhoneNumberPage;
