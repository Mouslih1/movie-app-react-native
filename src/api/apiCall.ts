const apiKey: string = 'bb9e055caf9b2fa3e90a796a99547192';

export const baseUrlImage = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}/${path}`;
};

export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
export const upComingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

export const searchMovies = (keyword: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;
};

export const movieDetails = (movie_id: number) => {
  return `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}}`;
};

export const movieCasDetails = (movie_id: number) => {
  return `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${apiKey}}`;
};
