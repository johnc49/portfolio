import React from "react";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import Javascript from "../assets/Javascript.png";
import Bootstrapimg from "../assets/Bootstrap.png";
import Tailwind from "../assets/Tailwind.png";
import Reactjs from "../assets/React.png";
import Angular from "../assets/Angular.png";
import Vue from "../assets/Vue.png";
import Nodejs from "../assets/Node-js.png";
import Mongodb from "../assets/Mongo-DB.png";
import Mysql from "../assets/MySQL.png";
import Typescrip from "../assets/Typescript.png";
import Figma from "../assets/Figma.png";
import Python from "../assets/Python.png";

const About = () => {
  return (
    <div
      style={{ backgroundColor: "#0D0D29", color: "white" }}
      className="d-flex flex-column"
    >
      <div className="text-center about-me align-self-center">
        <h1>
          <u>About me</u>
        </h1>
        <p>
          I have experience working with HTML, CSS and JavaScript/Typescript.
          For frontend libraries I'm conversant working with bootstrap,
          Tailwind, React.js and Angular. I have gone further ahead to get an
          understanding of the backend. I currently have knowledge of node.js,
          Express. js and MongoDB.
        </p>
      </div>
      <div>
        <h1 className="text-center">
          <u>Skills</u>
        </h1>
        <div className="p-4">
          <h2>Using Now:</h2>
          <div className="d-flex flex-row justify-content-between p-3 learning">
            <img src={HTML} alt="" />
            <img src={CSS} alt="" />
            <img src={Javascript} alt="" />
            <img src={Bootstrapimg} alt="" />
            <img src={Tailwind} alt="" />
            <img src={Reactjs} alt="" />
            <img src={Vue} alt="" />
            <img src={Angular} alt="" />
          </div>
        </div>
        <div className="p-4">
          <h2>Learning:</h2>
          <div className="d-flex flex-row justify-content-between p-3 learning">
            <img src={Nodejs} alt="" />
            <img src={Mongodb} alt="" />
            <img src={Mysql} alt="" />
            <img src={Typescrip} alt="" />
            <img src={Figma} alt="" />
            <img src={Python} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
