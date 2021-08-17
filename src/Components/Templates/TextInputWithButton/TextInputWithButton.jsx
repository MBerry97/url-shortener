import React from 'react';
import Button from '../../Shared/Button/Button';
import './TextInputWithButton.css';

export default function TextInputWithButton({ onSubmit }) {
  return (
    <div className="textInputWithButton_container">
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" />
        <Button type="square" text="Shorten it!" btnType="submit" />
      </form>
    </div>
  );
}
