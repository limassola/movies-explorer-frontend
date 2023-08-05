import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import './Login.css';

function Login() {
  return (
    <div className="login">
      <LoginForm />
      <div className="login__container">
        <p className="login__text">Ещё не зарегистрированы?</p>
        <a className="login__link">Регистрация</a>
      </div>
    </div>
  );
}

export default Login;