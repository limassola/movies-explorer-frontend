import React, {useCallback, useEffect, useState, useContext} from "react";
import './MoviesCard.css';
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function MoviesCard({movie, isSavedPage, handleDeleteMovie, onSaveMovie, savedMovies, isSaved }) {
  const [isSavedMovies, setIsSavedMovies] = useState([]);
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  useEffect(() => {
    if(movie.nameRU && savedMovies) {
      setIsSavedMovies(savedMovies.some(m => m.nameRU.includes(movie.nameRU)));
    }
  }, [savedMovies]);

  const handleSaveClick = (e) => {
    if (e.target.classList.contains('movies-card__button')) {
      onSaveMovie(movie.nameRU, movie.nameEN, movie.country, movie.director, movie.duration, movie.year, movie.description, isSavedPage ? movie.image : movie.image.url, movie.trailerLink, isSavedPage ? movie.image : movie.image.url, movie.id, isSavedPage ? movie._id : null);
      setIsSavedMovies(prevIsSaved => !prevIsSaved);
    }
  }

  const onCardClick = (e) => {
    if (!e.target.classList.contains('movies-card__button')) {
      window.open(movie.trailerLink, '_blank');
    }
  }
    
    return(
        <div className="movies-card" onClick={onCardClick}>
            <img className="movies-card__image" src={isSavedPage ? movie.image : movie.image.url} alt={movie.nameRU}/>
            {isSavedPage ? (<button onClick={handleSaveClick} type='button' className="movies-card__button movies-card__button_delete"></button>) : (<button type='button' onClick={handleSaveClick} className={`movies-card__button ${isSavedMovies || isSaved ? "movies-card__button_checkmark" : "movies-card__button_save"}`}>{isSavedMovies ? null : "Сохранить"}</button>)}
            <div className="movies-card__heading">
                <h2 className="movies-card__title">{movie.nameRU}</h2>
                <p className="movies-card__time">{hours}ч {minutes}м</p>
            </div>
        </div>
    )
}

export default MoviesCard;