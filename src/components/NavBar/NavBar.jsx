import React from 'react';
import './NavBar.css';
import logo from './img/logo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='header'>
            <Link to={`/first-react-app/`}><img src={logo} alt='logo'/></Link>
            <Link to={`/first-react-app/shorts`}>Shorts</Link>
            <Link to={`/first-react-app/pants`}>Pants</Link>
            <Link to={`/first-react-app/shirts`}>Shirts</Link>
            <Link to={`/first-react-app/bag`}>Bag</Link>
        </div>
    );
};

export default NavBar;