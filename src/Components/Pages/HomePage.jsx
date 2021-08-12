import React from 'react';
import Header from '../Layout/Header/Header';
import Button from '../Shared/Button/Button';
import CircularIcon from '../Shared/Icons/CircularIcon/CircularIcon';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Button text="shorten it" type="circular" />
      <Button text="shorten it" type="square" />
      <CircularIcon>hi</CircularIcon>
    </div>
  );
}
