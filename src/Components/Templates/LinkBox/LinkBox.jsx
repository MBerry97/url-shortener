import React, { useState, useContext } from 'react';
import Button from '../../Shared/Button/Button';
import './LinkBox.css';

function LinkBox({ newLink, oldLink }) {
  const [copied, setCopied] = useState(false);
  const handleButtonClick = () => {
    if (copied) {
      navigator.clipboard.writeText('');
    } else {
      navigator.clipboard.writeText(newLink);
    }
    setCopied((prev) => !prev);
  };

  return (
    <div className="linkBox" data-testid="linkBox">
      <span>{oldLink}</span>
      <span>{newLink}</span>
      {!copied && (
        <Button
          type="square"
          text="Copy"
          id="linkBox_btn"
          onClickFn={handleButtonClick}
        />
      )}
      {copied && (
        <Button
          type="active"
          text="Copied!"
          id="linkBox_btn"
          onClickFn={handleButtonClick}
        />
      )}
    </div>
  );
}

export default LinkBox;
