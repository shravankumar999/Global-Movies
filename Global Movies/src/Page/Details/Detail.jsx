import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Casts from "./Casts";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import MovieCart from "../../Components/movieCart/MovieCart";

const Detail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { keyword } = useParams();
  const url = `https://api.themoviedb.org/3/${keyword}/${id}?api_key=04c35731a5ee918f014970082a0088b1`;
  useEffect(() => {
    window.scroll(0, 0);
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [id, keyword]);

  const image = `${`https://image.tmdb.org/t/p/w1280` + data.poster_path}`;
  const bg = `${
    `https://image.tmdb.org/t/p/w1280` + data.backdrop_path || data.poster_path
  }`;
  const title = data.original_title || data.name;
  const ganres = data.genres ? data.genres : [];

  return (
    <>
      <div>
        <div
          className="detail-banner"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {" "}
        </div>
        <div className="detail__conteiner">
          <div className="detail__conteiner__poster">
            <div
              className="detail__conteiner__poster__image"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
          <div className="detail__conteiner__content">
            <div className="detail__conteiner__content__title"> 
              <h1>{title}</h1>
            </div>
            <div className="detail__conteiner__content__ganrs">
              {ganres.map((el) => (
                <Ganres item={el} key={el.id} />
              ))}
            </div>
            <p>{data.overview}</p>
            <div className="detail__conteiner__content__casts">
              <Casts id={id} />
            </div>
          </div>
        </div>
        <Videos id={id} catalog={keyword} />
        <Similar id={id} catalog={keyword} />
      </div>
    </>
  );
};

const Ganres = (props) => {
  const item = props.item;
  return (
    <div className="ganre">
      <Link to="/">{item.name}</Link>
    </div>
  );
};

const Videos = (props) => {
  const videoUrl = `https://api.themoviedb.org/3/${props.catalog}/${props.id}/videos?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`;
  const [video, setVideo] = useState([]);
  useEffect(() => {
    axios.get(videoUrl).then((response) => {
      setVideo(response.data.results.slice(0, 3));
    });
  }, [videoUrl]);

  return (
    <>
      {video.map((el) => {
        return (
          <div className="video" key={el.id}>
            <div className="video__title">
              <h2>{el.name}</h2>
            </div>
            <iframe
              src={`https://www.youtube.com/embed/${el.key}`}
              width="100%"
              height="100%"
              title="video"
            ></iframe>
          </div>
        );
      })}
    </>
  );
};

const Similar = (props) => {
  const Similarurl = `https://api.themoviedb.org/3/${props.catalog}/${props.id}/similar?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1`;
  const [similar, setSimilar] = useState([]);
  useEffect(() => {
    axios.get(Similarurl).then((response) => {
      setSimilar(response.data.results);
    });
  }, []);

  return (
    <div className="movie-list similar-list">
      <h2>Similar</h2>
      <Swiper
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={"auto"}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {similar.map((item) => {
          return (
            <SwiperSlide key={item.id} className="movie-list-slider">
              <MovieCart item={item} catalog={props.catalog} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Detail;
