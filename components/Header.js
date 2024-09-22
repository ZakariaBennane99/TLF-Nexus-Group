'use client';

import React from 'react';
import { useSmoothScroll } from '../components/useSmoothScroll';

export default function Header({ isPrivacyPage }) {
  const scrollToSection = useSmoothScroll();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  if (isPrivacyPage) {
    return (
      <header className='header'>
      <div className="logoContainer">
        <img
          src="/logo.svg"  
          alt="TLF Nexus Group Logo"
          className='logo'
        />
      </div>
      <nav className='nav'>
        <ul className='navList'>
          <li><a href="/#home">Home</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#certifications">Certifications</a></li>
          <li><a href="/#leadership">Leadership</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    )
  }

  return (
    <header className='header'>
      <div className="logoContainer">
        <img
          src="/logo.svg"  
          alt="TLF Nexus Group Logo"
          className='logo'
        />
      </div>
      <nav className='nav'>
        <ul className='navList'>
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
          <li><a href="#certifications" onClick={(e) => handleNavClick(e, 'certifications')}>Certifications</a></li>
          <li><a href="#leadership" onClick={(e) => handleNavClick(e, 'leadership')}>Leadership</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}