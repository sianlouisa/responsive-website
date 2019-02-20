import React from 'react';
import Hamburger from './Hamburger';
import ToggleMenu from './ToggleMenu';

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <span className="nav-item">Home</span>
        <span className="nav-item">About</span>
        <span className="nav-item">Services</span>
        <span className="nav-item">Contact</span>
      </div>
      <div className="nav-toggle">
        <input type="checkbox" />
        <Hamburger />
        <ToggleMenu />
      </div>
    </>
  );
};

export default NavBar;
