import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer-section'>
            <p className='text-center mt-2  text-white'> <small>&copy; Copyright  {year} </small> </p>
        </footer>
    );
};

export default Footer;