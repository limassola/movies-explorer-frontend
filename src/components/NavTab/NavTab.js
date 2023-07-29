import './NavTab.css';

function NavTab() {
  return (
    <div className="navTab">
      <a className='navTab__item' href="#aboutProject">О проекте</a>
      <a className='navTab__item' href="#techs">Технологии</a>
      <a className='navTab__item' href="#aboutMe">Студент</a>
    </div>
  );
}

export default NavTab;