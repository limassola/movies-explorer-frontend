import React from 'react';
import { Link } from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';


function Main() {
  return (
    <div className="Main">
      <header>
        <Header>
          <nav className='header__container'>
            <Link to="/signup" className='header__link'>Регистрация</Link>
            <Link to="/signin" className='header__button'>Войти</Link>
          </nav>
        </Header>
      </header>
      <main>
        <section>
          <Promo/>
        </section>
        <section>
          <AboutProject/>
        </section>
        <section>
          <Techs/>
        </section>
        <section>
          <AboutMe/>
        </section>
        <section>
          <Portfolio/>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Main;