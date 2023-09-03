import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { postFavMovie, removeFav } from "../store/slices/movieSlice";
import { IMG_PATH } from "../helper/BaseURL";
import Wrapper from "../style/MovieCardStyle";
import Heart from "./Heart";

function MovieCard({ movie }) {
  // Redux
  const dispatch = useDispatch();
  const { favMovie } = useSelector((state) => state.movie);

  // Add to favourite
  function addToFav(e, movie) {
    e.preventDefault();
    // Check if the movie is in favorite list
    const isFavorite = favMovie.find((mov) => mov.id === movie.id);
    if (isFavorite) {
      dispatch(removeFav(movie.id));
    } else {
      dispatch(postFavMovie(movie));
    }
  }
  return (
    <Wrapper>
      <Link to={`/detailPage/${movie.id}`} key={movie.id}>
        <div className="tile" key={movie.id}>
          <div className="heart" onClick={(e) => addToFav(e, movie)}>
            <Heart id={movie.id} />
          </div>
          <img src={IMG_PATH + movie.poster_path} alt={movie.title} />
          <div className="details">
            <p className="title">{movie.title}</p>
            <div className="date-rating">
              <p className="date">2022-05-04</p>
              <p className="rating">
                7.5<i className="fa-solid fa-star"></i>
              </p>
            </div>
            <p className="desc">{movie.overview.slice(0, 80) + "..."}</p>
          </div>
          <div className="backdrop"></div>
        </div>
      </Link>
    </Wrapper>
  );
}

export default MovieCard;
