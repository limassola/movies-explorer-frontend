import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './LoginForm.css';


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    // Валидация данных и обработка авторизации
    if (!email) {
      setEmailError("Введите почту");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Некорректный формат почты");
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Введите пароль");
    } else if (password.length < 6) {
      setPasswordError("Пароль должен содержать не менее 6 символов");
    } else {
      setPasswordError("");
    }
  };

  return (
    <form className="login-form">
        <Link className="login-form__link" to='/'>
          <img src={logo} alt='Логотип' className='login-form__logo'/>
        </Link>
        <h1 className="login-form__title">Рады видеть!</h1>
        <label className="login-form__label">
            E-mail
            <input
            type="email"
            className="login-form__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="login-form__error">{emailError}</p>}
        </label>
        <label className="login-form__label">
            Пароль
            <input
            type="password"
            className="login-form__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="login-form__error">{passwordError}</p>}
        </label>
        <button type="button" className="login-form__button" onClick={handleLogin}>Войти</button>
    </form>
  );
}

export default LoginForm;