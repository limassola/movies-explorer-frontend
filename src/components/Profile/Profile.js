import React, { useState, useContext, useEffect} from 'react';
import validator from "validator";
import { Link } from 'react-router-dom'; 
import Header from "../Header/Header";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import InfoToolTip from '../InfoTooltipSucces/InfoTooltipSucces';
import InfoTooltipSucces from '../InfoTooltipSucces/InfoTooltipSucces';
import InfoTooltipError from '../InfoTooltipError/InfoTooltipError';


function Profile({ onSignOut, currentName, currentEmail, currentUser, setCurrentUserEmail, onUpdateUser, setCurrentUserName, isEmailConflicted, userUpdated, isInfoToolTipOpen, setInfoToolTipOpen }) {
  const [isNameChanged, setNameChanged] = React.useState(false);
  const [isEmailChanged, setEmailChanged] = React.useState(false);
  const [isNameValid, setNameValid] = React.useState(true);
  const [isEmailValid, setEmailValid] = React.useState(true);
  const [isAllowed, setAllowed] = React.useState(false);
  const [isUpdateSucceed, setUpdateSucceed] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNameChange = (evt) => {
    setCurrentUserName(evt.target.value);
    setNameValid(evt.target.value.length>1 && evt.target.value.length<31);
  }
  const handleEmailChange = (evt) => {
    setCurrentUserEmail(evt.target.value);
    setEmailValid(validator.isEmail(evt.target.value));
  }
  useEffect(()=>{
      if (currentUser) {
        setEmailChanged(!(currentEmail===currentUser.email));
        setNameChanged(!(currentName===currentUser.name));
        
      }
  },[currentEmail, currentName, currentUser])

  useEffect(()=> {
    if (isEmailConflicted) {
      setCurrentUserEmail(currentUser.email)
      setCurrentUserName(currentUser.name)
      setUpdateSucceed(false);
    }
    else {
        setUpdateSucceed(true)
    }
},[isEmailConflicted, isUpdateSucceed])

  const handleUpdate = (e) => {
      e.preventDefault();
      if (isAllowed){
          onUpdateUser();
          setUpdateSucceed(true);
          
      } else {
          setUpdateSucceed(false);
          
      }
      setAllowed(false);
  }
  useEffect(()=>{
      if ((isEmailChanged || isNameChanged) && isNameValid && isEmailValid) {
          setAllowed(true)
      } else setAllowed(false)
  },[isEmailChanged, isNameChanged , isEmailValid, isNameValid]);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
};

    // Не забыть добавить функционал очищения локального хранилища
  return (
    <>
    {userUpdated ? <InfoTooltipSucces isSucceed={isUpdateSucceed} isOpen={isInfoToolTipOpen} setOpen={setInfoToolTipOpen} isEmailConflicted={isEmailConflicted} userUpdated={true}/> : <InfoTooltipError isSucceed={isUpdateSucceed} isOpen={isInfoToolTipOpen} setOpen={setInfoToolTipOpen} isEmailConflicted={isEmailConflicted} userUpdated={false}/>}
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
        {isMenuOpen ? <BurgerMenu closeMenu={handleBurgerClick} isSavedPage={false}/> : null}
        <section>
            <div className="profile">
                <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                <form className="profile__form">
          <div className="profile__info">
            <div className="profile__item">
              <label className="profile__label">Имя</label>
              <input
                className="profile__input"
                type="text"
                value={currentName}
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
                value={currentEmail}
                onChange={handleEmailChange}
                placeholder='Введите Email'
              />
            </div>
          </div>
          <div className="profile__container">
            <button
              type="button"
              className={`${isAllowed ? 'profile__button profile__button_type_popup' : ' profile__button_disbled'}`}
              onClick={handleUpdate}
              disabled={!isAllowed}
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