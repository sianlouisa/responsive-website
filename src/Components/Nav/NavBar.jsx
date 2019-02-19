import React from 'react';
import Hamburger from './Hamburger';
import ToggleMenu from './ToggleMenu';

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
          <Hamburger />
          <ToggleMenu />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
