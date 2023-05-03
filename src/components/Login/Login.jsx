import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const LoggedUser = result.user;
      console.log(LoggedUser);
      navigate('/')
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <div className="container reg-main-div">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="" />
        <div>
          <h1>Login</h1>
          <Form onSubmit={handleLogin}>
            
          <div className="d-flex flex-row align-items-center justify-content-center mb-4 justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" className="btn btn-primary btn-floating mx-1" >
                    <i className="fab fa-google"></i>
                  </button>

                  <button type="button" className="btn btn-primary btn-floating mx-1" >
                    <i className="fab fa-github"></i>
                  </button>
                  
                </div>

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
                label={
                  <>
                    Accept <Link to="/terms">terms and conditions</Link>
                  </>
                }
              />
            </Form.Group>
            <Button variant="primary" disabled="" type="submit">Login</Button>
            <br />
            {/* <Form.Text className="text-secondary">
          {" "}
          Already have an account?
          <Link to="/login">Login</Link>
        </Form.Text> */}
            <p className="small fw-bold mt-2 pt-1 mb-0"> Don't have an account! please <Link to="/registration" className="link-danger"> Registration here</Link>
            </p>
            <Form.Text className="text-success">.</Form.Text>
            <Form.Text className="text-danger">.</Form.Text>
          </Form>
        </div>        
      </div>
    </>
  );
};

export default Login;
