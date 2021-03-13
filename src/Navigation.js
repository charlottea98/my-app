import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';

function Navigation(){

    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand>Charlotte Andersson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link >About me</Nav.Link>
          <Nav.Link >Work</Nav.Link>
          <Nav.Link >Projects</Nav.Link>
          <Nav.Link >Contact</Nav.Link>
          </Nav>
          <Button variant="outline-light" className="mr-sm-2">Resume</Button>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigation;