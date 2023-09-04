import React from "react";

import YouTube from "react-youtube";

function Trailer({ videos }) {
  const names = ["Official Trailer", "Main Trailer"];
  const { results } = videos;
  const trailerObj = results.find((movie) => names.includes(movie.name));

  return (
    <div>
      {trailerObj ? (
        <YouTube videoId={trailerObj.key} />
      ) : (
        <h1>Sorry No trailer Available</h1>
      )}
    </div>
  );
}

export default Trailer;
