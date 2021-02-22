import React, { useContext, useRef } from "react";
import { MovieContext } from "../context/MovieContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const movieName = useRef();
  const moviePrice = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      name: movieName.current.value,
      price: moviePrice.current.value,
      id: Math.random() * 1000,
    };
    setMovies([...movies, newMovie]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={movieName} />
        <input type="number" ref={moviePrice} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
