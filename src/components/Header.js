import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../style/HeaderStyle";

function Header() {
  const [showNav, setShowNav] = useState(false);
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
    </Wrapper>
  );
}

export default Header;
