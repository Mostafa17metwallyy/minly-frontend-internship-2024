import MoviesList from '..//component/movieList';
import { styled, alpha } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';

export default function Home() {
  const movies = [
    {
      id: 1,
      name: 'Welad Rizk',
      poster: 'https://assets.voxcinemas.com/posters/P_HO00011075.jpg',
      rating: '5.0',
      year: '2024',
    },
    {
      id: 2,
      name: 'The Meg2',
      poster:
        'https://image.tmdb.org/t/p/original/FQHtuf2zc8suMFE28RyvFt3FJN.jpg',
      rating: '4.0',
      year: '2021',
    },
    {
      id: 3,
      name: 'Openheimer',
      poster: 'https://mabuse.es/wp-content/uploads/2023/01/Oppenheimer-2.jpg',
      rating: '3.75',
      year: '2023',
    },
    {
      id: 4,
      name: 'Welad Rizk',
      poster: 'https://assets.voxcinemas.com/posters/P_HO00011075.jpg',
      rating: '5.0',
      year: '2024',
    },
    {
      id: 5,
      name: 'The Meg2',
      poster:
        'https://image.tmdb.org/t/p/original/FQHtuf2zc8suMFE28RyvFt3FJN.jpg',
      rating: '4.0',
      year: '2021',
    },
    {
      id: 6,
      name: 'Openheimer',
      poster: 'https://mabuse.es/wp-content/uploads/2023/01/Oppenheimer-2.jpg',
      rating: '3.75',
      year: '2023',
    },
    {
      id: 7,
      name: 'Welad Rizk',
      poster: 'https://assets.voxcinemas.com/posters/P_HO00011075.jpg',
      rating: '5.0',
      year: '2024',
    },
    {
      id: 8,
      name: 'The Meg2',
      poster:
        'https://image.tmdb.org/t/p/original/FQHtuf2zc8suMFE28RyvFt3FJN.jpg',
      rating: '4.0',
      year: '2021',
    },
    {
      id: 9,
      name: 'Openheimer',
      poster: 'https://mabuse.es/wp-content/uploads/2023/01/Oppenheimer-2.jpg',
      rating: '3.75',
      year: '2023',
    },
    {
      id: 10,
      name: 'Welad Rizk',
      poster: 'https://assets.voxcinemas.com/posters/P_HO00011075.jpg',
      rating: '5.0',
      year: '2024',
    },
    {
      id: 11,
      name: 'The Meg2',
      poster:
        'https://image.tmdb.org/t/p/original/FQHtuf2zc8suMFE28RyvFt3FJN.jpg',
      rating: '4.0',
      year: '2021',
    },
    {
      id: 12,
      name: 'Openheimer',
      poster: 'https://mabuse.es/wp-content/uploads/2023/01/Oppenheimer-2.jpg',
      rating: '3.75',
      year: '2023',
    },
    {
      id: 13,
      name: 'Welad Rizk',
      poster: 'https://assets.voxcinemas.com/posters/P_HO00011075.jpg',
      rating: '5.0',
      year: '2024',
    },
    {
      id: 14,
      name: 'The Meg2',
      poster:
        'https://image.tmdb.org/t/p/original/FQHtuf2zc8suMFE28RyvFt3FJN.jpg',
      rating: '4.0',
      year: '2021',
    },
    {
      id: 15,
      name: 'Openheimer',
      poster: 'https://mabuse.es/wp-content/uploads/2023/01/Oppenheimer-2.jpg',
      rating: '3.75',
      year: '2023',
    },
    {
      id: 16,
      name: 'Welad Rizk',
      poster: 'https://assets.voxcinemas.com/posters/P_HO00011075.jpg',
      rating: '5.0',
      year: '2024',
    },
  ];

  return (
    <>
      <div
        style={{
          margin: '50px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '120px',
          }}
        >
          <h1
            style={{
              color: 'rgba(65, 140, 251, 1)',
            }}
          >
            MMDB
          </h1>
          <search />
        </div>
        <h2
          style={{
            color: 'rgba(0, 48, 85, 1)',
          }}
        >
          All Movies
        </h2>
        <MoviesList movies={movies} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
      </div>
    </>
  );
}
