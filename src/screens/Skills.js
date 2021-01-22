import React from "react";
import Typist from "react-typist";

import "../css/skills.css";
import "../css/animate.css";

const Skills = (props) => {
  return (
    <div className="container">
      <div className="title">
        <Typist avgTypingDelay={150}>
          Skills
        </Typist>
      </div>
      <div className="skillsorganizer">
        <div className="intro-landing animated fadeInUp delay-1s">
          <div className="content">
            <div className="skills">
              <p className="titles">
                <strong>Languages</strong>
              </p>
              <li>JavaScript</li>
              <li>Java</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>C++</li>
            </div>
          </div>
        </div>
        <div className="intro-landing animated fadeInUp delay-1s">
          <div className="content">
            <div className="skills">
              <p className="titles">
                <strong>Web Dev</strong>
              </p>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Git</li>
              <li>React.js</li>
              <li>Firebase</li>
              <li>MERN stack</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>mongoose</li>
              <li>axios</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap CSS</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Heroku</li>
              <li>RESTful API</li>
              <li>npm</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>GitHub</li>
              <li>Selenium</li>
            </div>
          </div>
        </div>
        <div className="intro-landing animated fadeInUp delay-1s">
          <div className="content">
            <div className="skills">
              <p className="titles">
                <strong>Mobile Dev</strong>
              </p>
              <li>React Native</li>
              <li>JSX</li>
              <li>Expo</li>
              <li>Redux / Hooks</li>
              <li>Firebase</li>
              <li>MERN stack</li>
              <li>MongoDB</li>
              <li>Heroku</li>
              <li>RESTful API</li>
              <li>npm</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>mongoose</li>
              <li>axios</li>
              <li>Android</li>
              <li>Android Studio</li>
            </div>
          </div>
        </div>
        <div className="intro-landing animated fadeInUp delay-1s">
          <div className="content">
            <div className="skills">
              <p className="titles">
                <strong>Tools</strong>
              </p>
              <li>Git</li>
              <li>Git Branching</li>
              <li>GitHub</li>
              <li>Selenium WebDriver</li>
              <li>IntelliJ IDEA</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Insomnia</li>
              <li>Android Studio</li>
              <li>Azure DevOps</li>
              <li>Microsoft Azure</li>
              <li>Visual Studio IDE</li>
            </div>
          </div>
        </div>
        <div className="intro-landing animated fadeInUp delay-1s">
          <div className="content">
            <div className="skills">
              <p className="titles">
                <strong>Other</strong>
              </p>
              <li>Problem Solving</li>
              <li>Quality Assurance</li>
              <li>Agile Methodologies</li>
              <li>SCRUM</li>
              <li>Data Structures</li>
              <li>OOP</li>
              <li>Project Management</li>
              <li>Manual Testing</li>
              <li>Test Automation</li>
              <li>Test Cases</li>
              <li>Design Patterns</li>
              <li>Leadership</li>
              <li>Portuguese (Native)</li>
              <li>Team Player</li>
              <li>Organization</li>
              <li>Customer Service</li>
              <li>Time Management</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
