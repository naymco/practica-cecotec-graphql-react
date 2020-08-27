import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-bar">
            <Link to="/" className="a">Home</Link>
            <Link to="/register" className="a">Register</Link>
        </div>
    );
};

export default Navbar;