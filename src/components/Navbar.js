import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this file exists in the same directory

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark custom-dark-bg' : 'navbar-light custom-light-bg'} shadow`}>
      <div className="container">
        <Link className="navbar-brand" to="/">TastyFind</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" activeClassName="active">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/browse" activeClassName="active">Browse Recipes</Link>
            </li>
           
            <li className="nav-item">
              <button className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'}`} onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
