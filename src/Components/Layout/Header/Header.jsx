import React, { useState } from 'react';
import './Header.css';
import logo from '../../../assets/logo.svg';
import burgerMenu from '../../../assets/burger menu.svg';
import NavBox from './NavBox/NavBox';

export default function Header() {
  const [isVisible, setVisibility] = useState(false);

  const toggleNavVisibility = () => {
    setVisibility((prev) => !prev);
  };

  const handleMenuClick = () => {
    toggleNavVisibility();
  };

  return (
    <header className="header_container">
      <img src={logo} alt="logo" />
      <button type="button" onClick={() => handleMenuClick()}>
        <img src={burgerMenu} alt="menu" id="burgerMenu_icon" />
      </button>
      {isVisible && <NavBox />}
    </header>
  );
}
