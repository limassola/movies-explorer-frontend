export const filterMovies = (movies, query, shortFilmsOnly) => {
    return movies.filter((movie) => {
        const lowerCaseQuery = query.toLowerCase();
        const isMatch = movie.nameRU.toLowerCase().includes(lowerCaseQuery) || movie.nameEN.toLowerCase().includes(lowerCaseQuery);
        
        if (shortFilmsOnly) {
            return isMatch && movie.duration <= 40;
        }
        
        return isMatch;
    });
};