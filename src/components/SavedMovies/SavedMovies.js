import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";
import './SavedMovies.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import mainApi from '../../utils/MainApi';
import { filterMovies } from '../../utils/MovieUtils';

function SavedMovies() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [shortFilmChecked, setShortFilmChecked] = useState(false);
 

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    mainApi.getSavedMovies(localStorage.getItem('jwt'))
    .then((data) => {
      setSavedMovies(data);
    })
  }, []);
  
  console.log(savedMovies)
 

  const handleSearch = (searchQuery) => { 
    setSearchQuery(searchQuery);
  };


  const handleDeleteMovie = (movieId) => {
    console.log(movieId)
    mainApi.deleteMovie(movieId, localStorage.getItem('jwt'))
      .then(() => {
        setSavedMovies(savedMovies.filter((movie) => movie._id !== movieId));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const filteredMovies = filterMovies(savedMovies, searchQuery, shortFilmChecked)

  return (
      <div className="saved-movies">
        <header>
          <Header>
            <nav className='header__nav'>
              <ul className='header__items'>
                <li className='header__list-item'><Link to="/movies" className='header__item'>Фильмы</Link></li>
                <li className='header__list-item'><Link to="/saved-movies" className='header__item header__item_active'>Сохранённые фильмы</Link></li>
              </ul>
            </nav>
            <Link to="/profile" className="header__button header__button_type_account">Аккаунт</Link>
            <button type='button' onClick={handleBurgerClick} className="header__button header__button_type_burger"></button>
          </Header>
        </header>
        <main>
          <section>
            {isMenuOpen ? <BurgerMenu closeMenu={handleBurgerClick} isSavedPage={true}/> : null}
          </section>
          <section>
            <Search isSavedPage={true} setShortFilmChecked={setShortFilmChecked} handleSearch={handleSearch}/>
          </section>
          <section>
            <MoviesCardList handleDeleteMovie={handleDeleteMovie} savedMovies={filteredMovies} isSavedPage={true}/>
          </section>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default SavedMovies;