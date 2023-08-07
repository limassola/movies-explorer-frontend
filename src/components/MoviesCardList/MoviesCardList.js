import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({isSavedPage}) {
    return(
        <div className={`movies-card-list ${isSavedPage ? "movies-card-list_type_save" : ''}`}>
            <ul className={`movies-card-list__container ${isSavedPage && "movies-card-list__container_type_save"}`}>
                <li className="movies-card-list__item"><MoviesCard isSavedPage={isSavedPage}/></li>
                <li className="movies-card-list__item"><MoviesCard isSavedPage={isSavedPage}/></li>

            </ul>
            {isSavedPage ? null : <button className="movies-card-list__button">Ещё</button>}
        </div>
    )
}

export default MoviesCardList;