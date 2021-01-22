import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navBar.css";

import logo from "../images/cube.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";

import LandingPage from "../screens/LandingPage";
import AboutMe from "../screens/AboutMe";
import Skills from "../screens/Skills";
import Projects from "../screens/Projects";
import Experience from "../screens/Experience";
import Education from "../screens/Education";
import Contact from "../screens/Contact";

const NavBar = () => {
  return (
    <Router basename="/">
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="bg-navBar"
        variant="dark"
      >
        <Navbar.Brand>
          <a href="/" className="rounded float-left">
            <img
              src={logo}
              alt="Leonoronhas cube logo"
              className="rotate-center-cube"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">
              <div className="bg-link">ABOUT</div>
            </Nav.Link>
            <Nav.Link href="/skills">
              <div className="bg-link">SKILLS</div>
            </Nav.Link>
            <Nav.Link href="/projects">
              <div className="bg-link">PROJECTS</div>
            </Nav.Link>
            <Nav.Link href="/experience">
              <div className="bg-link">EXPERIENCE</div>
            </Nav.Link>
            <Nav.Link href="/education">
              <div className="bg-link">EDUCATION</div>
            </Nav.Link>
            <Nav.Link href="/contact">
              <div className="bg-link">CONTACT</div>
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link
              href="https://drive.google.com/file/d/11IilOU2Im4D-gh9nFEUCe_rFWSRE81Q9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-link-resume">RESUME</div>
            </Nav.Link>
            <Nav.Link
              href="https://www.github.com/leonoronhas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={github} alt="GitHub icon" className="rotate-center" />
              </div>
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/leonardo-santos1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src={linkedin}
                  alt="LinkedIn icon"
                  className="rotate-center"
                />
              </div>
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/leonoronhas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src={instagram}
                  alt="Instagram icon"
                  className="rotate-center"
                />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="bottom"
        className="bg-navBar"
        variant="dark"
      >
        <Container className="justify-content-center">
          <Nav>
            <p className="bg-link">
              Created and designed by Leo Noronha Santos | All rights reserved ®
            </p>
          </Nav>
        </Container>
      </Navbar>

      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={AboutMe} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/experience" component={Experience} />
      <Route path="/education" component={Education} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

export default NavBar;
