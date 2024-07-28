import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SearchAppBar from '@/component/navBar';
import Footer from '@/component/footer';


const ActorDetails = () => {
  const router = useRouter();
  const { actorId } = router.query;
  const [actor, setActor] = useState(null);

  useEffect(() => {
    if (actorId) {
      fetch(`http://localhost:3000/actorDetails/${actorId}`)
        .then((response) => response.json())
        .then((data) => setActor(data))
        .catch((err) => console.log(err));
    }
  }, [actorId]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchAppBar />
      <div className={styles.actorDetails}>
        <img
          src={actor.picture}
          alt={`${actor.firstName} ${actor.lastName}`}
          className={styles.actorPicture}
        />
        <div className={styles.actorInfo}>
          <h1>
            {actor.firstName} {actor.lastName}
          </h1>
          <p>
            <strong>Gender:</strong> {actor.gender}
          </p>
          <p>
            <strong>Birth Date:</strong> {actor.birthDate}
          </p>
          <p>
            <strong>Nationality:</strong> {actor.nationality}
          </p>
          <p>
            <strong>Bio:</strong> {actor.bio}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActorDetails;
