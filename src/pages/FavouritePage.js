import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
        {favMovie.length === 0 ? (
          <div className="empty">
            <p>You don't have any movies in your favourite list</p>
            <p>
              <Link to={"/"}>
                <i className="fa-solid fa-house"></i>
              </Link>
            </p>
          </div>
        ) : (
          favMovie.map((movie) => <MovieCard movie={movie} />)
        )}
      </div>
    </Wrapper>
  );
}

export default FavouritePage;
