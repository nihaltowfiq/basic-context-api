import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieList = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div>
      <h4>Total Movies: {movies.length}</h4>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const Movie = ({ movie }) => {
  return (
    <div>
      <h1>{movie.name}</h1>
      <p>{movie.price}</p>
    </div>
  );
};

export default MovieList;
