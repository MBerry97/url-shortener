import React from 'react';
import Button from '../../../Shared/Button/Button';
import './NavBox.css';

function NavBox() {
  return (
    <div className="navBox">
      <span>Features</span>
      <span>Pricing</span>
      <span>Resources</span>

      <div className="navBox_divider" />

      <span>Login</span>

      <Button text="Sign up" type="circular" btnType="button" />
    </div>
  );
}

export default NavBox;
