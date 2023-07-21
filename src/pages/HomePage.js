import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "../style/HomePageStyle";
import { BASE_URL, API_KEY } from "../helper/BaseURL";
import Banner from "../components/Banner";
import MoviesContainer from "../components/MoviesContainer";
import Loading from "../components/LoadingScreen";
import { fetchMovies } from "../store/slices/movieSlice";

function HomePage() {
  // Redux
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.movie);

  // Side Effect -> Fetching Movies
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // Checking if data is fetched or not
  if (isLoading || !data) return <Loading />;

  return (
    <Wrapper>
      <div className="banner">
        <Banner images={data} />
      </div>
      <MoviesContainer movieList={data} title={"popular"} />
    </Wrapper>
  );
}

export default HomePage;
