import React from "react";
import Typist from "react-typist";

import "../css/education.css";
import "../css/animate.css";

const Education = (props) => {
  return (
    <div className="container">
      <div className="title">
        <Typist avgTypingDelay={150}>Education</Typist>
      </div>
      <div className="educationorganizer">
        <div className="intro-landing animated fadeInUp delay-1s">
          <div className="content">
            <div className="education">
              <p className="titles">
                <strong>Brigham Young University Idaho</strong>
              </p>
              <h4>Bachelor of Software Engineering</h4>
              <li>GPA: 3.91</li>
              <li>Graduation: April 2022 </li>
              <br />
              <p>
                <strong>Coursework:</strong>
              </p>
              <li>CS 124 Programming Fundamentals (C++)</li>
              <li>CS 165 Object Oriented Programming (C++)</li>
              <li>CS 213 Web Engineering I (HTML, CSS, JavaScript, PHP)</li>
              <li>CS 235 Data Structures (C++)</li>
              <li>CS 246 Software Design & Development (Java, Android)</li>
              <li>CS 308 Technical Communications</li>
              <li>CSE 341 Web Backend (Node.js, Express.js, MongoDB)</li>
              <li>CS 364 Software Engineering (SRS, SDD)</li>
              <li>CSE 471 User Interface Eval & Design</li>
            </div>
          </div>
        </div>
        <div className="intro-landing animated fadeInUp delay-1s">
          <div className="content">
            <div className="education">
              <p className="titles">
                <strong>Ensign Business College</strong>
              </p>
              <h4>Associates of Server Administration</h4>
              <li>GPA: 3.78</li>
              <li>Graduation: December 2017</li>
              <br />
              <p>
                <strong>Coursework:</strong>
              </p>
              <li>CS 112 Programming Fundamentals (Java)</li>
              <li>CS 130 Intro to Windows Server Admin</li>
              <li>CS 210 Linux Administration</li>
              <li>CS 214 Systems Analysis & Design</li>
              <li>CS 232 Adv. Windows Server Admin</li>
              <li>CS 270 Advanced Linux w/LAMP</li>
            </div>
            <br />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Education;
