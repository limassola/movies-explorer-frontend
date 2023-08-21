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
import BurgerMenu from "../BurgerMenu/BurgerMenu";


function Main({ isLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isLoggedIn)

  return (
    <div className="main">
      <header>
        <Header>
          {isLoggedIn ? 
          <> 
           <nav className='header__nav'>
            <ul className='header__items'>
              <li className='header__list-item'><Link to="/movies" className='header__item header__item_active'>Фильмы</Link></li>
              <li className='header__list-item'><Link to="/saved-movies" className='header__item'>Сохранённые фильмы</Link></li>
            </ul>
            </nav>
            <Link to="/profile" className="header__button header__button_type_account">Аккаунт</Link>
            <button type='button' onClick={handleBurgerClick} className="header__button header__button_type_burger"></button>
          </>
          :
          <>
            <nav className='header__container'>
              <Link to="/signup" className='header__link'>Регистрация</Link>
              <Link to="/signin" className='header__button'>Войти</Link>
            </nav>
          </>    
          }
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