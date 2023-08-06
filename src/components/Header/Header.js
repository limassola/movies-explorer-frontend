import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg'

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt='Логотип' className='header__logo'/>  
      </Link>
      {props.children}
    </div>
  );
}

export default Header;