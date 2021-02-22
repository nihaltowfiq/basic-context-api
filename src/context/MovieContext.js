import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "Inception", price: 10, id: 0 },
    { name: "Joker", price: 11, id: 1 },
    { name: "Thor", price: 10, id: 3 },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
