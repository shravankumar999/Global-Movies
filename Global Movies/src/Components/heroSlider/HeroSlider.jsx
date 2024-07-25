import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../button/Button";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { Outline } from "../button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "./heroSlider.scss";
const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const HeroSlider = () => {
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className === "movieTrailer") {
        setModalActive(false);
      }
    });
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data.results.slice(0, 5));
    });
  }, []);

  return (
    <div className="hero-slider">
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        grabCursor={true}
        autoplay={{ delay: 3000 }}
        loop
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                modalActive={modalActive}
                setModalActive={setModalActive}
                className={` ${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {modalActive && <MoviesTrailer />}
    </div>
  );
};

const MoviesTrailer = () => {
  return (
    <div className="movieTrailer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JfVOs4VSpmA"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const HeroSlideItem = (props) => {
  const item = props.item;
  const background = `${
    `https://image.tmdb.org/t/p/w1280` + item.backdrop_path
  }`;
  const modalActive = props.modalActive;
  const setModalActive = props.setModalActive;

  return (
    <div
      className={`hero__slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero__slide__item__conteiner">
        <div className="hero__slide__item__content">
          <h1>{item.original_title}</h1>
          <div className="hero__slide__item__content__info">
            <h4>
              <span>HD</span>
            </h4>
            <h3>
              {" "}
              <StarPurple500Icon
                style={{ marginBottom: "2px", color: "rgb(255, 230, 0)" }}
              />{" "}
              {item.vote_average}
            </h3>
            <h4>
              Original Language:
              <span style={{ marginLeft: "10px" }}>
                {item.original_language}
              </span>
            </h4>
          </div>
          <p>{item.overview}</p>
          <div className="slider-button">
            <Link to={`/detail/${item.id}/movie`}>
              <Button>Watch Now</Button>
            </Link>
            <Outline
              className="left"
              onClick={() => setModalActive(!modalActive)}
            >
              Watch Trailer
            </Outline>
          </div>
        </div>
        <div className="hero__slide__item__image">
          <img
            src={`${`https://image.tmdb.org/t/p/w1280` + item.poster_path}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
