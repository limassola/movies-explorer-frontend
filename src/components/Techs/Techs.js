import './Techs.css';

function Techs() {
  return (
    <div className="techs" id='techs'>
      <div className='techs__container'>
        <div className='techs__header'>
          <h2 className='techs__title'>Технологии</h2>
        </div>
        <h3 className='techs__subtitle'>7 технологий</h3>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__items'>
          <li className='techs__item'>HTML</li>
          <li className='techs__item'>CSS</li>
          <li className='techs__item'>JS</li>
          <li className='techs__item'>React</li>
          <li className='techs__item'>Git</li>
          <li className='techs__item'>Express.js</li>
          <li className='techs__item'>mongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default Techs;