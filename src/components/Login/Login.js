import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from "../LoginForm/LoginForm";
import './Login.css';

function Login({onSubmit, isSubmitting}) {
  return (
    <main>
      <section>
        <div className="login">
          <LoginForm onSubmit={onSubmit} isSubmitting={isSubmitting}/>
          <div className="login__container">
            <p className="login__text">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="login__link">Регистрация</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;