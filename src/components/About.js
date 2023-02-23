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
import Adobe from "../assets/Adobe.png";
import Python from "../assets/Python.png";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "#0D0D29",
        color: "white",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
      className="d-flex flex-column"
    >
      <div className="text-center about-me align-self-center">
        <h1 className="">
          <u>About me</u>
        </h1>
        <p>
          I'm a frontend web developer with experience in HTML, CSS and
          JavaScript/Typescript. From responsive to cross-browser compatibility
          using bootstrap, tailwind or plain csss. I always strive to deliver
          high-quality web solutions using frontend frameworks such as React,
          Vue and Angular. However, I also understand the importance of having a
          solid backend infrastructure to support these applications. That's why
          I am currently expanding my skillset by learning backend technologies
          such as Node.js, Express.js, MongoDB, MySQL and Python. I believe that
          by having a deep understanding of both frontend and backend
          technologies, I can deliver high-quality web solutions that meet the
          unique needs of businesses and organizations. I am committed to
          staying up to date with the latest technologies and best practices,
          and I am excited to apply my knowledge to future projects. Let's work
          together to create a web application that not only looks great but
          also performs flawlessly!
        </p>
      </div>
      <div className=" skills">
        <h1 className="text-center">
          <u>Skills</u>
        </h1>
        <div className="p-1 p-md-4">
          <h2>Using Now:</h2>
          <div className="d-flex flex-row justify-content-between p-1 p-md-3 learning">
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
        <div className="p-1 p-md-4">
          <h2>Learning:</h2>
          <div className="d-flex flex-row justify-content-between p-1 p-md-3 learning">
            <img src={Nodejs} alt="" />
            <img src={Mongodb} alt="" />
            <img src={Mysql} alt="" />
            <img src={Typescrip} alt="" />
            <img src={Figma} alt="" />
            <img src={Adobe} alt="" />
            <img src={Python} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
