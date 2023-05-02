import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { FaTh, FaUser, FaUserAlt, FaUserCircle,  } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";

const Header = () => {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 px-5 d-flex align-items-center justify-content-center">
          <Container fluid>
            <Navbar.Brand> <h1>MadChef</h1> </Navbar.Brand>
            <Navbar.Toggle
              className=""
              aria-controls={`offcanvasNavbar-expand-${expand}`}> <FaTh/> </Navbar.Toggle>
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Madchef </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link className="fs-4" to="/"> Home </Nav.Link>
                  <Nav.Link className="fs-4" href="#action2">
                    Blog
                  </Nav.Link>
                  <Nav.Link className="fs-4" href="#action3">
                    Link
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Form className=" d-flex align-items-center">
              <FaUserCircle className="fs-2 me-2"></FaUserCircle>
              <button type="button" className="btn btn-primary">
                Login
              </button>
            </Form>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
