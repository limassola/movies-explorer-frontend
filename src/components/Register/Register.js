// Register.js
import React from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import './Register.css';

function Register() {
  return (
    <div className="register">
      <RegisterForm />
      <div className="register__container">
        <p className="register__text">Уже зарегистрированы?</p>
        <a className="register__link">Войти</a>
      </div>
    </div>
  );
}

export default Register;