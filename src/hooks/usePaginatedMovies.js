// src/hooks/usePaginatedMovies.js
import { useState, useEffect } from 'react';

const usePaginatedMovies = (page, limit) => {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_PATH}/movies/paginated?page=${page}&limit=${limit}`);
        const data = await response.json();
        setRecords(data.data);
      } catch (err) {
        setError(err);
        console.error('Fetch error:', err);
      }
    };

    fetchMovies();
  }, [page, limit]);

  return { records, error };
};

export default usePaginatedMovies;
