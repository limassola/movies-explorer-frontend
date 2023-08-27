import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";
import './Movies.css';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import moviesApi from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/MovieUtils';
import Preloader from '../Preloader/Preloader';

function Movies({onSaveMovie, savedMovies, isSaved}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const storedQuery = localStorage.getItem('movieSearchQuery');
  const storedShortFilms = JSON.parse(localStorage.getItem('movieShortFilms'));
  const storedResults = JSON.parse(localStorage.getItem('movieResults'));
  const initialShortFilmState = storedShortFilms !== null ? storedShortFilms : false;
  const [shortFilmsOnly, setShortFilmsOnly] = useState(initialShortFilmState);


  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setIsFormSubmitted(true);
    localStorage.setItem('movieSearchQuery', searchQuery);
    localStorage.setItem('movieShortFilms', JSON.stringify(shortFilmsOnly));
  };

  const handleShortFilmsToggle = () => {
    setShortFilmsOnly(!shortFilmsOnly);
  }

  useEffect(() => {
    localStorage.setItem('movieShortFilms', JSON.stringify(shortFilmsOnly));
  }, [shortFilmsOnly])

  useEffect(() => {
    
    if (storedQuery && storedShortFilms !== null) {
      setQuery(storedQuery);
      setShortFilmsOnly(storedShortFilms);
    }

    if (storedResults) {
      setMovies(storedResults);
    }
  }, [])

  useEffect(() => {
    if(isFormSubmitted) {
      setIsLoading(true)
      setIsError(false)
      moviesApi.getMovies()
        .then((data) => {
          const absoluteMovies = data.map(movie => ({
            ...movie,
            image: {
              ...movie.image,
              url: 'https://api.nomoreparties.co/' + movie.image.url
            }
          }));
          setMovies(absoluteMovies);
          localStorage.setItem('movieResults', JSON.stringify(absoluteMovies))
        })
        .catch((err) => {
          console.error('Ошибка при получении данных:', err);
          setIsError(true)
        })
        .finally(() => {
          setIsLoading(false);
      });
    }
  }, [isFormSubmitted]);

  // useEffect(() => {
  //   function updateVisibleCards() {}
  // }, []);

  const filteredMovies = filterMovies(movies, query, shortFilmsOnly);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
      <div className="movies">
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
          {isMenuOpen ? <BurgerMenu closeMenu={handleBurgerClick} isMoviesPage={true}/> : null}
          <section>
            <Search onSearch={handleSearch} onShortfilmToggle={handleShortFilmsToggle} query={storedQuery} shortFilmsOnly={storedShortFilms}/>
          </section>
          <section>
          {isLoading ? (
                <Preloader/>
              ) : isError ? (
                <p className="movies__error">Во время запроса произошла ошибка. Подождите немного и попробуйте ещё раз.</p>
              ) : filteredMovies.length === 0 ? (
                <p className="movies__not-found">Ничего не найдено</p>
              ) : (
                <MoviesCardList movies={filteredMovies} isSavedPage={false} onSaveMovie={onSaveMovie} savedMovies={savedMovies} isSaved={isSaved}/>
)}
          </section>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default Movies;