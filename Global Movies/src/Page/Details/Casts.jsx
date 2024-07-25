import React, { useState, useEffect } from "react";
import axios from "axios";
import "./detail.scss";

const Casts = (props) => {
  const [casts, setCasts] = useState([]);
  const id = props.id;
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=04c35731a5ee918f014970082a0088b1`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCasts(response.data.cast.slice(0, 5));
    });
  }, []);

  return (
    <>
      {casts.map((el) => {
        return (
          <div key={el.id} className="cast-wrap">
            <img
              src={`${`https://image.tmdb.org/t/p/w1280` + el.profile_path}`}
              alt=""
            />
            <p>{el.original_name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Casts;
