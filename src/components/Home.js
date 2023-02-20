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
          <a href="/about">
            {" "}
            About me
            <FaRegUser className="ms-2 names-icon" />
          </a>
        </h4>
        <h4>
          <a href="/projects">
            {" "}
            Projects
            <BsBriefcase className="ms-2 names-icon" />
          </a>
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
      <About />
    </div>
  );
};

export default Home;
