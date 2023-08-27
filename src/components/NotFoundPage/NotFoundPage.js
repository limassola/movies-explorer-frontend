import React from 'react';
import { useNavigate} from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();
    const onReturnClick = () => {
        navigate(-1);
    }
  return (
    <main>
      <section>
        <div className='not-found-page'>
          <h1 className='not-found-page__title'>404</h1>
          <p className='not-found-page__text'>Страница не найдена</p>
          <p className='not-found-page__link' onClick={onReturnClick}>Назад</p>
        </div>
      </section>
    </main>
);
}

export default NotFoundPage;