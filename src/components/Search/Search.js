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
      <div className="search">
        <div className='search__container'>
            <input className='search__input' type='text' placeholder='Фильм'/>
            <button className='search__button'/>
        </div>
        <div className='search__filter'>
            <button className={switchButtonClassName} onClick={switchAction}></button>
            <p className='search__text'>Короткометражки</p>
        </div>
      </div>
    );
  }
  
  export default Search;