import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./style.css";

export const Navi = () => (
  <Navbar expand="lg">
    <h2>Whats the Weather</h2>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Navbar.Brand href="https://github.com/Victord90" target="_blank">
            Git Hub
          </Navbar.Brand>
          <Navbar.Brand
            href="https://linkedin.com/in/victor-dominguez-b444b7191"
            target="blank_"
          >
            LinkedIn
          </Navbar.Brand>
          <Navbar.Brand
            href="https://victord90.github.io/Portfolio/"
            target="_blank"
          >
            Profile
          </Navbar.Brand>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navi;
