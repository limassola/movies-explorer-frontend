class MainApi {
    constructor(config) {
        this._baseUrl = config.url;
        this._headers = config.headers;
    }

    _handleResponse(res) {
        if(res.ok) {
            return res.json();
 
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    saveMovie(movieData) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(movieData),
        })
        .then(this._handleResponse);
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: this._headers,
        })
        .then(this._handleResponse); 
    }

    deleteMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._handleResponse);
    }

    getUserInfo() {
        return fetch(`${this._url}/movies/me`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
              },
        })
        .then(this._handleResponse)
    }

    signup(userData) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            // credentials: 'include',
            // mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(this._handleResponse);
        
    }
}

const mainApi = new MainApi({
    url: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default mainApi;