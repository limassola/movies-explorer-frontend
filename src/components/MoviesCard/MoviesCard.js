import React from "react";
import './MoviesCard.css';
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function MoviesCard({movie, isSavedPage }) {
    const [isSaved, setIsSaved] = React.useState(false);
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;
    const currentUserContext = React.useContext(CurrentUserContext)
    console.log(movie)
     
    const handleSaveClick = () => {
        const movieData = {
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: movie.image.url,
          trailerLink: movie.trailerLink,
          thumbnail: movie.trailerLink,
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        //   owner: currentUserContext._id, // Добавьте текущего пользователя как owner
        };

    
        mainApi.saveMovie(movieData, localStorage.getItem('jwt'))
          .then(savedMovie => {
            console.log(savedMovie)
            setIsSaved(true);
            // Обновите состояние вашего компонента, используя данные сохраненного фильма
            // setMovie(savedMovie);
          })
          .catch(error => {
            console.error('Ошибка при сохранении фильма:', error);
          });
      };
    
    return(
        <div className="movies-card">
            <img className="movies-card__image" src={movie.image.url} alt={movie.nameRU}/>
            {isSavedPage ? (<button type='button' className="movies-card__button movies-card__button_delete"></button>) : (<button type='button' onClick={handleSaveClick} className={`movies-card__button ${isSaved ? "movies-card__button_checkmark" : "movies-card__button_save"}`}>{isSaved ? null : "Сохранить"}</button>)}
            <div className="movies-card__heading">
                <h2 className="movies-card__title">{movie.nameRU}</h2>
                <p className="movies-card__time">{hours}ч {minutes}м</p>
            </div>
        </div>
    )
}

export default MoviesCard;