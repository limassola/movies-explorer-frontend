import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './LoginForm.css';
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'



function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

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
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    setIsFormValid(isEmailValid && isPasswordValid);
  }

  const handleLogin = (e) => {
    // Валидация данных и обработка авторизации
    e.preventDefault()
    validateForm();

    if(isFormValid) {
      mainApi.signin({email, password})
      .then((data) => {
        setCurrentUser(data)
        navigate('/movies')
      })
      .catch(err => console.log(err));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateForm();
  }

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
            onChange={handleEmailChange}
            placeholder="Введите Email"
            required
            />
            {emailError && <p className="login-form__error">{emailError}</p>}
        </label>
        <label className="login-form__label">
            Пароль
            <input
            type="password"
            className="login-form__input"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Введите пароль"
            required
            minLength="6"
            maxLength="20"
            />
            {passwordError && <p className="login-form__error">{passwordError}</p>}
        </label>
        <button type="button" className={`${isFormValid ? 'login-form__button' : 'login-form__button_disabled'}`} onClick={handleLogin}>Войти</button>
    </form>
  );
}

export default LoginForm;