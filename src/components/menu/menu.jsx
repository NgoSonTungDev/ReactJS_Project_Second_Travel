import React, { useEffect } from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import Aos from "aos";

const Navbar = () => {
  Aos.init({ duration: 1000 });
  const currentUser = localStorage.getItem("username");
  const currentAvt = localStorage.getItem("avt");

  return (
    <header class="header">
      <a href="#" class="logo" data-aos="zoom-in-left" data-aos-delay="100">
        <span>T</span>ravel
      </a>
      <nav class="navbar">
        <a id="menu1" href="" data-aos="zoom-in-left" data-aos-delay="300">
          <Link to="/travel">Home</Link>
        </a>
        <a id="menu2" href="" data-aos="zoom-in-left" data-aos-delay="450">
          <Link to="/about">About</Link>
        </a>
        <a id="menu3" href="" data-aos="zoom-in-left" data-aos-delay="600">
          <Link to="/service">Service</Link>
        </a>
        <a id="menu4" href="" data-aos="zoom-in-left" data-aos-delay="750">
          <Link to="/destination">Destination</Link>
        </a>
        <a id="menu5" href="" data-aos="zoom-in-left" data-aos-delay="900">
          <Link to="/review">Review</Link>
        </a>
        {currentUser ? (
          <a id="menu6" href="" data-aos="zoom-in-left" data-aos-delay="1150">
            <Link to="/travel" onClick={() => localStorage.clear()}>
              log out
            </Link>
          </a>
        ) : (
          <a id="menu6" href="" data-aos="zoom-in-left" data-aos-delay="1150">
            <Link to="/login">Log in</Link>
          </a>
        )}
      </nav>
      <div className="intro-user">
        <div
          className="intro-user-img"
          data-aos="zoom-in-left"
          data-aos-delay="1250"
        >
          <img src={currentAvt} alt="" />
        </div>
        <p className="user-menu" data-aos="zoom-in-left" data-aos-delay="1350">
          {currentUser}
        </p>
      </div>
    </header>
  );
};

export default Navbar;
