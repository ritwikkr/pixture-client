import React from "react";
import { useSelector } from "react-redux";

import Wrapper from "../style/FavouritePageStyle";
import MovieCard from "../components/MovieCard";

function FavouritePage() {
  // Redux
  const { favMovie } = useSelector((state) => state.movie);

  return (
    <Wrapper>
      <div className="head">
        <h1>Your Favourite Movies</h1>
      </div>
      <div className="body">
        {favMovie.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </Wrapper>
  );
}

export default FavouritePage;
