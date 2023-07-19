import React, { useEffect, useState } from "react";
import axios from "axios";

import Wrapper from "../style/HomePageStyle";
import { BASE_URL, API_KEY } from "../helper/BaseURL";
import Banner from "../components/Banner";
import MoviesContainer from "../components/MoviesContainer";
import Loading from "../components/LoadingScreen";

function HomePage() {
  // Component Data
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const { data } = await axios.get(`${BASE_URL}/popular?${API_KEY}`);
      setMovieList(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  if (movieList.length === 0) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="banner">
        <Banner images={movieList} />
      </div>
      <MoviesContainer movieList={movieList} title={"popular"} />
    </Wrapper>
  );
}

export default HomePage;
