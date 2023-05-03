import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer text-center text-base-content text-white p-3">
  <div className=" g-4 ">
    <a className="m-3 text-decoration-none text-white">About us</a> 
    <a className="m-3 text-decoration-none text-white">Contact</a> 
    <a className="m-3 text-decoration-none text-white">Jobs</a> 
    <a className="m-3 text-decoration-none text-white">Press kit</a>
  </div> 
  <div>
    <div className="m-3">
      <a className="m-3"><FaTwitter/></a> 
      <a className="m-3 text-danger"><FaYoutube/></a>
      <a className="m-3"><FaFacebookF/></a> 
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved by Madchef Ltd</p>
  </div>
</footer>
    );
};

export default Footer;