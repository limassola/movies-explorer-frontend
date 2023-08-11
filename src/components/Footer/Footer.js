import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className='footer__container'>
        <div className='footer__header'>
          <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        </div>
        <div className='footer__main'>
          <p className='footer__copyright'>© 2023</p>
          <ul className='footer__links'>
            <li className='footer__item'><a className='footer__link' target="_blank" rel="noreferrer" href='https://practicum.yandex.ru/'>Яндекс.Практикум</a></li>
            <li className='footer__item'><a className='footer__link' target="_blank" rel="noreferrer" href='https://github.com/limassola'>Github</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;