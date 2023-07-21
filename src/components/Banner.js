import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

import { IMG_PATH } from "../helper/BaseURL";
import Wrapper from "../style/BannerStyle";

function Banner({ images }) {
  const imageList = images.slice(1, 4);
  return (
    <Wrapper>
      <div className="carousel-wrapper">
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
          {imageList.map((image) => (
            <Link to={`/detailPage/${image.id}`} key={image.id}>
              <div className="slide">
                <img src={IMG_PATH + image.backdrop_path} alt="" />
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </Wrapper>
  );
}

export default Banner;
