import React from 'react';
import { Link } from 'react-router-dom';
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
        <header>
          <Header>
            <nav className='header__nav'>
              <ul className='header__items'>
                <li className='header__list-item'><Link to="/movies" className='header__item'>Фильмы</Link></li>
                <li className='header__list-item'><Link to="/saved-movies" className='header__item header__item_active'>Сохранённые фильмы</Link></li>
              </ul>
            </nav>
            <Link to="/profile" className="header__button header__button_type_account">Аккаунт</Link>
            <button onClick={handleBurgerClick} className="header__button header__button_type_burger"></button>
          </Header>
        </header>
        <main>
          <section>
            {isMenuOpen ? <BurgerMenu closeMenu={handleBurgerClick} isSavedPage={true}/> : null}
          </section>
          <section>
            <Search/>
          </section>
          <section>
            <MoviesCardList isSavedPage={true}/>
          </section>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default SavedMovies;