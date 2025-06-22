
'use client'

import React, { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="navbar">
      <div className='nav-content'>
      <div className="logo">
        <a className="logo" href="#home">Surbhi Sinha.</a>
      </div>
      
      <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#timeline" onClick={() => setIsMenuOpen(false)}>Experience</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
      </div>
    </nav>
  );
};