import React from "react";
import "./footer.scss";
import logo from "../../assets/tmovie.png";
import { Link } from "react-router-dom";
import bg from "../../assets/footer-bg.jpg";
import Sine from "../authorSine/Sine";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content">
        <div className="footer__content__logo">
          <img src={logo} alt="" />
          <Link to="/">Global movies</Link>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Terms of service</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a href="https://github.com/shravankumar999" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </span>
          <br/><br/>
          <span className="icon">
            <a href="https://www.linkedin.com/in/vardalle-shravan-kumar-06b025301/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
          </span>
          <br/><br/>
          
        </div>
      </div>
      <Sine />
    </div>
  );
};

export default Footer;
