import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './RegisterForm.css';

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (e) => {
    // Валидация данных и обработка регистрации
    e.preventDefault()
    if (!name) {
      setNameError("Введите имя");
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Введите почту");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Некорректный формат почты");
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Что-то пошло не так...");
    } else if (password.length < 6) {
      setPasswordError("Пароль должен содержать не менее 6 символов");
    } else {
      setPasswordError("");
    }
  };

  return (
    <form className="register-form">
        <Link to='/'>
          <img src={logo} alt='Логотип' className='register-form__logo'/>
        </Link>
        <h2 className="register-form__title">Добро пожаловать!</h2>
        <label className="register-form__label">
            Имя
            <input
            type="text"
            className="register-form__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="register-form__error">{nameError}</p>}
        </label>
        <label className="register-form__label">
            E-mail
            <input
            type="email"
            className="register-form__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="register-form__error">{emailError}</p>}
        </label>
        <label className="register-form__label">
            Пароль
            <input
            type="password"
            className="register-form__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="register-form__error">{passwordError}</p>}
        </label>
        <button className="register-form__button" onClick={handleRegister}>Зарегистрироваться</button>
    </form>
  );
}

export default RegisterForm;