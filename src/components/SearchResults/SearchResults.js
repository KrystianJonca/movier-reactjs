import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import classes from './SearchResults.module.css';

const API_KEY = '6bab6ee3';
const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;

const SearchResults = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { movieName } = props;

  useEffect(() => {
    const fetchData = async () => {
      setMovies([]);
      setIsLoading(true);
      setError('');
      const response = await fetch(
        `${API}&s=${encodeURIComponent(movieName)}&plot=full`
      );
      const data = await response.json();
      console.log(data);
      setMovies(data.Search);
      if (data.Error) setError(`Sorry something is wrong: ${data.Error}`);
      setIsLoading(false);
    };
    fetchData();
  }, [movieName]);

  return (
    <div className={classes.searchresults}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies &&
        movies.map((movie) => {
          if (movie.Poster !== 'N/A') {
            return (
              <>
                <MovieCard key={Math.random()} movieData={movie} />
              </>
            );
          }
          return '';
        })}
    </div>
  );
};

export default SearchResults;
