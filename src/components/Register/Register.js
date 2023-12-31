// Register.js
import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from "../RegisterForm/RegisterForm";
import './Register.css';

function Register({onSubmit, isSubmitting}) {
  return (
    <main>
      <section>
        <div className="register">
          <RegisterForm onSubmit={onSubmit} isSubmitting={isSubmitting}/>
          <div className="register__container">
            <p className="register__text">Уже зарегистрированы?</p>
            <Link to="/signin" className="register__link">Войти</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;