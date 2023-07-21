import React from "react";

import Wrapper from "../style/MoviesContainerStyle";
import MovieCard from "./MovieCard";

function MoviesContainer({ movieList, title }) {
  return (
    <Wrapper>
      <div className="popular">
        <h1>{title}</h1>
        <div className="body">
          {movieList.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default MoviesContainer;
