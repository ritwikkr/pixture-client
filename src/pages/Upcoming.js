import axios from "axios";
import React, { useEffect, useState } from "react";
import Wrapper from "../style/UpcomingStyle";

import { BASE_URL, API_KEY } from "../helper/BaseURL";
import MoviesContainer from "../components/MoviesContainer";
import Loading from "../components/LoadingScreen";

function Upcoming() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchUpcoming();
  }, []);

  async function fetchUpcoming() {
    try {
      const { data } = await axios.get(BASE_URL + "/upcoming?" + API_KEY);
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
      <MoviesContainer title={"upcoming"} movieList={movies} />
    </Wrapper>
  );
}

export default Upcoming;
