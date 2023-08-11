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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
            minLength="6"
            maxLength="20"
            />
            {passwordError && <p className="form__error">{passwordError}</p>}
        </label>
        <button type="submit" className="form__button" onClick={handleRegister}>Зарегистрироваться</button>
    </form>
  );
}

export default RegisterForm;