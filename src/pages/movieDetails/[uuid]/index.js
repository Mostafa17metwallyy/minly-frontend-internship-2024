import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/styles/movieDetails.module.css';
import SearchAppBar from '@/component/navBar';
import Footer from '@/component/footer';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';

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

  const handleActorClick = (actorUuid) => {
    router.push(`/actorDetails/${actorUuid}`);
  };

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
            <div style={{ marginBottom: '50px' }}>
              <h1
                style={{ gap: '15px', display: 'flex', flexDirection: 'row' }}
              >
                <span className={styles.span}>{movie.title}</span>
                <span
                  style={{
                    color: 'rgba(105, 117, 134, 1)',
                    fontSize: '24px',
                    marginTop: '5px',
                  }}
                >
                  ({movie.releaseDate})
                </span>
              </h1>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '15px',
                  gap: '10px',
                  color: 'rgba(0, 48, 85, 1)',
                }}
              >
                <span id={styles.starIcon}>
                  <StarIcon />
                </span>
                <></>
                {movie.rating}
                <div>
                  {movie.genre} <> {movie.duration}m</>
                </div>
              </div>
            </div>
            <p>
              <span className={styles.span}> Overview:</span>
            </p>
            <p id={styles.overview}>{movie.overview} </p>
            <p>
              <span className={styles.span}> Language:</span> {movie.language}
            </p>
          </div>
        </div>
        <div>
          <h3 className={styles.movieDetailsInfo}>Cast</h3>
          <div className={styles.castCards}>
            {movie.movieActorActors.map((actor) => (
              <div
                key={`${actor.id}-${actor.character}`}
                className={styles.actorCard}
                onClick={() => handleActorClick(actor.actor.uuId)}
                style={{ cursor: 'pointer' }}
              >
                <div id={styles.firstDiv}>
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNmM0ODA2YTktYWU4Mi00ZjA3LWFjYTYtOTJlZGY2Y2QwZTUzXkEyXkFqcGdeQXVyMTYzNTg1Nzk@._V1_FMjpg_UX1000_.jpg"
                    id={styles.image}
                  />
                </div>
                <div id={styles.characterName}>
                  <span>
                    {actor.actor.firstName} {actor.actor.lastName}
                  </span>
                  <Typography style={{ fontSize: '10px' }}>
                    {actor.character}
                  </Typography>
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
