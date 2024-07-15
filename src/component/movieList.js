import { Typography } from '@mui/material';
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';

const MoviesList = ({ movies }) => {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Ensures a maximum of 4 items per row
    gap: '40px',
    justifyContent: 'center',
  };

  const itemStyle = {
    textAlign: 'center',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
    backgroundColor: '#fff',
    color: 'rgba(0, 48, 85, 1)',
    transition: 'transform 0.2s ease-in-out', // Smooth transition effect
    transform: 'scale(1)',
  };

  const imgStyle = {
    width: '278px',
    height: '464px',
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
      {movies.map((movie) => (
        <div key={movie.id} style={{ ...itemStyle, ...(hoveredMovie === movie.id && imgHoveredStyle) }}>
          <img
            src={movie.poster}
            alt={movie.name}
            style={imgStyle}
            onMouseEnter={() => handleMouseEnter(movie.id)}
            onMouseLeave={handleMouseLeave}
          />
          <div style={{ textAlign: 'left' }}>
            <Typography component="legend"></Typography>
            <Rating name="read-only" value={movie.id} readOnly />
            <h3
              style={{
                color: 'rgba(26, 44, 89, 1)',
              }}
            >
              {movie.name}
            </h3>
            <p> {movie.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
