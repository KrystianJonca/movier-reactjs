import React from 'react';
import MovieCard from './MovieCard';
import useFetch from '../../hooks/useFetch';
import classes from './SearchResults.module.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

const SearchResults = (props) => {
  const { movieName } = props;
  const {
    data: movies,
    isLoading,
    error,
  } = useFetch(`${API}&s=${encodeURIComponent(movieName)}`);

  return (
    <div className={classes.searchresults}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies &&
        movies.map((movie) => {
          if (movie.Poster !== 'N/A') {
            return (
              <div key={Math.random()}>
                <MovieCard movieData={movie} />
              </div>
            );
          }
          return '';
        })}
    </div>
  );
};

export default SearchResults;
