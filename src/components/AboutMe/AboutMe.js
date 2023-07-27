import './AboutMe.css';

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className='aboutMe__container'>
        <div className='aboutMe__header'>
          <h2 className='aboutMe__title'>Студент</h2>
        </div>
        <div className='aboutMe__main'>
          <div className='aboutMe__profile'>
            <h2 className='aboutMe__name'>Богдан</h2>
            <p className='aboutMe__title'>Фронтенд-разработчик, 22 года</p>
            <p className='aboutMe__about'>Я стремлюсь создавать интерактивные и пользовательские интерфейсы, которые не только эстетически привлекательны, но и отличаются высокой функциональностью.
               Я всегда увлечен возможностями, которые предоставляет верстка, и стремлюсь создавать уникальные и инновационные веб-проекты. Мне нравится видеть результаты своей работы и наблюдать, как пользователи взаимодействуют с моими разработками. Мое стремление к постоянному росту и исследованию новых технологий позволяет мне быть в курсе последних трендов в веб-разработке и предлагать передовые решения для достижения бизнес-целей.</p>
            <a className='aboutME__link' href='https://github.com/limassola'>Github</a>
          </div>
          <div className='aboutMe__image'></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;