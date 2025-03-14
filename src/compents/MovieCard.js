import React from "react";
import "../compents/MovieCard.css";
import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p className="note">⭐ {movie.note}</p>
      <Link to={`/movie/${movie.title}`} className="details-link">Voir Détails</Link>
    </div>
  );
};
export default MovieCard;
