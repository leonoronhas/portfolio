import React from "react";
import Typist from "react-typist";

import Card from "../components/Card";
import projectsData from "../data/projectsData";

import "../css/projects.css";
import "../css/animate.css";

const Projects = (props) => {

  const { projects } = projectsData;

  const getProjects = () => {
    return projects.map((item, index) => {
      return (
        <div className="organizer" key={index}>
          <Card
            title={item.name}
            url={item.url}
            img={item.img}
            tech={item.technologies}
          />
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="title">
        <Typist avgTypingDelay={150}>
          Projects
        </Typist>
      </div>
      <div className="intro-landing animated fadeInUp delay-1s">
        <div className="content">{getProjects()}</div>
      </div>
    </div>
  );
};

export default Projects;
