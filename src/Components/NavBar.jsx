import React from 'react';

const NavBar = () => {
  return (
    <>
      <nav className="nav-container">
        <span className="nav-item">Home</span>
        <span className="nav-item">About</span>
        <span className="nav-item">Services</span>
        <span className="nav-item">Contact</span>

        <div className="nav-toggle">
          <input type="checkbox" />
          <span className="nav-hamburger" />
          <span className="nav-hamburger" />
          <span className="nav-hamburger" />
          <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
