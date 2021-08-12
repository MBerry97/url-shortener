import React from 'react';
import './Main.css';
import workingImage from '../../../assets/illustration-working.svg';
import Button from '../../Shared/Button/Button';

export default function Main() {
  return (
    <main className="main">
      <div className="workingImage_container">
        <img src={workingImage} alt="working illustration" />
      </div>

      <div className="introduction_container">
        <span>More than just shorter links</span>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>

        <Button text="Get Started" type="circular" />
      </div>
    </main>
  );
}
