import React from 'react';
import Lottie from 'lottie-react'
import {Link} from 'react-router-dom'
import errorAnimation from '../../../public/98642-error-404.json'
import './ErrorPage.css'
import { Button } from 'react-bootstrap';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <Lottie className='error-animation' animationData={errorAnimation} loop={true}></Lottie>
            <div className='error-btn-div'>
            <Link to="/"><Button variant="outline-primary">Go to home</Button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;