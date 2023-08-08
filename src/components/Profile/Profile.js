import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import Popup from "./Popup"; 
import Header from "../Header/Header";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import './Profile.css';


function Profile({ user, onEditProfile, onSignOut }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [name, setName] = useState('Виталий');
     const [email, setEmail] = useState('pochta@yandex.ru');

    const handleNameChange = (e) => {
    setName(e.target.value);
    };

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
                <form className="profile__form">
          <div className="profile__info">
            <div className="profile__item">
              <label className="profile__label">Имя</label>
              <input
                className="profile__input"
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder='Введите имя'
                minLength="2"
                maxLength="30"
              />
            </div>
            <div className="profile__item">
              <label className="profile__label">E-mail</label>
              <input
                className="profile__input"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder='Введите Email'
              />
            </div>
          </div>
          <div className="profile__container">
            <button
              type="button"
              className="profile__button profile__button_type_popup"
              onClick={onEditProfile}
            >
              Редактировать
            </button>
            <Link
              to="/"
              className="profile__button profile__button_type_signout"
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </Link>
          </div>
        </form>
            </div>
        </section>
    </main>
    </>
  );
}

export default Profile;