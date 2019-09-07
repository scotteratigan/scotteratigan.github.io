import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="https://scotteratigan.github.io/">
          Scott E
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/scotteratigan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link
              href="https://scotteratigan.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
