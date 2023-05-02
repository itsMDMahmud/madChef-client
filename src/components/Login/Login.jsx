import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login = () => {
  return (
    <>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-2 d-flex flex-column align-items-center" >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"> Login </p>

                <div class="d-flex flex-row align-items-center justify-content-center mb-4 justify-content-lg-start">
                  <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" class="btn btn-primary btn-floating mx-1" >
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-primary btn-floating mx-1" >
                    <i class="fab fa-github"></i>
                  </button>
                  
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput label="Your Email" id="form2" type="email" required />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput label="Password" id="form3" type="password" required/>
                </div>

                <div className="mb-4">
                  <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
                </div>

                <MDBBtn className="mb-4" size="lg"> Login </MDBBtn>
                <p class="small fw-bold mt-2 pt-1 mb-0"> Don't have an account?{" "}
                  <Link to="/registration" class="link-danger"> Registration </Link> here. </p>
              </MDBCol>

              <MDBCol md="10" lg="6" className="order-1 order-lg-1 d-flex align-items-center" >
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Login;
