import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";
import './Movies.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Movies() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
      <div className="Movies">
        <Header>
          <div className='header__items'>
            <a className='header__item header__item_active'>Фильмы</a>
            <a className='header__item'>Сохранённые фильмы</a>
          </div>
          <a className="header__button header__button_type_account">Аккаунт</a>
          <button onClick={handleBurgerClick} className="header__button header__button_type_burger"></button>
        </Header>
        {isMenuOpen ? <BurgerMenu closeMenu={handleBurgerClick} isMoviesPage={true}/> : null}
        <Search/>
        <MoviesCardList/>
        <Footer/>
      </div>
    );
  }
  
  export default Movies;