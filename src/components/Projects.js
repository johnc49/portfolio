import React from "react";

import els from "../assets/els.png";

const Projects = () => {
  return (
    <div
      className="projects"
      style={{
        backgroundColor: "#0D0D29",
        color: "white",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <h1 className="text-center ">
        <u>Projects</u>
      </h1>
      <div className="full-card">
        <p className="">
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects.
        </p>
        <div>
          <div className="card project-card d-flex flex-column">
            <img
              src={els}
              className="card-img-top align-self-center mt-1"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title text-primary">El's Worth</h5>
              <p className="card-text">
                An electrical company website created using React.js which
                offers products and services. A user can login or signup in
                order to buy a product or request for a service such as
                electrical wiring.
              </p>
              <div className="card-links d-flex flex-row justify-content-between">
                <a
                  href="https://elsworth-b.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/johnc49/ELS-WORTH-R"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
