import React from 'react';
import './Header.css';
import logo from '../../../assets/logo.svg';
import burgerMenu from '../../../assets/burger menu.svg';

export default function Header() {
  return (
    <header className="header_container">
      <img src={logo} alt="logo" />
      <button type="button">
        <img src={burgerMenu} alt="menu" id="burgerMenu_icon" />
      </button>
    </header>
  );
}
