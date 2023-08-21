import React, { useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import Header from "../Header/Header";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';


function Profile({ onSignOut, currentName, currentEmail }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentUserContext = useContext(CurrentUserContext);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [name, setName] = useState(currentName);
    const [email, setEmail] = useState(currentEmail);
    const [hasChanges, setHasChanges] = useState(false);


    const checkForChanges = (newName, newEmail) => {
      if((newName !== name || newEmail !== email) && !nameError && !emailError) {
        setHasChanges(true);
      } else {
        setHasChanges(false);
      }
    };

    const handleBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    
    const handleNameChange = (e) => {
      const newName = e.target.value;
      setName(newName);
      if(!newName) {
        setNameError('Введите имя');
      } else {
        setNameError('');
      }
      checkForChanges(newName, email);
    };

    const handleEmailChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      if (!newEmail) {
        setEmailError('Введите почту');
      } else if (!/\S+@\S+\.\S+/.test(newEmail)) {
        setEmailError('Некорректный формат почты');
      } else {
        setEmailError('');
      }
      checkForChanges(name, newEmail);
    };

    const handleEditClick = () => {
      if(hasChanges && !nameError && !emailError) {
        const updatedUserData = {
          name,
          email,
        };

        console.log(updatedUserData);
        mainApi.updateUserInfo(updatedUserData)
        .then((updatedInfo) => {
          console.log(updatedInfo)
          currentUserContext.setCurrentUser(updatedInfo);
          setEmailError('');
          setNameError('');
          setHasChanges(false);
        })
        .catch(err => console.log('Ошибка при обновлении данных:', err));
      }
    };

    // Не забыть добавить функционал очищения локального хранилища
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
        {isMenuOpen ? <BurgerMenu closeMenu={handleBurgerClick} isSavedPage={false}/> : null}
        <section>
            <div className="profile">
                <h1 className="profile__title">Привет, {currentName}!</h1>
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
              className={`${hasChanges ? 'profile__button profile__button_type_popup' : ' profile__button_disbled'}`}
              onClick={handleEditClick}
              disabled={!hasChanges}
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