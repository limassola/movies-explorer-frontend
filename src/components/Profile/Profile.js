import React from 'react';
import { Link } from 'react-router-dom';
// import Popup from "./Popup"; 
import Header from "../Header/Header";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import './Profile.css';


function Profile({ user, onEditProfile, onSignOut }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
    <header>
        <Header>
            <nav className='header__nav'>
              <ul className='header__items'>
                    <li className='header__list-item'><Link to="/movies" className='header__item header__item_active'>Фильмы</Link></li>
                    <li className='header__list-item'><Link to="/saved-movies" className='header__item'>Сохранённые фильмы</Link></li>
              </ul>
            </nav>
            <Link to="/profile" className="header__button header__button_type_account">Аккаунт</Link>
            <button type='button' onClick={handleBurgerClick} className="header__button header__button_type_burger"></button>
        </Header>
    </header>
    <main>
        <section>
            {isMenuOpen ? <BurgerMenu closeMenu={handleBurgerClick} isSavedPage={false}/> : null}
        </section>
        <section>
            <div className="profile">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <div className="profile__info">
                    <div className="profile__item">
                        <p className="profile__text">Имя</p>
                        <p className="profile__user-info">Виталий</p>
                    </div>
                    <div className="profile__item">
                        <p className="profile__text">E-mail</p>
                        <p className="profile__user-info">pochta@yandex.ru</p>
                    </div>
                </div>
                <div className="profile__container">
                    <button type='button' className="profile__button profile__button_type_popup" onClick={onEditProfile}>Редактировать</button>
                    <Link to="/" className="profile__button profile__button_type_signout" onClick={onSignOut}>Выйти из аккаунта</Link>
                </div>
                
                {/* Открывает попап редактирования данных */}
                {/* <Popup /> */}
            </div>
        </section>
    </main>
    </>
  );
}

export default Profile;