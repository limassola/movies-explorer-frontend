import './Header.css';
import logo from '../../images/logo.svg'

function Header(props) {
  return (
    <div className="header">
      <img src={logo} alt='Логотип' className='header__logo'/>
      {props.children}
    </div>
  );
}

export default Header;