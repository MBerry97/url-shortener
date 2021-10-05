import React, { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import './Header.css';
import logo from '../../../assets/logo.svg';
import burgerMenu from '../../../assets/burger menu.svg';
import NavBox from './NavBox/NavBox';
import { homePageContext } from '../../../Contexts/HomePageContext';
import NavBar from './NavBar/NavBar';

export default function Header() {
  const [isVisible, setVisibility] = useState(false);
  const { isDesktopWidth } = useContext(homePageContext);

  const toggleNavVisibility = () => {
    setVisibility((prev) => !prev);
  };

  const handleMenuClick = () => {
    toggleNavVisibility();
  };

  return (
    <header className="header_container">
      <img src={logo} alt="logo" />

      {!isDesktopWidth && (
        <>
          <button type="button" onClick={() => handleMenuClick()}>
            <img src={burgerMenu} alt="menu" id="burgerMenu_icon" />
          </button>
          <AnimatePresence>{isVisible && <NavBox />}</AnimatePresence>
        </>
      )}

      {isDesktopWidth && <NavBar />}
    </header>
  );
}
