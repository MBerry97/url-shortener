import React, { useState } from 'react';
import Button from '../../Shared/Button/Button';
import './TextInputWithButton.css';
import mobileShortenBg from '../../../assets/bg-shorten-mobile.svg';

export default function TextInputWithButton({ onSubmit, isError }) {
  return (
    <div className="textInputWithButton_container">
      <img src={mobileShortenBg} alt="background illustration" />
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          name="link"
          className={isError && 'textInputWithButton_input-error'}
        />
        {isError && <span>Please add a link</span>}
        <Button type="square" text="Shorten it!" btnType="submit" />
      </form>
    </div>
  );
}
