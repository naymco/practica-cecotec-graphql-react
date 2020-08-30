import React from "react";
import { withRouter } from 'react-router-dom';

import { Link } from "react-router-dom";

const Navbar = (props) => {
  
   const logout = ()=>{
        localStorage.removeItem('token');
        props.history.push('/login');
    }

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand" href="#">
        <img className="logo" src="https://www.terrapinn-cdn.com/exhibition/seamless/Img/seamless-ecommerce.png" alt="logo"/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/products" >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users" >
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" >
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login" onClick={()=> logout()} >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
