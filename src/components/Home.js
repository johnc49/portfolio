import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import dp from "../assets/dp2.svg";
import bg7 from "../assets/bg7.png";
import About from "./About";
import WhatsappIcon from "./WhatsappIcon";

import Projects from "./Projects";
import Contact from "./Contact";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
// import { Link } from "react-router-dom";
import Footer from "./Footer";
import { Link, Element } from "react-scroll";

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
          <Link
            to="about"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            {" "}
            About me
            <FaRegUser className="ms-2 names-icon" />
          </Link>
        </h4>
        <h4>
          <Link
            to="project"
            smooth={true}
            duration={100}
            style={{ cursor: "pointer" }}
          >
            {" "}
            Projects
            <BsBriefcase className="ms-2 names-icon" />
          </Link>
        </h4>
      </div>
      <div className="position-absolute g-icons">
        <a
          href="https://www.facebook.com/john.chisowa.3?mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
          className="icons"
        >
          <FaFacebook className=" pointer" />
        </a>
        <a
          href="https://www.instagram.com/john_chisowa/"
          target="_blank"
          rel="noreferrer"
          className="icons"
        >
          <FaInstagram className=" pointer" />
        </a>
        <a
          href="https://twitter.com/JchisowaJohn"
          target="_blank"
          rel="noreferrer"
          className="icons"
        >
          <FaTwitter className=" pointer" />
        </a>
        <a
          href="https://github.com/johnc49"
          target="_blank"
          rel="noreferrer"
          className="icons"
        >
          <FaGithub className=" pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/john-chisowa-922a32111/"
          target="_blank"
          rel="noreferrer"
          className="icons"
        >
          <FaLinkedin className=" pointer" />
        </a>
      </div>

      <WhatsappIcon />
      <hr></hr>
      <Element name="about">
        <About />
      </Element>
      <hr />
      <Element name="project">
        <Projects />
      </Element>
      <hr></hr>
      <Element name="contact">
        <Contact />
      </Element>
      <hr></hr>
      <Footer />
      <ScrollUpButton
        AnimationDuration={50}
        style={{ bottom: "150px", right: "40px" }}
      />
    </div>
  );
};

export default Home;
