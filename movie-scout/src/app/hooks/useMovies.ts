import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../services/apiService';

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
}

const useMovies = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchPopularMovies();
        setMovies(movies);
        console.log(movies);
      } catch (error) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  return { movies, loading, error };
};

export default useMovies;