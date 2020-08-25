import React from "react";
import Typist from "react-typist";

import "animate.css/animate.min.css";
import "../css/aboutMe.css";
import "../css/animate.css";

const AboutMe = (props) => {
  return (
    <div className="container">
      <div className="title">
        <Typist avgTypingDelay={150}>
          About
        </Typist>
      </div>
      <div className="intro-landing animated fadeInUp delay-1s">
        <div className="contentPicture">
          <p>
            Hi, I am Leonardo Noronha Santos but you can call me Leo. I am a
            Software Engineer that is passionate about coding and creating
            awesome software. I love learning new technologies and building
            stuff from start to finish. Specially mobile applications!
          </p>
        </div>
      </div>
      <div className="intro-landing animated fadeInUp delay-1s">
        <div className="contentPicture">
          <div className="favorites">
            <p className="favoriteTitle">
              <strong>Favorites</strong>
            </p>
            <p>
              <strong>Food:</strong> Chocolate chip ice cream, Brazilian
              strogonoff
            </p>
            <p>
              <strong>Sports:</strong> Soccer, Volleyball
            </p>
            <p>
              <strong>Video Games:</strong> FIFA, Assassin's Creed, GTA, Tom
              Clancy's series
            </p>
            <p>
              <strong>Movie genres:</strong> Action, War, Fantasy
            </p>
          </div>
          <img
            src="https://raw.githubusercontent.com/leonoronhas/portfolio/master/src/images/picture.png"
            alt="Portrait of Leo Santos"
            className="pictureMe"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
