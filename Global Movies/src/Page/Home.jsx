import React, { useEffect } from "react";
import HeroSlider from "../Components/heroSlider/HeroSlider";
import { Outline } from "../Components/button/Button";
import { Link } from "react-router-dom";
import MovieList from "../Components/movieList/MovieList";
import {
  getPopularMovies,
  getRatedMovies,
  getTredingTv,
} from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const url2 =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1";
const url3 =
  "https://api.themoviedb.org/3/tv/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);

  useEffect(() => {
    console.log(products);
    dispatch(getPopularMovies());
    dispatch(getRatedMovies());
    dispatch(getTredingTv());
  }, []);

  return (
    <div className="Home">
      <HeroSlider />
      <div className="conteiner">
        <div className="section">
          <div className="section__header">
            <h4>Trending Movies</h4>
            <Link to="/movie">
              <Outline className="small">View More</Outline>
            </Link>
          </div>
          <MovieList catalog={"movie"} data={products.Popilarmovies} />
        </div>
        <div className="section">
          <div className="section__header">
            <h4>Top Rated Movies</h4>
            <Link to="/movie">
              <Outline className="small">View More</Outline>
            </Link>
          </div>
          <MovieList catalog={"movie"} data={products.RatedMovies} />
        </div>
        <div className="section">
          <div className="section__header">
            <h4>Trending TV</h4>
            <Link to="/tv">
              <Outline className="small">View More</Outline>
            </Link>
          </div>
          <MovieList catalog={"tv"} data={products.TradingTv} />
        </div>
      </div>
    </div>
  );
};

export default Home;
