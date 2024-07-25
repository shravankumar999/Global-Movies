import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/tmovie.png";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
const Navlist = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "Tv Series",
    path: "/tv",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("shrink");
      } else headerRef.current.classList.remove("shrink");
    });

    return () => window.removeEventListener("scroll");
  }, []);
  const active = Navlist.findIndex((el) => el.path === pathname);

  return (
    <div ref={headerRef} className="header">
      <div className="header__Wrap Conteiner">
        <div className="header__Logo">
          <img src={logo} alt="" />
          <Link to="/">Global Movies</Link>
        </div>
        <div className="header__Nav">
          <ul>
            {Navlist.map((el, i) => {
              return (
                <li key={i} className={`${i === active ? "active" : ""}`}>
                  <Link to={`${el.path}`}>{el.display}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
