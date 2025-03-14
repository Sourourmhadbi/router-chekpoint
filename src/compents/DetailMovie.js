import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../compents/DetailMovie.css';  

function DetailMovie({ movies }) {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.title === decodeURIComponent(title));  
  if (!movie) {
    return <p>Film non trouvé !</p>;
  }

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title="Trailer"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={() => navigate("/")}>Retour à l'accueil</button>
    </div>
  );
}

export default DetailMovie;
