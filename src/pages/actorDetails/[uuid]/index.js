import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SearchAppBar from '@/component/navBar';
import Footer from '@/component/footer';
import styles from '@/styles/actorDetails.module.css';

const ActorDetails = () => {
  const router = useRouter();
  const { uuid } = router.query;
  const [actor, setActor] = useState(null);

  useEffect(() => {
    if (uuid) {
      fetch(`http://localhost:3000/actors/${uuid}`)
        .then((response) => response.json())
        .then((data) => {
          setActor(data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, [uuid]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchAppBar />
      <div className={styles.actorDetails}>
        <div>
          <img
            src={actor.picture}
            alt={`${actor.firstName} ${actor.lastName}`}
            className={styles.actorPicture}
          />
          <div className={styles.personalInfo}>
            <h3>Personal Information</h3>
            <p>
              <strong>Gender:</strong> {actor.gender}
            </p>
            <p>
              <strong>Birth Date:</strong> {actor.birthDate}
            </p>
            <p>
              <strong>Nationality:</strong> {actor.nationality}
            </p>
          </div>
        </div>
        <div className={styles.actorInfo}>
          <div>
            <h1>
              {actor.firstName} {actor.lastName}
            </h1>
            <h3>Biography</h3>
            <p>{actor.bio}</p>
          </div>
          <div id={styles.acting}>
            <h3>Acting</h3>
            {actor.movieActorActors.map((acting) => (
              <ul key={acting.movie.id}>
                <li>
                  {acting.movie.title} <span>as</span> {acting.character}
                </li>
              </ul>
            ))}
          </div>
          <div>
            <br />
            <h3>Awards and Nominations</h3>
            {actor.awards.length > 0 ? (
              actor.awards.map((acting, index) => (
                <ul id={styles.awards} key={index}>
                  <li>{acting.name}</li>
                </ul>
              ))
            ) : (
              <p>This actor has no awards</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActorDetails;
