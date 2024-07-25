import React, { useState, useEffect } from "react";
import axios from "axios";
import "./movieGrid.scss";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import Button from "../button/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, SearchMovies } from "../../Redux/action";
const MovieGrid = (catalog) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(SearchMovies(catalog.value));
  }, [catalog.value]);



  
  const dispatch = useDispatch();
  const item = useSelector((state) => state.Popilarmovies.products);
  console.log(item);
  useEffect(() => {
    dispatch(getMovies(page, catalog.catalog));
    window.scroll(0, 0);
  }, [page, catalog.catalog]);

  const handleChange = (value) => {
    setPage(value.target.innerText);
  };

  return (
    <div className="movies__Wrapper">
      <div className="movies__header">
        {catalog.catalog === "movie" ? <h2>Movies</h2> : <h2>Tv Series</h2>}
        <Typography>Page:{`${page}`}</Typography>
      </div>
      <div className="movies__conteiner">
        {item.map((el) => (
          <MovieItem item={el} key={el.id} catalog={catalog.catalog} />
        ))}
      </div>
      <div className="movie-btn">
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
          style={{ background: "white", borderRadius: "30px", margin: "1rem" }}
        />
      </div>
    </div>
  );
};

const MovieItem = (props) => {
  const item = props.item;
  const image = `https://image.tmdb.org/t/p/w1280${item.poster_path}`;
  const title = item.original_title || item.name;
  return (
    <div className="movies__conteiner__item">
      <div className="movies__conteiner__item__image">
        <img src={image} alt="" />
        <Link to={`/detail/${item.id}/${props.catalog}`}>
          <Button className="cart-btn">
            <PlayCircleFilledWhiteIcon className="play" />
          </Button>
        </Link>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default MovieGrid;
