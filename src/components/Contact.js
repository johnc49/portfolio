import React from "react";

const Contact = () => {
  return (
    <div
      className="contact-me text-center d-flex flex-column"
      style={{
        backgroundColor: "#0D0D29",
        color: "white",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <h1 className="text-center">
        <u>Contact me</u>
      </h1>
      <div className="contact-p align-self-center">
        <p>
          As a Frontend web developer, I create beautiful and user-friendly
          websites. Whether you already have your design in figma or XD or you
          need a new website designwhich needs to be created in React, Vue or
          Angular.I'm here to help you.<br></br>
          Please feel free to contact me. I look forward to hearing from you!
        </p>
      </div>
      <div>
        <h5>
          Email: <span>&nbsp; johncweb01@gmail.com</span>
        </h5>

        <h5>
          Phone: <span>&nbsp; +260 973 18 6816.</span>
        </h5>
        <h5>
          Location: <span>&nbsp; Lusaka, Zambia.</span>
        </h5>
      </div>
    </div>
  );
};

export default Contact;
