import React from "react";
import './MoviesCard.css';
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function MoviesCard({movie, isSavedPage, handleDeleteMovie }) {
    const [isSaved, setIsSaved] = React.useState(false);
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;

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

      const onCardClick = (e) => {
        if (!e.target.classList.contains(`movies-card__button`)) {
            window.open(`${movie.trailerLink}`, '_blank')
        }
    }

      const handleDeleteClick = () => {
        const movieId = movie._id;
        handleDeleteMovie(movieId)
      }

      const deleteSavedMovie = () => {
        const movieId = movie.id;
        mainApi.deleteMovie(movieId, localStorage.getItem('jwt'))
        .then(() => {
          setIsSaved(false);
        })
        .catch(error => {
          console.error('Ошибка при сохранении фильма:', error);
        });
      }
    
    return(
        <div className="movies-card" onClick={onCardClick}>
            <img className="movies-card__image" src={isSavedPage ? movie.image : movie.image.url} alt={movie.nameRU}/>
            {isSavedPage ? (<button onClick={handleDeleteClick} type='button' className="movies-card__button movies-card__button_delete"></button>) : (<button type='button' onClick={isSaved ? deleteSavedMovie : handleSaveClick} className={`movies-card__button ${isSaved ? "movies-card__button_checkmark" : "movies-card__button_save"}`}>{isSaved ? null : "Сохранить"}</button>)}
            <div className="movies-card__heading">
                <h2 className="movies-card__title">{movie.nameRU}</h2>
                <p className="movies-card__time">{hours}ч {minutes}м</p>
            </div>
        </div>
    )
}

export default MoviesCard;