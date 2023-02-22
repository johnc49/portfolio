import React from "react";

import dp from "../assets/dp2.svg";
import bg7 from "../assets/bg7.png";
import About from "./About";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home position-relative">
      <div className=" d-md-flex position-relative d-none">
        <img className="bg" src={bg7} alt="" />
        <div className="position-absolute div-dp">
          <img className="dp" src={dp} alt="" />
        </div>
      </div>
      <div className="position-relative d-md-none">
        <img className="bg" src={bg7} alt="" />
        <div className="position-absolute div-dp">
          <img className="dp" src={dp} alt="" />
        </div>
      </div>
      <div className="position-absolute names">
        <h2>Hi, I am</h2>
        <h1>John Chisowa</h1>
        <h5>Front-end Developer</h5>
      </div>
      <div className=" position-absolute d-flex names2">
        <h4 className="me-3">
          <Link to="/about">
            {" "}
            About me
            <FaRegUser className="ms-2 names-icon" />
          </Link>
        </h4>
        <h4>
          <Link to="/projects">
            {" "}
            Projects
            <BsBriefcase className="ms-2 names-icon" />
          </Link>
        </h4>
      </div>
      <div className="position-absolute g-icons">
        <a href="/" className="icons">
          <FaFacebook className=" pointer" />
        </a>
        <a href="/" className="icons">
          <FaInstagram className=" pointer" />
        </a>
        <a href="/" className="icons">
          <FaTwitter className=" pointer" />
        </a>
        <a href="/" className="icons">
          <FaGithub className=" pointer" />
        </a>
        <a href="/" className="icons">
          <FaLinkedin className=" pointer" />
        </a>
      </div>
      <hr></hr>
      <About />
    </div>
  );
};

export default Home;
