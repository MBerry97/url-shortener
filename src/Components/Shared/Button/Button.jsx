import React from 'react';
import './Button.css';

export default function Button({ text, type }) {
  return (
    <button type="button" className={`button button--${type}`}>
      {text}
    </button>
  );
}
