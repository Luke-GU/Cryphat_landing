import React from 'react';
import '../styles//Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#home">
          <img src="/img/CryphatLogo.png" alt="Cryphat Logo" className="logo" />
        </a>
      </div>

      <div className="navbar-center">
        <a href="#section1">Roadmap</a>
        <a href="#section2">About</a>
        <a href="#section3">Tokenomics</a>
      </div>

      <div className="navbar-right">
        <button className="join-button">Join Beta</button>
      </div>
    </nav>
  );
};

export default Navbar;
