import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="footer d-flex flex-row justify-content-between align-items-center"
      style={{
        backgroundColor: "#AEB3D1",
        color: "black",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <h5>
        &copy; 2023 John Chisowa <span>All Rights Reserved.</span>
      </h5>
      <div className=" g-icons">
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
    </div>
  );
};

export default Footer;
