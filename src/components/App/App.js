import React from 'react';
import { Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
