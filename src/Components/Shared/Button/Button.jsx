/* eslint-disable react/button-has-type */
import React from 'react';
import './Button.css';

export default function Button({ text, type, btnType }) {
  return (
    <button type={btnType} className={`button button--${type}`}>
      {text}
    </button>
  );
}
