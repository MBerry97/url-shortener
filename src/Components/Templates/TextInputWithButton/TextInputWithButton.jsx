import React, { useState, useContext } from 'react';
import Loader from 'react-loader-spinner';
import Button from '../../Shared/Button/Button';
import './TextInputWithButton.css';
import mobileShortenBg from '../../../assets/bg-shorten-mobile.svg';
import desktopShortenBg from '../../../assets/bg-shorten-desktop.svg';
import { homePageContext } from '../../../Contexts/HomePageContext';

export default function TextInputWithButton({ onSubmit, isError, isLoading }) {
  const { isDesktopWidth } = useContext(homePageContext);

  const loadingButtonText = isLoading ? (
    <Loader
      type="Oval"
      color="white"
      height={40}
      width={40}
      className="loader"
    />
  ) : (
    'Shorten it!'
  );
  return (
    <div className="textInputWithButton_container">
      {!isDesktopWidth && (
        <img src={mobileShortenBg} alt="background illustration" />
      )}

      {isDesktopWidth && (
        <img src={desktopShortenBg} alt="background illustration" />
      )}

      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          name="link"
          className={isError && 'textInputWithButton_input-error'}
        />
        {isError && <span>Please add a link</span>}
        <Button type="square" text={loadingButtonText} btnType="submit" />
      </form>
    </div>
  );
}
