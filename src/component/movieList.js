import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
import styles from '@/styles/movieList.module.css';

const MoviesList = ({ records }) => {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredMovie(id);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <div className={styles.gridStyle}>
      {records.map((movie) => (
        <Link
          key={movie.id}
          href={`/movieDetails/${movie.uuId}`}
          legacyBehavior
        >
          <a
            className={styles.linkStyle}
            onMouseEnter={() => handleMouseEnter(movie.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`${styles.itemStyle} ${hoveredMovie === movie.id ? styles.imgHoveredStyle : ''}`}
            >
              <img
                src={movie.moviePoster}
                alt={movie.name}
                className={styles.imgStyle}
              />
              <div className={styles.movieInfo}>
                <div className={styles.rating}>
                  <StarIcon className={styles.ratingIcon} />
                  <div>{movie.rating}</div>
                </div>
                <h3 className={styles.movieTitle}>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
