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
        <div style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center"}}>
          <img src="" alt="Chat logo"/>
        <a href="https://calendly.com/leonoronhas/chat-with-me" className="bg-link-chat">LET&#x27;S CHAT!</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;