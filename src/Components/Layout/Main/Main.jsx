import React from 'react';
import './Main.css';
import workingImage from '../../../assets/illustration-working.svg';
import Button from '../../Shared/Button/Button';
import TextInputWithButton from '../../Templates/TextInputWithButton/TextInputWithButton';
import brandImage from '../../../assets/icon-brand-recognition.svg';
import StatisticsBox from '../../Templates/StatisticsBox/StatisticsBox';
import detailedImage from '../../../assets/icon-detailed-records.svg';
import customizableImage from '../../../assets/icon-fully-customizable.svg';
import boostImgMob from '../../../assets/bg-boost-mobile.svg';

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
              title="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links dont mean a thing. Branded links helps instill confidence in your content"
            >
              <img src={brandImage} alt="brand recognition" />
            </StatisticsBox>

            <div className="green-line" />

            <StatisticsBox
              title="Detialed Records"
              description="Gain inisghts into who is clicking your links. Knowing when and where people engange with your content helps inform better decisions."
            >
              <img src={detailedImage} alt="detailed records" />
            </StatisticsBox>

            <div className="green-line" />

            <StatisticsBox
              title="Fully Customizable"
              description="Improve brand awareness and content discoverability through customizable links, superchargin audience engagement."
            >
              <img src={customizableImage} alt="fully customizable" />
            </StatisticsBox>
          </div>
        </div>
      </div>

      <div className="mainBoostLinks_container">
        <img src={boostImgMob} alt="boost links background" />
        <span>Boost your links today </span>
        <Button text="Get Started" type="circular" btnType="button" />
      </div>
    </main>
  );
}
