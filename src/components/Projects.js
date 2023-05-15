import React from "react";

import els from "../assets/els.png";
// import admin from "../assets/admin-dash.png";
import landing from "../assets/q-landing.png";
import dash from "../assets/dash-board.png";

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
        <div className="outer-card">
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

          {/* <div className="card project-card d-flex flex-column">
            <img
              src={admin}
              className="card-img-top align-self-center mt-1"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title text-primary">
                Simple Admin Dash Board
              </h5>
              <p className="card-text">
                A simple admin dash board built using angular 15, it shows the
                number of sms sent by each network provider. It also shows how
                many sms were successful and how many failed. This information
                is shown in a pie chart and a line chart for easy analysis
              </p>
              <div className="card-links d-flex flex-row justify-content-between">
                <a
                  href="https://qualis-simple-admin.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/johnc49/simple-admin"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Page
                </a>
              </div>
            </div>
          </div> */}

          <div className="card project-card d-flex flex-column">
            <img
              src={landing}
              className="card-img-top align-self-center mt-1"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title text-primary">Landing Page</h5>
              <p className="card-text">
                A landing page website for a company created using angular 15
                which offers loans for SME and civil servants. Users can
                navigate through pages and see the offers of the comapny and
                apply for a loan
              </p>
              <div className="card-links d-flex flex-row justify-content-between">
                <a
                  href="https://q-landing-page.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/johnc49/qalis-ng2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Page
                </a>
              </div>
            </div>
          </div>

          <div className="card project-card d-flex flex-column">
            <img
              src={dash}
              className="card-img-top align-self-center mt-1"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title text-primary">User Dash Board</h5>
              <p className="card-text">
                A User dash board for a loan website created using angular 15. A
                user can login, upload documents and apply for a loan, check
                loan balance, track trasctions and make loan payments.
              </p>
              <div className="card-links d-flex flex-row justify-content-between">
                <a
                  href="https://q-dash-b.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/johnc49/qualis-ng"
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
