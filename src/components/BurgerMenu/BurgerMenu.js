import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({isMenuOpen, closeMenu, isMoviesPage, isSavedPage}) {
  return (
    <div className='burger-menu'>
        <div className='burger-menu__container'>
            <button onClick={closeMenu} className='burger-menu__button-close'></button>
            <ul className='burger-menu__items'>
                <li className='burger-menu__item'><Link to='/' className='burger-menu__link'>Главная</Link></li>
                <li className='burger-menu__item'><Link to='/movies' className={`burger-menu__link ${isMoviesPage && 'burger-menu__link_active'}`}>Фильмы</Link></li>
                <li className='burger-menu__item'><Link to='/saved-movies' className={`burger-menu__link ${isSavedPage && 'burger-menu__link_active'}`}>Сохранённые фильмы</Link></li>
            </ul>
            <Link to='/profile' className='burger-menu__button-account'>Аккаунт</Link>
        </div>
    </div>
);
}

export default BurgerMenu;