import React from 'react';
import Button from '../../Shared/Button/Button';
import './LinkBox.css';

function LinkBox({ newLink, oldLink }) {
  return (
    <div className="linkBox">
      <span>{oldLink}</span>
      <span>{newLink}</span>
      <Button type="square" text="Copy" id="linkBox_btn" />
    </div>
  );
}

export default LinkBox;
