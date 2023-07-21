import React from "react";
import { useSelector } from "react-redux";

function Heart({ id }) {
  // Redux
  const { favMovie } = useSelector((state) => state.movie);

  const isFav = favMovie.find((item) => item.id === id);

  if (isFav) return <i className="fa-solid fa-heart"></i>;
  return <i className="fa-regular fa-heart"></i>;
}

export default Heart;
