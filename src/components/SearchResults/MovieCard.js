import React from 'react';
import styled from 'styled-components';

const MovieCardStyled = styled.div`
  background-image: url('${(props) => props.poster}');
  width: 250px;
  height: 400px;
  margin: 10px;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  }
`;

const MovieCard = (props) => {
  return (
    <>
      <a
        href={`https://www.imdb.com/title/${props.movieData.imdbID}`}
        rel="noreferrer"
        target="_blank"
      >
        <MovieCardStyled poster={props.movieData.Poster} />
      </a>
    </>
  );
};

export default MovieCard;
