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
          <div className='footer__links'>
            <a className='footer__link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
            <a className='footer__link' href='https://github.com/limassola'>Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;