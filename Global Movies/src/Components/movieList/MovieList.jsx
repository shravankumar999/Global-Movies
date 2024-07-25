import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import axios from "axios";
import "swiper/css";
import "swiper/css/autoplay";
import "./movieList.scss";
import MovieCart from "../movieCart/MovieCart";

const MovieList = ({ catalog, data }) => {
  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        spaceBetween={50}
        slidesPerView={"auto"}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {data.products.map((item) => {
          return (
            <SwiperSlide key={item.id} className="movie-list-slider">
              <MovieCart item={item} catalog={catalog} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MovieList;
