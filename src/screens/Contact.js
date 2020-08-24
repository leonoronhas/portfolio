import React from "react";
import Typist from "react-typist";

import "../css/contact.css";
import "../css/animate.css";

const Contact = (props) => {
  return (
    <div className="container">
      <div className="title">
        <Typist startDelay={1000} avgTypingDelay={100}>
          Contact
        </Typist>
      </div>
      <div className="intro-landing animated fadeInUp delay-2s">
        <div className="content">
          <p>Hello guys!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;