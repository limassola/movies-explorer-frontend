import React from 'react';
import './Search.css';

function Search({ onSearch, onShortfilmToggle}) {
  const [isActive, setActive] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const switchButtonClassName = (
        `search__switch ${isActive && 'search__switch_active'}`
  )

  const switchAction = () => {
    setActive(!isActive);
    onShortfilmToggle(!isActive); // Передаем обратное значение состояния чекбокса
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery); // Передаем значение из инпута в компонент Movies
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