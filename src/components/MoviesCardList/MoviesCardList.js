import React, {useEffect, useState} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({isSavedPage, movies, savedMovies, handleDeleteMovie, onSaveMovie, isSaved}) {
    
    const [visibleCards, setVisibleCards] = useState(isSavedPage ? 3 : 12);
    let visibleMovies;

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
        let timeoutId;
    
        const handleResizeWithTimeout = () => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(handleResize, 200); // Устанавливаем таймаут в 200 миллисекунд
        };
    
        handleResizeWithTimeout();
        window.addEventListener("resize", handleResizeWithTimeout);
        return () => {
          window.removeEventListener("resize", handleResizeWithTimeout);
        };
    }, []);


    if (isSavedPage) {
      visibleMovies = savedMovies;
    } else {
      visibleMovies = movies.slice(0, visibleCards);
    }   


    const handleShowMoreClick = () => {
        if (window.innerWidth >= 320 && window.innerWidth < 1280) {
          setVisibleCards(visibleCards + 2);
        } else if (window.innerWidth >= 1280) {
            setVisibleCards(visibleCards + 3);
        }
      };
    return(
        <div className={`movies-card-list ${isSavedPage ? "movies-card-list_type_save" : ''}`}>
            <ul className={`movies-card-list__container ${isSavedPage && "movies-card-list__container_type_save"}`}>
                {visibleMovies.map((movie, index) => (
                    <li key={index} className="movies-card-list__item" movie={movie}><MoviesCard onSaveMovie={onSaveMovie} handleDeleteMovie={handleDeleteMovie} movie={movie} isSavedPage={isSavedPage} savedMovies={savedMovies} isSaved={isSaved}/></li>
                ))}
            </ul>
            {isSavedPage ? null : visibleMovies.length < movies.length && (
        <button type="button" className="movies-card-list__button" onClick={handleShowMoreClick}>
          Ещё
        </button>
      )}
        </div>
    )
}

export default MoviesCardList;