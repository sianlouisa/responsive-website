import React from 'react';

const NavBar = () => {
  return (
    <nav className="nav-container">
      <span className="nav-item">Home</span>
      <span className="nav-item">About</span>
      <span className="nav-item">Services</span>
      <span className="nav-item">Contact</span>
      {/* <ul>
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Contact</li>
      </ul> */}
      <span className="nav-icon">
        <span className="nav-hamburger" />
        <span className="nav-hamburger" />
        <span className="nav-hamburger" />
      </span>
    </nav>
  );
};

export default NavBar;
