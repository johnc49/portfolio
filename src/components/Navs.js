import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo5.png";

import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars, FaRegUser } from "react-icons/fa";
import { BsBriefcase, BsCardChecklist } from "react-icons/bs";

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineContactPhone } from "react-icons/md";

const Navs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="position-relative">
      <nav
        className="d-flex flex-row justify-content-between"
        style={{ height: "60px", width: "100%", background: "#AEB3D1" }}
      >
        <div className="logo">
          <img
            className="w-100"
            style={{ borderRadius: "50px" }}
            src={logo}
            alt=""
          />
        </div>
        <div
          className=" d-md-flex  fw-bold d-none"
          style={{ fontSize: "19px" }}
        >
          <Link to="/" className="nav-li">
            {" "}
            <AiOutlineHome className="me-1 mb-1" style={{ color: "095BFF" }} />
            Home
          </Link>
          <Link to="/about" className="nav-li">
            {" "}
            <FaRegUser className="me-1 mb-1" style={{ color: "095BFF" }} />
            About me
          </Link>
          <Link to="/projects" className="nav-li">
            {" "}
            <BsBriefcase className="me-1 mb-1" style={{ color: "095BFF" }} />
            Projects
          </Link>
          <Link to="/contact" className="nav-li">
            <MdOutlineContactPhone
              className="me-1 mb-1"
              style={{ color: "095BFF" }}
            />
            Contact me
          </Link>
          <a
            href="./images/JCV.pdf"
            style={{
              marginTop: "10px",
              marginRight: "50px",
              backgroundColor: "#095BFF",
              borderRadius: "10px",
              height: "43px",
              padding: "5px",
              fontWeight: "normal",
              color: "white",
            }}
            className="dw"
            download="John Chisowa CV"
          >
            {" "}
            <BsCardChecklist className="me-1" />
            Download CV
          </a>
        </div>
      </nav>
      <div className="d-md-none position-absolute top-0 end-0">
        <FaBars
          className="fs-1 cursor-pointer"
          variant="primary"
          onClick={handleShow}
          style={{ marginTop: "15px", marginRight: "1px" }}
        />

        <Offcanvas
          placement="end"
          show={show}
          onHide={handleClose}
          style={{ width: "50%", background: "#AEB3D1" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <p className="logo-off fw-bold d-flex flex-column">
                John Chisowa
                <span className="">(frontend developer)</span>
              </p>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div
              className=" d-flex flex-column  fw-bold "
              style={{ fontSize: "14px", marginTop: "-35px" }}
            >
              <Link to="/" className="nav-li2">
                {" "}
                <AiOutlineHome className="me-1" style={{ color: "095BFF" }} />
                Home
              </Link>
              <Link to="/about" className="nav-li2">
                {" "}
                <FaRegUser className="me-1" style={{ color: "095BFF" }} />
                About me
              </Link>
              <Link to="/projects" className="nav-li2">
                {" "}
                <BsBriefcase className="me-1" style={{ color: "095BFF" }} />
                Projects
              </Link>
              <Link to="/contact" className="nav-li2">
                <MdOutlineContactPhone
                  className="me-1"
                  style={{ color: "095BFF" }}
                />
                Contact me
              </Link>
              <a
                href="./images/JCV.pdf"
                style={{
                  marginTop: "15px",
                  backgroundColor: "#095BFF",
                  borderRadius: "10px",
                  height: "35px",
                  padding: "5px",
                  fontWeight: "normal",
                  color: "white",
                  width: "150px",
                }}
                className="dw"
                download="John Chisowa CV"
              >
                {" "}
                <BsCardChecklist className="me-1" style={{ color: "white" }} />
                Download cv
              </a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Navs;
