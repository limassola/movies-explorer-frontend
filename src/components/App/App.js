import React, {useEffect, useState} from 'react';
import { Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    mainApi.getUserInfo()
    .then((data) => {
      setCurrentUser(data)
    })
    .catch((err) => {
      console.log(err)
  })
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/saved-movies' element={<SavedMovies/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
