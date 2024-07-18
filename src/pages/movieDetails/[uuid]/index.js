import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/styles/movieDetails.module.css';
import SearchAppBar from '@/component/navBar';

const MovieDetails = () => {
  const router = useRouter();
  const { uuid } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (uuid) {
      fetch(`http://localhost:3000/movies/${uuid}`)
        .then((response) => response.json())
        .then((data) => setMovie(data))
        .catch((err) => console.log(err));
    }
  }, [uuid]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchAppBar />
      <br/>
      <div className={styles.movieDetails}>
        <img
          src={movie.moviePoster}
          alt={`${movie.title} Poster`}
          className={styles.movieDetailsImg}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.trailer}>
            <iframe
              width="560"
              height="315"
              src={movie.trailer}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.movieDetailsInfo}>
            <h1>{movie.title}</h1>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Rating: {movie.rating}</p>
            <p>Overview: {movie.overview}</p>
            <p>Language: {movie.language}</p>
            <p>Genre: {movie.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
