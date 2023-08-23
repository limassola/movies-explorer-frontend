import React, {useCallback, useEffect, useState, useContext} from "react";
import './MoviesCard.css';
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function MoviesCard({movie, isSavedPage, handleDeleteMovie, onSaveMovie, savedMovies }) {
    const [isSaved, setIsSaved] = React.useState(false);
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;

    const currentUser = useContext(CurrentUserContext);
    const [isMovieSaved, setIsMovieSaved] = useState(false);

    useEffect(() => {
      setIsSaved(savedMovies.some(movie => movie.nameRU.includes(movie.nameRU)))
    }, [])

  // // Проверяем, сохранен ли фильм у текущего пользователя
  // React.useEffect(() => {
  //   if (isSavedPage) {
  //     setIsMovieSaved(true);
  //   } else {
  //     setIsMovieSaved(currentUser.savedMovies.some(savedMovie => savedMovie.movieId === movie.movieId));
  //   }
  // }, [currentUser.savedMovies, isSavedPage, movie.movieId]);
  console.log(movie)
  const handleSaveClick = (e) => {
    console.log(movie)
    if (e.target.classList.contains(`movies-card__button`)) {
      onSaveMovie(movie.nameRU, movie.nameEN, movie.country, movie.director, movie.duration, movie.year, movie.description,isSavedPage ? movie.image : movie.image.url, movie.trailerLink, isSavedPage ? movie.image : movie.image.url, movie.id, isSavedPage ? movie._id : null);
      setIsSaved(!isSaved)
    }
}

      const onCardClick = (e) => {
        if (!e.target.classList.contains(`movies-card__button`)) {
            window.open(`${movie.trailerLink}`, '_blank')
        }
    }

      // const handleDeleteClick = () => {
      //   const movieId = movie._id;
      //   handleDeleteMovie(movieId)
      // }

      // const deleteSavedMovie = () => {
      //   const movieId = movie.id;
      //   mainApi.deleteMovie(movieId, localStorage.getItem('jwt'))
      //   .then(() => {
      //     setIsSaved(false);
      //   })
      //   .catch(error => {
      //     console.error('Ошибка при сохранении фильма:', error);
      //   });
      // }
    
    return(
        <div className="movies-card" onClick={onCardClick}>
            <img className="movies-card__image" src={isSavedPage ? movie.image : movie.image.url} alt={movie.nameRU}/>
            {isSavedPage ? (<button onClick={handleSaveClick} type='button' className="movies-card__button movies-card__button_delete"></button>) : (<button type='button' onClick={handleSaveClick} className={`movies-card__button ${isSaved ? "movies-card__button_checkmark" : "movies-card__button_save"}`}>{isSaved ? null : "Сохранить"}</button>)}
            <div className="movies-card__heading">
                <h2 className="movies-card__title">{movie.nameRU}</h2>
                <p className="movies-card__time">{hours}ч {minutes}м</p>
            </div>
        </div>
    )
}

export default MoviesCard;