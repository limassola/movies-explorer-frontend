import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";
import './SavedMovies.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function SavedMovies() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
      <div className="SavedMovies">
        <Header>
          <div className='header__items'>
            <a className='header__item'>Фильмы</a>
            <a className='header__item header__item_active'>Сохранённые фильмы</a>
          </div>
          <a className="header__button header__button_type_account">Аккаунт</a>
          <button onClick={handleBurgerClick} className="header__button header__button_type_burger"></button>
        </Header>
        {isMenuOpen ? <BurgerMenu closeMenu={handleBurgerClick}/> : null}
        <Search/>
        <MoviesCardList isSavedPage={true}/>
        <Footer/>
      </div>
    );
  }
  
  export default SavedMovies;