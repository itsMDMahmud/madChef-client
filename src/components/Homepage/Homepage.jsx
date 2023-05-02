import React from 'react';
import Header from '../Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Footer';

const Homepage = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </>
    );
};

export default Homepage;