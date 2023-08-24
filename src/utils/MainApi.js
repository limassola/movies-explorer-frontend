class MainApi {
    constructor(config) {
        this._baseUrl = config.url;
    }

    _handleResponse(res) {
        if(res.ok) {
            return res.json();
 
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    saveMovie(nameRU, nameEN, country, director, duration, year, description, image, trailer, thumbnail, movieId, token ) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`,
            },
            body: JSON.stringify({
                nameRU: nameRU,
                nameEN: nameEN,
                country: country,
                director: director,
                duration: duration,
                year: year,
                description: description,
                image: image,
                trailerLink: trailer,
                thumbnail: thumbnail,
                movieId: movieId
            }),
        })
        .then(this._handleResponse);
    }

    getSavedMovies(token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`,
            },
        })
        .then(this._handleResponse); 
    }

    deleteMovie(movieId, token) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`,
            },
        })
        .then(this._handleResponse);
    }

    getUserInfo(token) {
        return fetch(`${this._baseUrl}/movies/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`,
            },
        })
        .then(this._handleResponse)
    }

    updateUserInfo(userName, userEmail, token) {
        return fetch(`${this._baseUrl}/movies/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: userName,
                email: userEmail
            }),
        })
        .then(this._handleResponse)
    }

    signup(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            }),
        })
        .then(this._handleResponse);
        
    }

    signin({email, password}){
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
        .then(this._handleResponse);
    }
}

const mainApi = new MainApi({
    url: 'https://api.limassola.diploma.nomoredomains.xyz',
})

export default mainApi;