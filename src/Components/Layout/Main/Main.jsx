import React from 'react';
import './Main.css';
import workingImage from '../../../assets/illustration-working.svg';
import Button from '../../Shared/Button/Button';
import TextInputWithButton from '../../Templates/TextInputWithButton/TextInputWithButton';

export default function Main() {
  const handleShortenBtnSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
  };
  return (
    <main className="main">
      <div className="workingImage_container">
        <img src={workingImage} alt="working illustration" />
      </div>

      <div className="mainIntroduction_container">
        <span>More than just shorter links</span>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>

        <Button text="Get Started" type="circular" btnType="button" />
      </div>

      <div className="mainLinks_container">
        <TextInputWithButton onSubmit={handleShortenBtnSubmit} />
      </div>
    </main>
  );
}
