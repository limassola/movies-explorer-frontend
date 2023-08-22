import React from 'react';
import './Search.css';

function Search({ onSearch, onShortfilmToggle, query, shortFilmsOnly, handleSearch, setShortFilmChecked, isSavedPage}) {
  const [isActive, setActive] = React.useState(isSavedPage ? false : shortFilmsOnly);
  const [searchQuery, setSearchQuery] = React.useState(isSavedPage ? '' : query);
  const switchButtonClassName = (
        `search__switch ${isActive && 'search__switch_active'}`
  )

  const switchAction = () => {
    setActive(!isActive);
    if(isSavedPage) {
      setShortFilmChecked(!isActive) // Передаем обратное значение состояния чекбокса в SavedMovies
    } else {
      onShortfilmToggle(!isActive); // Передаем обратное значение состояния чекбокса в Movies
    }
  } 
    
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isSavedPage) {
      handleSearch(searchQuery); // Передаем значение из инпута в компонент в SavedMovies
    } else {
      onSearch(searchQuery); // Передаем значение из инпута в компонент Movies
    }
  };

  return (
      <form className="search" onSubmit={handleSubmit}>
        <div className='search__container'>
            <input 
            className='search__input' 
            type='text' 
            placeholder='Фильм' 
            required
            value={searchQuery}
            onChange={handleInputChange}
            />
            <button type='submit' className='search__button'/>
        </div>
        <div className='search__filter'>
            <button type='button' className={switchButtonClassName} onClick={switchAction}></button>
            <p className='search__text'>Короткометражки</p>
        </div>
      </form>
    );
  }
  
  export default Search;