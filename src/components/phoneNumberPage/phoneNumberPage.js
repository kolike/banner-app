import './phoneNumberPage.css';
import { Link, useNavigate } from 'react-router-dom/';
import { useState, useMemo, useEffect, useRef } from 'react';

const PhoneNumberPage = () => {
  const [phoneInput, setPhoneInput] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [timeWithoutActions, setTimeWithoutActions] = useState(0);
  const [isWrongNumber, setIsWrongNumber] = useState(false);
  const [loading, setLoading] = useState(false);

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
            if (buttonsRef.current[11].disabled) {
              return 12;
            }
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
            if (buttonsRef.current[11].disabled) {
              return 10;
            }
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
        ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105))
      ) {
        setIsWrongNumber(false);
        setPhoneInput((phoneInput) => phoneInput + e.key);
        setSelectedButtonIndex(e.key === '0' ? 10 : e.key - 1);
      }
    };

    document.addEventListener('keydown', onKeydown);
    return () => {
      document.removeEventListener('keydown', onKeydown);
    };
  }, [phoneInput.length]);

  useEffect(() => {
    buttonsRef.current[11].disabled = true;
    if (isPhoneNumberValid && isChecked) {
      setNextPage('/finnaly');
      buttonsRef.current[11].disabled = false;
    }
  }, [isChecked, isPhoneNumberValid]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(
        `
https://api-bdc.net/data/phone-number-validate?number=+7${phoneInput}&countryCode=ru&localityLanguage=en&key=bdc_613e9ba1234943c089fa3977d47493ba`,
      );
      const data = await response.json();
      setLoading(false);
      setIsPhoneNumberValid(data?.isValid);
    };

    if (phoneInput.length === 10 && isChecked) {
      getData();
      buttonsRef.current[11].disabled = false;
    }
  }, [phoneInput, isChecked]);

  useEffect(() => {
    if (phoneInput.length === 10 && !isPhoneNumberValid && isChecked) {
      setIsWrongNumber(true);
    } else {
      setIsWrongNumber(false);
    }
  }, [phoneInput, isPhoneNumberValid, isChecked]);

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
    <div className="phone-page">
      <div className="phone-page-banner">
        <button
          className="phone-page-close-btn"
          onClick={() => navigate('/')}
          ref={(el) => (buttonsRef.current[12] = el)}
        >
          <img
            src={selectedButtonIndex === 12 ? 'close-icon.svg' : '/close-icon-white.svg'}
            alt="close-icon"
          ></img>
        </button>
        <img className="phone-page-qr-code" src="/qr-code.svg" alt="qr-code" />
        <div className="phone-page-input-text">Введите ваш номер мобильного телефона</div>
        <div
          className={
            'phone-page-phone-number' +
            (!loading && isWrongNumber ? ' phone-page-wrong-phone-number' : '')
          }
        >
          {phone}
        </div>
        <div className="phone-page-sub-text">
          и с Вами свяжется наш менеждер для <br /> дальнейшей консультации
        </div>
        <div className="phone-page-numpad">
          <div className="phone-page-row">
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[0] = el)}
              className="phone-page-number-btn"
            >
              1
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[1] = el)}
              className="phone-page-number-btn"
            >
              2
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[2] = el)}
              className="phone-page-number-btn"
            >
              3
            </button>
          </div>
          <div className="phone-page-row">
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[3] = el)}
              className="phone-page-number-btn"
            >
              4
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[4] = el)}
              className="phone-page-number-btn"
            >
              5
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[5] = el)}
              className="phone-page-number-btn"
            >
              6
            </button>
          </div>
          <div className="phone-page-row">
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[6] = el)}
              className="phone-page-number-btn"
            >
              7
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[7] = el)}
              className="phone-page-number-btn"
            >
              8
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[8] = el)}
              className="phone-page-number-btn"
            >
              9
            </button>
          </div>
          <div className="phone-page-row">
            <button
              onClick={clearNumber}
              ref={(el) => (buttonsRef.current[9] = el)}
              className="phone-page-clear-btn"
            >
              Стереть
            </button>
            <button
              onClick={addNumber}
              ref={(el) => (buttonsRef.current[10] = el)}
              className="phone-page-number-btn"
            >
              0
            </button>
          </div>
        </div>
        {loading && <img src="/spinner.svg" alt="spinner" className="phone-page-spinner" />}
        {!loading && isWrongNumber && <img src="/wrong-number-icon.svg" alt="wrong number img" />}
        {!loading && !isWrongNumber && (
          <img
            src={isChecked ? '/checkbox-panel-verified.svg' : '/checkbox-panel-not-verified.svg'}
            onClick={() => setIsChecked((prev) => !prev)}
            alt="checkbox"
          />
        )}
        <div className="phone-page-row">
          <Link to={nextPage}>
            <button className="phone-page-confirm-btn" ref={(el) => (buttonsRef.current[11] = el)}>
              ПОДТВЕРДИТЬ НОМЕР
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PhoneNumberPage;
