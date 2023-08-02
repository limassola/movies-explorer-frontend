import './BurgerMenu.css';

function BurgerMenu({isMenuOpen, closeMenu}) {
  return (
    <div className='burger-menu'>
        <div className='burger-menu__container'>
            <button onClick={closeMenu} className='burger-menu__button-close'></button>
            <ul className='burger-menu__items'>
                <li className='burger-menu__item'>Главная</li>
                <li className='burger-menu__item'>Фильмы</li>
                <li className='burger-menu__item'>Сохранённые фильмы</li>
            </ul>
            <a className='burger-menu__button-account'>Аккаунт</a>
        </div>
    </div>
);
}

export default BurgerMenu;