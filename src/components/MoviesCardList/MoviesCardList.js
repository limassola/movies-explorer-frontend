import React, {useEffect, useState} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({isSavedPage}) {
    const movies = [
        <MoviesCard isSavedPage={isSavedPage}/>,
        <MoviesCard isSavedPage={isSavedPage}/>,
        <MoviesCard isSavedPage={isSavedPage}/>,
        <MoviesCard isSavedPage={isSavedPage}/>,
        <MoviesCard isSavedPage={isSavedPage}/>,
        <MoviesCard isSavedPage={isSavedPage}/>,
        <MoviesCard isSavedPage={isSavedPage}/>,
        <MoviesCard isSavedPage={isSavedPage}/>,
        <MoviesCard isSavedPage={isSavedPage}/>,
        <MoviesCard isSavedPage={isSavedPage}/>,
        <MoviesCard isSavedPage={isSavedPage}/>,
        <MoviesCard isSavedPage={isSavedPage}/>,
    ];

    const [visibleCards, setVisibleCards] = useState(isSavedPage ? 3 : 12);

    const handleResize = () => {
        if(window.innerWidth >= 1280) {
            setVisibleCards(isSavedPage ? 3 : 12);
        } else if (window.innerWidth >= 768) {
            setVisibleCards(isSavedPage ? 3 : 8);
        } else if (window.innerWidth >= 320) {
            setVisibleCards(isSavedPage ? 2 : 5);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const visibleMovies = movies.slice(0, visibleCards)
    return(
        <div className={`movies-card-list ${isSavedPage ? "movies-card-list_type_save" : ''}`}>
            <ul className={`movies-card-list__container ${isSavedPage && "movies-card-list__container_type_save"}`}>
                {visibleMovies.map((movie, index) => (
                    <li key={index} className="movies-card-list__item">{movie}</li>
                ))}
            </ul>
            {isSavedPage ? null : <button type='button' className="movies-card-list__button">Ещё</button>}
        </div>
    )
}

export default MoviesCardList;