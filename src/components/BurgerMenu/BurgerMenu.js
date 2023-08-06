import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({isMenuOpen, closeMenu, isMoviesPage, isSavedPage}) {
  return (
    <div className='burger-menu'>
        <div className='burger-menu__container'>
            <button onClick={closeMenu} className='burger-menu__button-close'></button>
            <ul className='burger-menu__items'>
                <Link to='/' className='burger-menu__item'>Главная</Link>
                <Link to='/movies' className={`burger-menu__item ${isMoviesPage && 'burger-menu__item_active'}`}>Фильмы</Link>
                <Link to='/saved-movies' className={`burger-menu__item ${isSavedPage && 'burger-menu__item_active'}`}>Сохранённые фильмы</Link>
            </ul>
            <Link to='/profile' className='burger-menu__button-account'>Аккаунт</Link>
        </div>
    </div>
);
}

export default BurgerMenu;