import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { postFavMovie } from "../store/slices/movieSlice";
import { IMG_PATH } from "../helper/BaseURL";
import Wrapper from "../style/MovieCardStyle";

function MovieCard({ movie }) {
  // Redux
  const dispatch = useDispatch();

  // Add to favourite
  function addToFav(e, movie) {
    e.preventDefault();
    dispatch(postFavMovie(movie));
  }
  return (
    <Wrapper>
      <Link to={`/detailPage/${movie.id}`} key={movie.id}>
        <div className="tile" key={movie.id}>
          <div className="heart" onClick={(e) => addToFav(e, movie)}>
            <i class="fa-regular fa-heart"></i>
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
            <p className="desc">{movie.overview.slice(0, 100) + "..."}</p>
          </div>
          <div className="backdrop"></div>
        </div>
      </Link>
    </Wrapper>
  );
}

export default MovieCard;
