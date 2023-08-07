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
            {isMenuOpen ? <BurgerMenu closeMenu={handleBurgerClick} isMoviesPage={true}/> : null}
          </section>
          <section>
            <Search/>
          </section>
          <section>
            <MoviesCardList isSavedPage={false}/>
          </section>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default Movies;