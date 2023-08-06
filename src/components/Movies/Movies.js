import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/movies" className='header__item header__item_active'>Фильмы</Link>
            <Link to="/saved-movies" className='header__item'>Сохранённые фильмы</Link>
          </div>
          <Link to="/profile" className="header__button header__button_type_account">Аккаунт</Link>
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