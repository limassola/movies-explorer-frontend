import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList() {
    return(
        <div className="movies-card-list">
            <div className="movies-card-list__container">
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </div>
            <button className="movies-card-list__button">Ещё</button>
        </div>
    )
}

export default MoviesCardList;