import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__items'>
          <li className='portfolio__item'><a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/limassola/how-to-learn'>Статичный сайт<p className='portfolio__string'>↗</p></a></li>
          <li className='portfolio__item'><a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/limassola/russian-travel'>Адаптивный сайт<p className='portfolio__string'>↗</p></a></li>
          <li className='portfolio__item'><a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/limassola/react-mesto-api-full-gha'>Одностраничное приложение<p className='portfolio__string'>↗</p></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;