import React from 'react';
import '../../App.css';
import steamlogo from '../Images/Steamlogo.png';
import Button from './Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className="mynavbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={steamlogo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/aboutsteam">
                  About
                </Link>
              </li>
            </ul>
            <Button btnname="Install Steam" />
            <form className="d-flex" role="search">
              <Link to="/signup">
                <Button btnname="Sign up" />
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
