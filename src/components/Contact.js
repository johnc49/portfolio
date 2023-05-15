import React from "react";

const Contact = () => {
  return (
    <div
      className="contact-me d-flex flex-column"
      style={{
        backgroundColor: "#0D0D29",
        color: "white",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <h1 className="text-center align-self-center">
        <u>Contact me</u>
      </h1>
      <div className="contact-p ">
        <p>
          Thank you for visiting my portfolio! I'm thrilled to connect and
          discuss potential opportunities or collaborations. Please feel free to
          reach out to me through any of the following channels:<br></br>
        </p>
      </div>
      <div>
        <h5>
          Email:{" "}
          <span>
            &nbsp;{" "}
            <a
              href="mailto:johncweb01@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact-tag"
            >
              Johncweb01@gmail.com
            </a>
          </span>
        </h5>

        <h5>
          Linkedin:{" "}
          <span>
            &nbsp;{" "}
            <a
              href="https://www.linkedin.com/in/john-chisowa-922a32111/"
              target="_blank"
              rel="noreferrer"
              className="contact-tag"
            >
              John_Chisowa
            </a>
          </span>
        </h5>
        <h5>
          Github:{" "}
          <span>
            &nbsp;{" "}
            <a
              href="https://github.com/johnc49"
              target="_blank"
              rel="noreferrer"
              className="contact-tag"
            >
              John_Chisowa
            </a>
          </span>
        </h5>
      </div>
      <div className="contact-p ">
        <p>
          I'm always open to engaging in meaningful conversations about frontend
          web development, innovative projects, or any other related topics.
          Whether you have a project idea, a job opportunity, or simply want to
          connect, I look forward to hearing from you. Let's bring your ideas to
          life together!
        </p>
      </div>
    </div>
  );
};

export default Contact;
