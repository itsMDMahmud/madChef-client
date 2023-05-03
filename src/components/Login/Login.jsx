import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log( 'login page location',location);
  const from = location.state?.from?.pathname || '/';


  const handleGoogleSignIn = () => {
    // console.log('google is coming');
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    }) 
    .catch(error => {
      console.log('error', error.message);
    })
  }


  const handleGithubSignIn = () => {
    // console.log('github is coming');
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    }) 
    .catch(error => {
      console.log('error', error.message);
    })
  }


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
      navigate(from, {replace: true})
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
                  <button onClick={handleGoogleSignIn} type="button" title="Login with Google" className="btn btn-primary btn-floating mx-1" >
                    <i className="fab fa-google"></i>
                  </button>

                  <button onClick={handleGithubSignIn} type="button" title="login with Github" className="btn btn-primary btn-floating mx-1" >
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
                label={<> Remember me </>} />
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
