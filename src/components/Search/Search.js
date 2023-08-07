import React from 'react';
import './Search.css';

function Search() {
    const [isActive, setActive] = React.useState(false)
    const switchButtonClassName = (
        `search__switch ${isActive && 'search__switch_active'}`
    )

    function switchAction() {
        setActive(!isActive)
    }
    return (
      <form className="search">
        <div className='search__container'>
            <input className='search__input' type='text' placeholder='Фильм'/>
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