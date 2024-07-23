import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/styles/movieDetails.module.css';
import SearchAppBar from '@/component/navBar';
import Footer from '@/component/footer';

const MovieDetails = () => {
  const router = useRouter();
  const { uuid } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (uuid) {
      fetch(`http://localhost:3000/movies/${uuid}`)
        .then((response) => response.json())
        .then((data) => {
          setMovie(data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, [uuid]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchAppBar />
      <br />
      <div className={styles.movieDetails}>
        <img
          src={movie.moviePoster}
          alt={`${movie.title} Poster`}
          className={styles.movieDetailsImg}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.trailer}>
            <iframe
              width="768"
              height="415"
              src={movie.trailer}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className={styles.movieDetailsInfo}>
          <div>
            <h1>
              <span className={styles.span}>{movie.title}</span>
            </h1>
            <p>
              {' '}
              <span className={styles.span}> Release Date: </span>{' '}
              {movie.releaseDate}
            </p>
            <p>
              {' '}
              <span className={styles.span}> Rating:</span> {movie.rating}
            </p>
            <p>
              {' '}
              <span className={styles.span}> Overview:</span>{' '}
            </p>
            <p id={styles.overview}>{movie.overview} </p>
            <p>
              {' '}
              <span className={styles.span}> Language:</span> {movie.language}
            </p>
            <p>
              <span className={styles.span}>Genre:</span> {movie.genre}
            </p>
          </div>
        </div>
        <div id={styles.mainActorDiv}>
          <h3 className={styles.movieDetailsInfo}>Cast</h3>
          <div className={styles.castCards}>
            {movie.movieActorActors.map((actor) => (
              <div key={actor.id} className={styles.actorCard}>
                <div id={styles.firstDiv}>
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNmM0ODA2YTktYWU4Mi00ZjA3LWFjYTYtOTJlZGY2Y2QwZTUzXkEyXkFqcGdeQXVyMTYzNTg1Nzk@._V1_FMjpg_UX1000_.jpg"
                    id={styles.image}
                  ></img>

                </div>
                <div id={styles.characterName}>
                  <span>{actor.actor.firstName} {actor.actor.lastName}</span>
                  <h6>{actor.character} </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
