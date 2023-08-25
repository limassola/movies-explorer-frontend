import React, {useEffect, useState, useCallback} from 'react';
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
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [currentUserName, setCurrentUserName] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('jwt')) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [localStorage.getItem('jwt')])


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
      });
      mainApi.getSavedMovies(localStorage.getItem('jwt'))
      .then(movies=>setSavedMovies(movies))
      .catch(err=>console.log(err))
    } else {
      setLoggedIn(false)
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
  };

  const onSaveMovie = useCallback ((nameRU, nameEN, country, director, duration, year, description, image, trailerLink, thumbnail, movieId) => {
    if (!savedMovies.some(m => m.nameRU.includes(nameRU))) {
      mainApi
        .saveMovie(nameRU, nameEN, country, director, duration, year, description, image, trailerLink, thumbnail, movieId, localStorage.getItem('jwt'))
        .then(movie => {
          setSavedMovies(prevSavedMovies => [...prevSavedMovies, movie]);
        })
        .catch(err => console.log(err));
    } else {
      const index = savedMovies.findIndex(m => m.nameRU.includes(nameRU));
      if (index !== -1) {
        mainApi
          .deleteMovie(savedMovies[index]._id, localStorage.getItem('jwt'))
          .then(() => {
            setSavedMovies(prevSavedMovies => prevSavedMovies.filter((_, i) => i !== index));
          })
          .catch(err => console.log(err));
      }
    }
  }, [savedMovies]);



  const handleUpdateUser = () => {
    mainApi
      .updateUserInfo(currentUserName, currentUserEmail, localStorage.getItem('jwt'))
      .then((data)=>{
        setCurrentUser(data.user);
        setCurrentUserEmail(data.user.email);
        setCurrentUserName(data.user.name)
      })
      .catch(err => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <div className="App">
      <Routes>
        <Route path='/' element={<Main isLoggedIn={isLoggedIn}/>}/>
        <Route path='/movies' element={<ProtectedRouteElement element={Movies} loggedIn={isLoggedIn} onSaveMovie={onSaveMovie} savedMovies={savedMovies}/>}/>
        <Route path='/saved-movies' element={<ProtectedRouteElement element={SavedMovies} loggedIn={isLoggedIn} onSaveMovie={onSaveMovie} savedMovies={savedMovies}/>}/>
        <Route path='/profile' element={<ProtectedRouteElement element={Profile} loggedIn={isLoggedIn} onSignOut={signOut} currentName={currentUserName} currentEmail={currentUserEmail} currentUser={currentUser} setCurrentUserEmail={setCurrentUserEmail} setCurrentUserName={setCurrentUserName} onUpdateUser={handleUpdateUser}/>}/>
        <Route path='/signup' element={<Register onSubmit={signUp}/>}/>
        <Route path='/signin' element={<Login onSubmit={signIn}/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
