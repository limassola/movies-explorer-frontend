import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from "../LoginForm/LoginForm";
import './Login.css';

function Login() {
  return (
    <main>
      <section>
        <div className="login">
          <LoginForm />
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