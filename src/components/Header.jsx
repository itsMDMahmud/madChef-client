import React, { useContext} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import { FaTh, FaUser, FaUserAlt, FaUserCircle,  } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import { AuthContext } from "../providers/AuthProvider";


const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.log(error))
  }
  // console.log(user); 

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="" expand={expand} className="mb-3 container d-flex align-items-center justify-content-center">
          <Container fluid>
            <Navbar.Brand> <NavLink to='/' className='heading' ><h1>MadChef</h1></NavLink> </Navbar.Brand>
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
                <nav className="justify-content-center d-flex flex-grow-1 pe-3">
                <NavLink className="fs-4 mx-2" exact activeClassName="active" to="/"> Home </NavLink>                
                <NavLink className="fs-4 mx-2" activeClassName="active" to="/blog"> Blog </NavLink>     
                <NavLink className="fs-4 mx-2" activeClassName="active" to="https://www.facebook.com/itsMDMahmud">About</NavLink>     
                
                </nav>                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {user && <Form className=" d-flex align-items-center">
              
              <img src={user?.photoURL} alt="img" title={user.displayName} className="header-img" />              
              {/* <FaUserCircle className="fs-2 me-2"></FaUserCircle> */}
            </Form>}
            {user ? 
              (<button onClick={handleLogOut} type="button" className="btn btn-secondary"> Log Out </button>) 
            : 
              (<NavLink to='/login'>                
              <button type="button" className="btn btn-primary"> Login </button>
            </NavLink>)
            }
          </Container>
        </Navbar>
      ))}
    </>
  );
};


export default Header;
//<NavLink className="fs-4 mx-2" to="/"> Home </NavLink>
//<NavLink className="fs-4 mx-2" to=""> Blog </NavLink>
//<NavLink className="fs-4 mx-2" to=""> Link </NavLink>

