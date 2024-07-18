import { Typography } from '@mui/material';
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';

const MoviesList = ({ records }) => {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Ensures a maximum of 4 items per row
    gap: '19px',
    justifyContent: 'center',
    width: '100%',
    height: '1100px',
  };

  const itemStyle = {
    textAlign: 'center',
    padding: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
    backgroundColor: '#fff',
    color: 'rgba(0, 48, 85, 1)',
    transition: 'transform 0.2s ease-in-out', // Smooth transition effect
    transform: 'scale(1)',
    width: '278px',
    height: '500px',
  };

  const imgStyle = {
    width: '256px',
    height: '344px',
    borderRadius: '10px',
  };

  const imgHoveredStyle = {
    transform: 'scale(1.05)',
  };

  const handleMouseEnter = (id) => {
    setHoveredMovie(id);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <div style={gridStyle}>
      {records.map((movie) => (
        <Link key={movie.id} href={`/movieDetails/${movie.uuId}`} legacyBehavior>
          <a
            style={{ textDecoration: 'none', color: 'inherit' }}
            onMouseEnter={() => handleMouseEnter(movie.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                ...itemStyle,
                ...(hoveredMovie === movie.id && imgHoveredStyle),
              }}
            >
              <img src={movie.moviePoster} alt={movie.name} style={imgStyle} />
              <div
                style={{
                  textAlign: 'left',
                  margin: '3px',
                  marginTop: '3px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '5px',
                  }}
                >
                  <div
                    style={{
                      color: 'rgba(254, 182, 0, 1)',
                    }}
                  >
                    <StarIcon />
                  </div>
                  <div>{movie.rating}</div>
                </div>
                <h3
                  style={{
                    color: 'rgba(26, 44, 89, 1)',
                    marginTop: '2px',
                  }}
                >
                  {movie.title}
                </h3>
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
