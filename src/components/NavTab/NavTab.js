import './NavTab.css';

function NavTab() {
  return (
    <nav className="navTab">
      <ul className='navTab__items'>
        <a className='navTab__item' href="#aboutProject">О проекте</a>
        <a className='navTab__item' href="#techs">Технологии</a>
        <a className='navTab__item' href="#aboutMe">Студент</a>
      </ul>
    </nav>
  );
}

export default NavTab;