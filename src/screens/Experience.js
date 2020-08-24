import React from "react";
import Typist from "react-typist";

import "../css/experience.css";
import "../css/animate.css";

const Experience = (props) => {
  return (
    <div className="container">
      <div className="title">
        <Typist startDelay={1000} avgTypingDelay={100}>
          Experience
        </Typist>
      </div>
      <div className="experienceorganizer">
        <div className="intro-landing animated fadeInUp delay-2s">
          <div className="content">
            <div className="experience">
              <p className="titles">
                <strong>Software Quality Assurance Engineer</strong>
              </p>
              <h4>The Church of Jesus Christ of Latter Day Saints</h4>
              <h6>Riverton, Utah | 01/2020 - 05/2020</h6>
              <li>
                Worked closely with solution managers, developers, and QA
                engineers across multiple teams to test integrations between
                complex systems
              </li>
              <li>
                Analyzed system logs using Splunk as part of the debugging
                process
              </li>
              <li>
                Worked in an agile/scrum environment with two week sprints
              </li>
              <li>
                Tested builds and procedures with different test cases before
                each deploy
              </li>
              <li>
                Documented test cases and tracked user stories in Azure DevOps
              </li>
              <li>
                Created 15 test automation from scratch using Java and Selenium
                WebDriver in a department where automation was not being
                implemented, decreasing testing times by 66% while performing
                manual Browser UI testing when appropriate
              </li>
            </div>
          </div>
        </div>
        <div className="intro-landing animated fadeInUp delay-3s">
          <div className="content">
            <div className="experience">
              <p className="titles">
                <strong>Faculty Technology Assistant</strong>
              </p>
              <h4>Brigham Young University Idaho</h4>
              <h6>Rexburg, Idaho | 02/2019 - Present</h6>
              <li> Train all faculty with current and new technologies</li>
              <li>
                Provide tutorials to make sure all the software required is
                presented at the highest level of proficient and comply with the
                Universities Standards and protocols
              </li>
              <li>Support through Email, office visits, and phone calls</li>
            </div>
          </div>
        </div>
        <div className="intro-landing animated fadeInUp delay-4s">
          <div className="content">
            <div className="experience">
              <p className="titles">
                <strong>IT Business Analyst</strong>
              </p>
              <h4>American Express</h4>
              <h6>Taylorsville, Utah | 01/2016 - 11/2018</h6>
              <li>
                Provided support as a liaison between Amex’s selling partners,
                banks, and the IT organization, providing the best solution to
                meet customer needs, including product development and all
                phases of product testing
              </li>
              <li>
                Provided 2nd level technical support with the back-end
                setting-up and enabling of multiple Brazilian, America, South
                Africa, and Indian bank partners
              </li>
              <li>
                Managed, activated, and launched 1000+ Bank branches, malls and
                other selling locations
              </li>
              <li>
                Organized the end-to-end automation process of internal and
                external business partners
              </li>
              <li>
                Highest numbers/performance among coworkers in achieving the SLA
                in projects/tasks
              </li>
              <li>
                Ticketing creation and management of cases in a timely and
                knowledgeable manner
              </li>
              <li>
                Assisted in identifying and escalating emerging trends and
                issues to management
              </li>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
