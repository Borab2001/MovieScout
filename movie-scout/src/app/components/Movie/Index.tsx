import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import styles from './style.module.css';

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const Movie: React.FC<MovieProps> = ({ 
  id, 
  title, 
  poster_path,
  release_date
}) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigating when clicking on the heart button
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className={styles.movieCard}
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300${poster_path})` }}
      onClick={handleCardClick}
    >
      <button className={styles.favoriteButton}>
        <FaRegHeart />
      </button>
      <div className={styles.gradientOverlay}>
        <h2 className={styles.movieTitle}>{title}</h2>
        <p className={styles.releaseDate}>{release_date}</p>
      </div>
    </div>
  );
};

export default Movie;
