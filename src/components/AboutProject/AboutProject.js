import './AboutProject.css';

function AboutProject() {
  return (
    <div className="aboutProject" id='aboutProject'>
      <div className='aboutProject__header'>
        <h2 className='aboutProject__title'>О проекте</h2>
      </div>
      <div className='aboutProject__container'>
        <div className='aboutProject__item'>
          <h3 className='aboutProject__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutProject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='aboutProject__item'>
        <h3 className='aboutProject__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutProject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutProject__progress-bar">
        <div className='aboutProject__backend-part'>
          <p className='aboutProject__backend-time'>1 неделя</p>
          <p className='aboutProject__dev-part'>Back-end</p>
        </div>
        <div className='aboutProject__frontend-part'>
          <p className='aboutProject__frontend-time'>4 недели</p>
          <p className='aboutProject__dev-part'>Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;