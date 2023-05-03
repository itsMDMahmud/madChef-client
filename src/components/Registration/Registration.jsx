import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';

const Registration = () => {

  const handleRegister = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);
  }

  return (
    
    <div className='container reg-main-div'>
      <div>
        <h1>Registration</h1>
      <Form className='' onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </Form.Group>        
        <Form.Group className="mb-3" controlId="formBasicURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter url"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check   
          type="checkbox" 
          name="accept" 
          label={<>Accept <Link to="/terms">terms and conditions</Link></>} />
        </Form.Group>
        <Button variant="primary" disabled= "" type="submit">
          {" "}
          Submit{" "}
        </Button>
        <br />
        {/* <Form.Text className="text-secondary">
          {" "}
          Already have an account?
          <Link to="/login">Login</Link>
        </Form.Text> */}
        <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account! please <Link to="/login" className="link-danger">Login</Link></p>
        <Form.Text className="text-success">.</Form.Text>
        <Form.Text className="text-danger">.</Form.Text>
      </Form>
      </div>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="" />
    </div>
  );
};

export default Registration;
