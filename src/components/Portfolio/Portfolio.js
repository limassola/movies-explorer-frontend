import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__items'>
          <li className='portfolio__item'><a className='portfolio__link' href='https://github.com/limassola/how-to-learn'>Статичный сайт</a><p className='portfolio__string'>↗</p></li>
          <li className='portfolio__item'><a className='portfolio__link' href='https://github.com/limassola/russian-travel'>Адаптивный сайт</a><p className='portfolio__string'>↗</p></li>
          <li className='portfolio__item'><a className='portfolio__link' href='https://github.com/limassola/react-mesto-api-full-gha'>Одностраничное приложение</a><p className='portfolio__string'>↗</p></li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;