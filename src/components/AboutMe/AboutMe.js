import './AboutMe.css';

function AboutMe() {
  return (
    <div className="aboutMe" id='aboutMe'>
      <div className='aboutMe__container'>
        <div className='aboutMe__header'>
          <h2 className='aboutMe__title'>Студент</h2>
        </div>
        <div className='aboutMe__main'>
          <div className='aboutMe__profile'>
            <h2 className='aboutMe__name'>Богдан</h2>
            <p className='aboutMe__subtitle'>Фронтенд-разработчик, 22 года</p>
            <p className='aboutMe__about'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className='aboutME__link' href='https://github.com/limassola'>Github</a>
          </div>
          <div className='aboutMe__image'></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;