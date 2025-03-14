import React, { useState } from "react";
import "../compents/Filter.css";

function Filter({ filter, onFilterChange, onAddMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    note: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filter, [name]: name === "note" ? Number(value) : value });
  };

  const handleNewMovieChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: name === "note" ? Number(value) : value });
  };

  const handleAddMovie = () => {
    onAddMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", note: 0 });
  };

  return (
    <div className="filter">
      <h2>Filtrer les Films</h2>
      <input
        type="text"
        placeholder="Titre"
        name="title"
        value={filter.title}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Note minimale"
        name="note"
        value={filter.note}
        onChange={handleChange}
      />

      <h2>Ajouter un Film</h2>
      <input
        type="text"
        placeholder="Titre"
        name="title"
        value={newMovie.title}
        onChange={handleNewMovieChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={newMovie.description}
        onChange={handleNewMovieChange}
      />
      <input
        type="text"
        placeholder="URL de l'affiche"
        name="posterURL"
        value={newMovie.posterURL}
        onChange={handleNewMovieChange}
      />
      <input
        type="number"
        placeholder="Note"
        name="note"
        value={newMovie.note}
        onChange={handleNewMovieChange}
      />
      <button onClick={handleAddMovie}>Ajouter Film</button>
    </div>
  );
}

export default Filter;
