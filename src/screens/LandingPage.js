import React from "react";
import Typist from "react-typist";

import "../css/animate.css";
import "../css/landingPage.css";

const LandingPage = (props) => {
  return (
    <div className="contentOrganizer">
      <div className="container">
        <div className="page-section landing-page-section">
          <div className="body-landing">
            <h1 className="header-landing">
              <Typist
                startDelay={700}
                avgTypingDelay={100}
                className="text-area"
              >
                Hello world
              </Typist>
            </h1>
            <p className="intro-landing animated fadeInUp delay-2s">I'm Leo</p>
            <p className="title-landing animated fadeInUp delay-3s">
              a software engineer
            </p>
          </div>
        </div>
        <div className="title-landing animated fadeInUp delay-4s">
          <div>
            <a className="buttonStyle" href="/about">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
