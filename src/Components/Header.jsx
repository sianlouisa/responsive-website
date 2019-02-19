import React from 'react';
import forest from '../img/bg-1.jpg';

const Header = () => {
  return (
    <>
      <header className="header-container">
        <img src={forest} alt="forest" id="header-img" />
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>
    </>
  );
};

export default Header;
