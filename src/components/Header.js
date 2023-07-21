import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Wrapper from "../style/HeaderStyle";
import { logoutUser } from "../store/slices/userSlice";

function Header() {
  // Component State
  const [showNav, setShowNav] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  // Function -> Logout
  function logoutHandler() {
    dispatch(logoutUser());
  }

  return (
    <Wrapper>
      <div className="logo">
        <Link to={"/"}>
          <p>IMDb</p>
        </Link>
      </div>
      <nav>
        <div className="ham" onClick={() => setShowNav(!showNav)}>
          {!showNav ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </div>
        <ul className={showNav ? `showNav` : null}>
          <Link to={"/now-playing"}>
            <li>Now Playing</li>
          </Link>
          <Link to={"/top-rated"}>
            <li>Top Rated</li>
          </Link>
          <Link to={"/upcoming"}>
            <li>Upcoming</li>
          </Link>
        </ul>
      </nav>
      <div className="login">
        <div className="fav">
          <i class="fa-solid fa-heart"></i>
        </div>
        {data ? (
          <p onClick={logoutHandler}>Logout</p>
        ) : (
          <Link to={"/auth"}>
            <p>Login</p>
          </Link>
        )}
      </div>
    </Wrapper>
  );
}

export default Header;
