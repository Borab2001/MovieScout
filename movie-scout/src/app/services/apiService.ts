import axios from 'axios';

const apiKey = "32eb9929f52713e37a804836be0e6930";
const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular";

export const fetchPopularMovies = async () => {
  const response = await axios.get(`${popularMoviesUrl}?api_key=${apiKey}`);
  return response.data.results;
};
