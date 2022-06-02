import React, { useEffect, useState } from 'react';
import Movie from '../../components/Movie';
import Select from '../../components/Select';
import { usePopular } from '../../services';
import { getLocalMovies } from '../../services/localStorage';
import StyledMovieList from './StyledMovieList';

function MovieList() {
  const [currentList, setCurrentList] = useState('Populares');
  const [movies, setMovies] = useState([]);
  const [localMovies, setLocalMovies] = useState([]);

  useEffect(() => {
    (async function getPopular() {
      const getMovies = await usePopular();
      setMovies(getMovies);
    }());
    const newLocal = getLocalMovies();
    setLocalMovies(newLocal || []);
  }, [currentList]);

  const listOptions = ['Populares', 'Mis peliculas'];
  function handleChange(value) {
    setCurrentList(value);
  }

  return (
    <StyledMovieList>
      <Select
        handleChange={(v) => handleChange(v)}
        selected={currentList}
        options={listOptions}
      />
      {currentList === 'Populares'
        ? movies?.map((movie) => <Movie variant="card" movie={movie} key={movie.title} />)
        : localMovies?.map((movie) => (
          <Movie variant="card" movie={movie} key={movie.title} />
        ))}
    </StyledMovieList>
  );
}

export default MovieList;
