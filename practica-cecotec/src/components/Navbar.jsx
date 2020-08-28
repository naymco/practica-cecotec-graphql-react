import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-bar">
            <Link to="/" className="a">Home</Link>
            <Link to="/login" className="a">Register</Link>
            <Link to="/users" className="a">Users</Link>
            <Link to="/products" className="a">Products</Link>
        </div>
    );
};

export default Navbar;