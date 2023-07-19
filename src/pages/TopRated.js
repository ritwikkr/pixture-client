import axios from "axios";
import React, { useEffect, useState } from "react";
import Wrapper from "../style/TopRatedPageStyle";
import { BASE_URL, API_KEY } from "../helper/BaseURL";
import MoviesContainer from "../components/MoviesContainer";
import Loading from "../components/LoadingScreen";

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTopRated();
  }, []);
  async function fetchTopRated() {
    try {
      const { data } = await axios.get(`${BASE_URL}/top_rated?${API_KEY}`);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  if (movies.length === 0) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="body">
        <MoviesContainer title={"Top Rated"} movieList={movies} />
      </div>
    </Wrapper>
  );
}

export default TopRated;
