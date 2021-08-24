import React from 'react';
import './Main.css';
import workingImage from '../../../assets/illustration-working.svg';
import Button from '../../Shared/Button/Button';
import TextInputWithButton from '../../Templates/TextInputWithButton/TextInputWithButton';
import brandImage from '../../../assets/icon-brand-recognition.svg';
import StatisticsBox from '../../Templates/StatisticsBox/StatisticsBox';

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
      <div className="grey-bg">
        <div className="mainLinks_container">
          <TextInputWithButton onSubmit={handleShortenBtnSubmit} />

          <div className="mainStatistics_container">
            <span>Advanced Statistics</span>
            <p>
              Track how your links are performing across the web with out
              advanced statistics dashboard.
            </p>
            <StatisticsBox
              title="Brand recognition"
              description="Boost your brand recognition with each click. Generic links dont mean a thing. Branded links helps instill confidence in your content"
            >
              <img src={brandImage} alt="brand recognition" />
            </StatisticsBox>
          </div>
        </div>
      </div>
    </main>
  );
}
