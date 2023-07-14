import { useState, useRef, useEffect } from 'react';
import '../../App.css';
import steamlogo from '../Images/Steamlogo.png';
import Button from './Button';
import { Link , useHistory } from 'react-router-dom';
import Privacy from '../Pages/Privacy';
import Signup from '../Pages/Signup';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // Adjust the delay as needed
  };

  const handleContentMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleContentMouseLeave = () => {
    handleMouseLeave();
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSignUpClick = () => {
    window.location.href = '/signup';
  };

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
                <Link
                  className="nav-link text-white about"
                  to="/aboutsteam"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  About
                </Link>
              </li>
            </ul>

            {showDropdown && (
              <div className="dropdown" ref={dropdownRef}>
                <div
                  className="dropdown-content"
                  style={{ display: 'block' }}
                  onMouseEnter={handleContentMouseEnter}
                  onMouseLeave={handleContentMouseLeave}
                >
                  <Link to="/privacy">Privacy Policy</Link>
                  <Link to="/legal">LEGAL</Link>
                  <Link to="/refunds">REFUNDS</Link>
                </div>
              </div>
            )}

            <Button btnname="Install Steam" />
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <Link to="/signup">
  <Button btnname="Sign up"></Button>
</Link>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
