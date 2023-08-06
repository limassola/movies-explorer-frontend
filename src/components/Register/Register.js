// Register.js
import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from "../RegisterForm/RegisterForm";
import './Register.css';

function Register() {
  return (
    <div className="register">
      <RegisterForm />
      <div className="register__container">
        <p className="register__text">Уже зарегистрированы?</p>
        <Link to="/signin" className="register__link">Войти</Link>
      </div>
    </div>
  );
}

export default Register;