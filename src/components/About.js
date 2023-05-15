import React from "react";
//import HTML from "../assets/HTML.png";
//import CSS from "../assets/CSS.png";
//import Javascript from "../assets/Javascript.png";
//import Bootstrapimg from "../assets/Bootstrap.png";
//import Tailwind from "../assets/Tailwind.png";
import Reactjs from "../assets/React.png";
import Angular from "../assets/Angular.png";
import Vue from "../assets/Vue.png";
import Nodejs from "../assets/Node-js.png";
import Mongodb from "../assets/Mongo-DB.png";
import Mysql from "../assets/MySQL.png";
// import Typescrip from "../assets/Typescript.png";
//import Figma from "../assets/Figma.png";
//import Adobe from "../assets/Adobe.png";
//import Python from "../assets/Python.png";

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
          As a skilled Frontend Web Developer, I bring extensive experience in
          React, Vue, and Angular frameworks, along with a strong foundation in
          HTML, CSS, and JavaScript. I have successfully developed and deployed
          interactive and responsive websites, demonstrating my ability to
          transform design concepts into functional and visually appealing user
          interfaces. In addition to my frontend expertise, I am currently
          expanding my skill set to include backend technologies such as
          Node.js, MongoDB, and MySQL. Through self-directed learning and
          hands-on projects, I am gaining a solid understanding of server-side
          programming, RESTful APIs, and database management. I am committed to
          staying up to date with the latest technologies and best practices. I
          am excited to leverage my frontend development expertise and expanding
          backend skills to create exceptional web experiences and contribute to
          the success of your team or organization.
        </p>
      </div>
      <div className=" skills">
        <h1 className="text-center">
          <u>Skills</u>
        </h1>
        <div className="p-1 p-md-4">
          <h2>Using Now:</h2>
          <div className="d-flex flex-row justify-content-between p-1 p-md-3 learning">
            {/* <img src={HTML} alt="" />
            <img src={CSS} alt="" /> */}
            {/* <img src={Javascript} alt="" /> */}
            {/* <img src={Bootstrapimg} alt="" />
            <img src={Tailwind} alt="" /> */}
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
            {/* <img src={Typescrip} alt="" /> */}
            {/* <img src={Figma} alt="" />
            <img src={Adobe} alt="" /> */}
            {/* <img src={Python} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
