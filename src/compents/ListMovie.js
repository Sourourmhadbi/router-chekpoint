import React from 'react'
import MovieCard from './MovieCard';
function ListMovie({movies}) {
  return (
    <div className='movie-list'>
      {movies.length > 0 ? (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      ) : (
        <p>Aucun film trouvé.</p>
      )}
    </div>
  );
}
export default ListMovie;
