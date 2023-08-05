import React from "react";
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
    <Header>
          <div className='header__items'>
            <a className='header__item'>Фильмы</a>
            <a className='header__item header__item_active'>Сохранённые фильмы</a>
          </div>
          <a className="header__button header__button_type_account">Аккаунт</a>
          <button onClick={handleBurgerClick} className="header__button header__button_type_burger"></button>
    </Header>
    {isMenuOpen ? <BurgerMenu closeMenu={handleBurgerClick} isSavedPage={true}/> : null}
    <div className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
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
            <button className="profile__button profile__button_type_popup" onClick={onEditProfile}>Редактировать</button>
            <button className="profile__button profile__button_type_signout" onClick={onSignOut}>Выйти из аккаунта</button>
        </div>
          
        {/* Открывает попап редактирования данных */}
        {/* <Popup /> */}
    </div>
    </>
  );
}

export default Profile;