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

function SavedMovies({onSaveMovie, savedMovies}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [isCheckboxActive, setCheckbox] = useState(false);
    
  
  useEffect(() => {
        setFoundSavedMovies(savedMovies)
  },[])
    
  useEffect(()=> {
        if(isCheckboxActive) {
            setFilteredSavedMovies(foundSavedMovies.filter(movie=>movie.duration<40))
        } else {
            setFilteredSavedMovies(foundSavedMovies)
        }
  },[isCheckboxActive, foundSavedMovies])
    
  const onSearch = (str) => {
    setFoundSavedMovies(savedMovies.filter((movie)=>movie.nameRU.toLowerCase().includes(str.toLowerCase())))
      if (str==='') {
       setFoundSavedMovies(savedMovies)
    }
  }

    const onCheckboxClick = () => {
        setCheckbox(!isCheckboxActive);
    }
 

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect(() => {
  //   mainApi.getSavedMovies(localStorage.getItem('jwt'))
  //   .then((data) => {
  //     setSavedMovies(data);
  //   })
  // }, []);
  

  // const handleSearch = (searchQuery) => { 
  //   setSearchQuery(searchQuery);
  // };

  
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
            <Search isSavedPage={true} setShortFilmChecked={onCheckboxClick} handleSearch={onSearch}/>
          </section>
          <section>
            <MoviesCardList onSaveMovie={onSaveMovie}  savedMovies={savedMovies} isSavedPage={true} movies={filteredSavedMovies}/>
          </section>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
  
  export default SavedMovies;