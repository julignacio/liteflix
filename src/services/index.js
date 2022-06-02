import axios from 'axios';

export async function useFeatured() {
  const {
    data: { results },
  } = await axios.get(
    'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20',
  );

  const featured = results.reduce((prev, curr) => {
    const max = curr.vote_average >= prev.vote_average ? curr : prev;
    return max;
  });
  const formattedFeatured = {
    image: `https://image.tmdb.org/t/p/original${featured.backdrop_path}`,
    title: featured.original_title,
    rating: featured.vote_average,
  };
  return formattedFeatured;
}

export async function usePopular() {
  const {
    data: { results },
  } = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20',
  );
  const popular = results.slice(0, 4).map((movie) => ({
    image: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
    title: movie.original_title,
    rating: movie.vote_average,
    date: movie.release_date.slice(0, 4),
  }));
  return popular;
}
