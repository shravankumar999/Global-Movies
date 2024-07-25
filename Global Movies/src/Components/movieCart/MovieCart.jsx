import { style } from "@mui/system";
import React from "react";
import "./movieCart.scss";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import Button from "../button/Button";
import { Link } from "react-router-dom";
const MovieCart = (props) => {
  const item = props.item;
  const background = `${`https://image.tmdb.org/t/p/w1280` + item.poster_path}`;
  const title = item.title;

  return (
    <div
      className="movie-cart"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Link to={`/detail/${item.id}/${props.catalog}`}>
        <Button className="cart-btn">
          <PlayCircleFilledWhiteIcon className="play" />
        </Button>
      </Link>
      <p>{title}</p>
    </div>
  );
};

export default MovieCart;
