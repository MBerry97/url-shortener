import React from 'react';
import Button from '../../../Shared/Button/Button';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <div>
        <span>Features</span>
        <span>Pricing</span>
        <span>Resources</span>
      </div>

      <div>
        <span>Login</span>
        <Button text="Sign up" type="circular" />
      </div>
    </div>
  );
};

export default NavBar;
