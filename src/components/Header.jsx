import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 px-5">
          <Container fluid>
            <Navbar.Brand href="#"><h1>Mad Chef</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link className='fs-4' href="#action1">Home</Nav.Link>
                  <Nav.Link className='fs-4' href="#action2">Blog</Nav.Link>
                  <Nav.Link className='fs-4' href="#action2">Link</Nav.Link>
                  
                </Nav>
                <Form className="d-flex">                  
                <button type="button" className="btn btn-outline-success">Login</button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    );
};

export default Header;