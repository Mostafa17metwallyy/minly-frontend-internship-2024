// src/hooks/useSortedMovies.js
import { useState, useEffect } from 'react';

const useSortedMovies = (sort) => {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sort && sort !== 'None') {
      const fetchMovies = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_APP_PATH}/movies/paginated?sortBy=${sort}`);
          const data = await response.json();
          setRecords(data.data);
        } catch (err) {
          setError(err);
          console.error('Fetch error:', err);
        }
      };

      fetchMovies();
    }
  }, [sort]);

  return { records, error };
};

export default useSortedMovies;
