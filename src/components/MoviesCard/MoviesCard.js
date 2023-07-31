import React from "react";
import image from '../../images/movie__image.png'
import './MoviesCard.css';

function MoviesCard() {
    const [isSaved, setIsSaved] = React.useState(false)
    const handleSaveClick = () => {
        setIsSaved(!isSaved)
    } 
    
    return(
        <div className="movies-card">
            <img className="movies-card__image" src={image} alt="обложка фильма"/>
            {isSaved ? (<button onClick={handleSaveClick} className="movies-card__button movies-card__button_checkmark"></button>) : (<button onClick={handleSaveClick} className="movies-card__button movies-card__button-save">Сохранить</button>)}
            <div className="movies-card__heading">
                <h3 className="movies-card__title">Пи Джей Харви: A dog called money</h3>
                <p className="movies-card__time">1ч 17м</p>
            </div>
        </div>
    )
}

export default MoviesCard;