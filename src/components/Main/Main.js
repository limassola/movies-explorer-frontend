import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';


function Main() {
  return (
    <div className="Main">
      <Header>
      <div className='header__container'>
        <a className='header__link'>Регистрация</a>
        <a className='header__button'>Войти</a>
      </div>
      </Header>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default Main;