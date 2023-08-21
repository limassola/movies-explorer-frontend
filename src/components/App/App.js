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
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [currentUserName, setCurrentUserName] = useState('');
  const navigate = useNavigate();

  console.log(currentUserEmail)
  console.log(currentUserName)

  useEffect(() => {
    if(localStorage.getItem('jwt')) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [localStorage.getItem('jwt')])

console.log(localStorage.getItem('jwt'))

  useEffect(() => {
    if(localStorage.getItem('jwt')) {
        mainApi.getUserInfo(localStorage.getItem('jwt'))
        .then((data) => {
        setCurrentUser(data);
        setCurrentUserEmail(data.email);
        setCurrentUserName(data.name)
        setLoggedIn(true);
      })
        .catch((err) => {
        console.log(err)
      })
    }
    
  }, [isLoggedIn]);

  const signUp = (name, email, password) => {
    mainApi.signup(name, email, password)
    .then(() => {
      signIn({email, password})
    })
    .then(() => {
      navigate('/movies', {replace:true})
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const signIn = ({email, password}) => {
    mainApi.signin({email, password})
    .then((data) => {
      localStorage.removeItem("jwt");
      localStorage.setItem("jwt", data.token);
      setLoggedIn(true);
      setCurrentUserEmail(email);
    })
    .then(() => {
      navigate('/movies', {replace:true})
    })
    .catch(err=>console.log(err));    
  }

  const signOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movieShortFilms');
    localStorage.removeItem('movieSearchQuery');
    localStorage.removeItem('movieResults');
    setLoggedIn(false);
    navigate('/', {replace: true});
  }

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <div className="App">
      <Routes>
        <Route path='/' element={<Main isLoggedIn={isLoggedIn}/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/saved-movies' element={<SavedMovies/>}/>
        <Route path='/profile' element={<Profile onSignOut={signOut} currentName={currentUserName} currentEmail={currentUserEmail}/>}/>
        <Route path='/signup' element={<Register onSubmit={signUp}/>}/>
        <Route path='/signin' element={<Login onSubmit={signIn}/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
