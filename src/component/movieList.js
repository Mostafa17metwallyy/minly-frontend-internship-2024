import { colors, Typography } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';


const MoviesList = ({ movies }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Ensures a maximum of 4 items per row
    gap: '20px',
    justifyContent: 'center',
  };

  const itemStyle = {
    textAlign: 'center',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
    backgroundColor: '#fff',
    color: 'rgba(0, 48, 85, 1)',
  };

  const imgStyle = {
    width: '278px',
    height: '464px',
    borderRadius: '10px',
  };


  return (
    <div style={gridStyle}>
      {movies.map((movie) => (
        <div key={movie.id} style={itemStyle}>
          <img src={movie.poster} alt={movie.name} style={imgStyle} />
          <div style={{
            textAlign:"left"
          }}>

          <Typography component="legend"></Typography>
          <Rating name="read-only" value={movie.id} readOnly/>

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
