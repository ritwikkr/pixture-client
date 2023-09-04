import React, { useEffect, useState } from "react";
import Wrapper from "../style/DetailPageStyle";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, API_KEY, IMG_PATH } from "../helper/BaseURL";
import Loading from "../components/LoadingScreen";
import Trailer from "../components/Trailer";

function DetailPage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  async function fetchMovieDetails(id) {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/${id}?${API_KEY}&append_to_response=videos`
      );
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!movie.id) {
    return <Loading />;
  }

  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    runtime,
    vote_count,
    vote_average,
    release_date,
    genres,
    tagline,
    homepage,
    production_companies,
  } = movie;

  return (
    <Wrapper>
      <div className="poster">
        <img src={IMG_PATH + backdrop_path} alt={title} />
      </div>
      <div className="movie">
        <div className="image">
          <img src={IMG_PATH + poster_path} alt={title} />
        </div>
        <div className="details">
          <div className="heading">
            <h1>{title}</h1>
            <p>{tagline}</p>
          </div>
          <div className="ratings">
            <p>
              {vote_average} <i className="fa-solid fa-star"></i>
            </p>
            <p className="votes">({vote_count}) votes</p>
          </div>
          <div className="length">
            <p>{runtime} minutes</p>
          </div>
          <p className="release_date">Release date: {release_date}</p>
          <div className="genres">
            {genres.map((genre) => (
              <p className="genre_tile" key={genre.id}>
                {genre.name}
              </p>
            ))}
          </div>
          <div className="desc">
            <h1>Synopsis</h1>
            <p>{overview}</p>
          </div>
        </div>
      </div>
      <Trailer videos={movie.videos} />
      <div className="links">
        <div className="heading">
          <h1>Useful Links</h1>
        </div>
        <div className="body">
          <Link to={homepage} target="_blank">
            <button className="homepage">
              Homepage<i className="fa-solid fa-share-from-square"></i>
            </button>
          </Link>
          <button className="imdb">
            IMDb<i className="fa-solid fa-share-from-square"></i>
          </button>
        </div>
      </div>
      <div className="company">
        <h1>Production companies</h1>
        <div className="logos">
          {production_companies.map((production) => {
            if (production.logo_path) {
              return (
                <div className="logo" key={production.id}>
                  <img
                    src={IMG_PATH + production.logo_path}
                    alt={production.name}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default DetailPage;
