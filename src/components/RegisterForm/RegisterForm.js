import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './RegisterForm.css';
import mainApi from "../../utils/MainApi";

function RegisterForm({onSubmit}) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false)

  const validateName = () => {
    if (!name) {
      setNameError("Введите имя");
      return false;
    } else {
      setNameError("");
      return true;
    }
  }

  const validateEmail = () => {
    if (!email) {
      setEmailError("Введите почту");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Некорректный формат почты");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  }

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Что-то пошло не так...");
      return false;
    } else if (password.length < 6) {
      setPasswordError("Пароль должен содержать не менее 6 символов");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  }

  const validateForm = () => {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    setIsFormValid(isNameValid && isEmailValid && isPasswordValid);
  }

  const handleRegister = (e) => {
    // Валидация данных и обработка регистрации
    e.preventDefault()
    validateForm();
    if (isFormValid) {
      onSubmit(name, email, password);
    };
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    validateForm();
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateForm();
  }

  return (
    <form className="form">
        <Link className="form__link" to='/'>
          <img src={logo} alt='Логотип' className='form__logo'/>
        </Link>
        <h1 className="form__title">Добро пожаловать!</h1>
        <label className="form__label">
            Имя
            <input
            type="text"
            className="form__input"
            value={name}
            onChange={handleNameChange}
            placeholder="Введите имя"
            minLength="2"
            maxLength="30"
            required
            />
            {nameError && <p className="form__error">{nameError}</p>}
        </label>
        <label className="form__label">
            E-mail
            <input
            type="email"
            className="form__input"
            value={email}
            onChange={handleEmailChange}
            placeholder="Введите Email"
            required
            />
            {emailError && <p className="form__error">{emailError}</p>}
        </label>
        <label className="form__label">
            Пароль
            <input
            type="password"
            className="form__input"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Введите пароль"
            required
            minLength="6"
            maxLength="20"
            />
            {passwordError && <p className="form__error">{passwordError}</p>}
        </label>
        <button type="submit" disabled={!isFormValid} className={`${isFormValid ? 'form__button' : 'form__button_disabled'}`} onClick={handleRegister}>Зарегистрироваться</button>
    </form>
  );
}

export default RegisterForm;