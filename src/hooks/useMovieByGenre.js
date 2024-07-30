
import { useState, useEffect } from 'react';

const useMoviesByGenre = (genre) => {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (genre) {
      const fetchMovies = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_APP_PATH}/movies/genre/${genre}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setRecords(data);
        } catch (err) {
          setError(err);
          console.error('Fetch error:', err);
        }
      };

      fetchMovies();
    }
  }, [genre]);

  return { records, error };
};

export default useMoviesByGenre;
