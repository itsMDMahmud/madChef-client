import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    console.log('user 9in a private route', user);
    if(loading){
        return <Spinner animation="border" variant="secondary" />
    }
    

    if (user) {
        return children
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;

/**
 * check user is logged in or not
 * if user is logged in then allow them to visit the route
 * else reditect user to the login page
 * set up the private router
*/