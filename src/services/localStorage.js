function addLocalMovie(movie) {
  const local = JSON.parse(localStorage.getItem('localMovies'));
  return localStorage.setItem('localMovies', JSON.stringify([...local, movie]));
}

function getLocalMovies() {
  return JSON.parse(localStorage.getItem('localMovies'));
}

export { addLocalMovie, getLocalMovies };
