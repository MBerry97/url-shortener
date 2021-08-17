import React from 'react';
import Button from '../../Shared/Button/Button';
import './TextInputWithButton.css';
import mobileShortenBg from '../../../assets/bg-shorten-mobile.svg';

export default function TextInputWithButton({ onSubmit }) {
  return (
    <div className="textInputWithButton_container">
      <img src={mobileShortenBg} alt="backgroun illustration" />
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" placeholder="Shorten a link here..." />
        <Button type="square" text="Shorten it!" btnType="submit" />
      </form>
    </div>
  );
}
