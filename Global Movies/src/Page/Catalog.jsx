import React from "react";
import banner from "../assets/footer-bg.jpg";
import MovieGrid from "../Components/movieGrid/MovieGrid";
import { useParams } from "react-router-dom";
import "../Components/movieGrid/movieGrid.scss";
import { useState } from "react";
const Catalog = () => {
  const [value, setValue] = useState("");
  const { catalog } = useParams();
  const Hendlerinput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="movies">
      <div
        className="movies-banner"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="search">
        <input
          type="text"
          name="text"
          placeholder="Search"
          id=""
          onChange={(e) => Hendlerinput(e)}
        />
      </div>
      <MovieGrid catalog={catalog} value={value} />
    </div>
  );
};

export default Catalog;
