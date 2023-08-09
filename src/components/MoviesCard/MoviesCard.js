import React from "react";
import image from '../../images/movie__image.png'
import './MoviesCard.css';

function MoviesCard({title, isSavedPage }) {
    const [isSaved, setIsSaved] = React.useState(false)
    const handleSaveClick = () => {
        setIsSaved(!isSaved)
    } 
    
    return(
        <div className="movies-card">
            <img className="movies-card__image" src={image} alt={title}/>
            {isSavedPage ? (<button type='button' className="movies-card__button movies-card__button_delete"></button>) : (<button type='button' onClick={handleSaveClick} className={`movies-card__button ${isSaved ? "movies-card__button_checkmark" : "movies-card__button_save"}`}>{isSaved ? null : "Сохранить"}</button>)}
            <div className="movies-card__heading">
                <h2 className="movies-card__title">Пи Джей Харви: A dog called money</h2>
                <p className="movies-card__time">1ч 17м</p>
            </div>
        </div>
    )
}

export default MoviesCard;