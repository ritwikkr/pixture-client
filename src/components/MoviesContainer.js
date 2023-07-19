import React from "react";
import { Link } from "react-router-dom";
import { IMG_PATH } from "../helper/BaseURL";
import Wrapper from "../style/MoviesContainerStyle";

function MoviesContainer({ movieList, title }) {
  return (
    <Wrapper>
      <div className="popular">
        <h1>{title}</h1>
        <div className="body">
          {movieList.map((movie) => (
            <Link to={`/detailPage/${movie.id}`} key={movie.id}>
              <div className="tile" key={movie.id}>
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
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default MoviesContainer;
