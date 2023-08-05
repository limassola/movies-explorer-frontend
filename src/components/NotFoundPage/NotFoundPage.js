import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className='not-found-page'>
        <h1 className='not-found-page__title'>404</h1>
        <p className='not-found-page__text'>Страница не найдена</p>
        <a className='not-found-page__link'>Назад</a>
    </div>
);
}

export default NotFoundPage;