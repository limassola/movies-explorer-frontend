import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";
import './Movies.css';

function Movies() {
    return (
      <div className="Movies">
        <Header>
        <div className='header__items'>
          <a className='header__item header__item_active'>Фильмы</a>
          <a className='header__item'>Сохранённые фильмы</a>
        </div>
        <a className="header__button header__button_type_account">Аккаунт</a>
        </Header>
        <Search/>
        <MoviesCardList/>
        <Footer/>
      </div>
    );
  }
  
  export default Movies;