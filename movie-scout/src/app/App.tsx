import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import useMovies from './hooks/useMovies';
import Movie from './components/Movie/Index';
import Sidebar from './components/Sidebar/Index';

export function App() {
  const { movies, loading, error } = useMovies();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <main>
            <Sidebar />
            <div className={styles.movieContainer}>
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  release_date={movie.release_date}
                />
              ))}
            </div>
          </main>
        } />
      </Routes>
    </Router>
  );
}

export default App;
