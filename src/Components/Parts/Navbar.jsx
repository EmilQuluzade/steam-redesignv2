import React, { useRef } from 'react';
import '../../App.css';
import steamlogo from '../Images/Steamlogo.png';
import Button from './Button';
import { Link } from 'react-router-dom';
import { GiCrossedSwords } from 'react-icons/gi';
import { AiOutlineBars } from 'react-icons/ai';

const Navbar = () => {

  const overlayDivinRefi = useRef();

  const menyunuAc = () => {
    overlayDivinRefi.current.classList.add('aktiv');
  };

  const menyunuBagla = () => {
    overlayDivinRefi.current.classList.remove('aktiv');
  };

  return (
    <>
      <div className="overlay" ref={overlayDivinRefi}>
        <button onClick={menyunuBagla} className="baglama-iconu">
          <GiCrossedSwords className="x-icon" />
        </button>
        <div className="nav-links">
          <Link className="nav-link text-white" to="/">
            Store
          </Link>
          <Link className="nav-link text-white" to="/categories">
            Categories
          </Link>
          <Link className="nav-link text-white" to="*">
            Not Found
          </Link>
          <Link className="nav-link text-white" to="/aboutsteam">
            About
          </Link>
          <Link className="nav-link text-white" to="/signup">
            Signup
          </Link>
        </div>
      </div>
      <div className="mynavbar">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img src={steamlogo} alt="" />
            <button onClick={menyunuAc} className="navbar-toggler">
            <AiOutlineBars className="bars-icon" />
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
                  <Link className="nav-link text-white" to="*">
                    Not Found
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
                <Link to="/signup" classname="signupbutton">
                  <Button btnname="Sign up"  />
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
