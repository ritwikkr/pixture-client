import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/LoadingScreen";
import MoviesContainer from "../components/MoviesContainer";
import { API_KEY, BASE_URL } from "../helper/BaseURL";
import Wrapper from "../style/NowPlayingStyle";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  async function fetchNowPlaying() {
    try {
      const { data } = await axios.get(BASE_URL + "/now_playing?" + API_KEY);
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
      <MoviesContainer title={"now playing"} movieList={movies} />
    </Wrapper>
  );
}

export default NowPlaying;
