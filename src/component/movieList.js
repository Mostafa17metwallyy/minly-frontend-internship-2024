import React from 'react';

const MoviesList = ({ movies }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Ensures a maximum of 4 items per row
    gap: '20px',
    justifyContent: 'center'
  };

  const itemStyle = {
    textAlign: 'center',
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
    backgroundColor: '#fff'
  };

  const imgStyle = {
    width: '200px',
    height: '300px',
    borderRadius: '10px'
  };

  return (
    <div style={gridStyle}>
      {movies.map((movie) => (
        <div key={movie.id} style={itemStyle}>
          <img src={movie.poster} alt={movie.name} style={imgStyle} />
          <h3>{movie.name}</h3>
          <p>Rating: {movie.rating}</p>
          <p>Year: {movie.year}</p>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
