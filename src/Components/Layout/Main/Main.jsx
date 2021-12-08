import React, { useState, useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { motion } from 'framer-motion';
import axios from 'axios';
import './Main.css';
import workingImage from '../../../assets/illustration-working.svg';
import Button from '../../Shared/Button/Button';
import TextInputWithButton from '../../Templates/TextInputWithButton/TextInputWithButton';
import brandImage from '../../../assets/icon-brand-recognition.svg';
import StatisticsBox from '../../Templates/StatisticsBox/StatisticsBox';
import detailedImage from '../../../assets/icon-detailed-records.svg';
import customizableImage from '../../../assets/icon-fully-customizable.svg';
import boostImgMob from '../../../assets/bg-boost-mobile.svg';
import boostImgDesktop from '../../../assets/bg-boost-desktop.svg';
import LinkBox from '../../Templates/LinkBox/LinkBox';
import { homePageContext } from '../../../Contexts/HomePageContext';
import useStorageState from '../../../Hooks/useStorageState';

export default function Main() {
  const [links, setLinks] = useStorageState([], 'links');
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { isDesktopWidth } = useContext(homePageContext);

  const handleShortenBtnSubmit = (event) => {
    event.preventDefault();
    const { link } = event.target.elements;
    const linkToShorten = link.value;

    if (linkToShorten.length === 0) {
      setError(true);
      setIsLoading(false);
      return;
    }

    setError(false);
    setIsLoading(true);
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${linkToShorten}`)
      .then((res) => {
        setIsLoading(false);
        const shortLink = res.data.result.full_short_link;
        setLinks((prev) => {
          return [...prev, { newLink: shortLink, oldLink: linkToShorten }];
        });
      });
  };

  const isLinks = links.length > 0;

  return (
    <main className="main">
      <section className="main-section-intro ">
        <motion.div
          className="workingImage_container"
          initial={{ x: '1000px' }}
          animate={{ x: '0px' }}
          transition={{
            duration: 0.6,
            type: 'tween',
          }}
        >
          <img src={workingImage} alt="working illustration" />
        </motion.div>

        <motion.div
          className="mainIntroduction_container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
        >
          <span>More than just shorter links</span>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>

          <Button text="Get Started" type="circular" btnType="button" />
        </motion.div>
      </section>

      <div className="grey-bg">
        <div className="mainLinks_container">
          <TextInputWithButton
            onSubmit={handleShortenBtnSubmit}
            isError={isError}
            isLoading={isLoading}
          />
          {isLinks && (
            <div className="mainGeneratedLinks_container">
              {links.map(({ newLink, oldLink }) => {
                return <LinkBox newLink={newLink} oldLink={oldLink} />;
              })}
            </div>
          )}
          <div className={`mainStatistics_container ${isLinks && 'no-margin'}`}>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
              <span>Advanced Statistics</span>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </ScrollAnimation>
            <div className="mainStatisticsBox_container">
              <StatisticsBox
                title="Brand Recognition"
                description="Boost your brand recognition with each click. Generic links dont mean a thing. Branded links helps instill confidence in your content"
              >
                <img src={brandImage} alt="brand recognition" />
              </StatisticsBox>

              <div className="green-line" />

              <StatisticsBox
                title="Detailed Records"
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
      </div>

      <div className="mainBoostLinks_container">
        <img
          src={isDesktopWidth ? boostImgDesktop : boostImgMob}
          alt="boost links background"
        />
        <ScrollAnimation
          animateIn="fadeIn"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          animateOnce
        >
          <span>Boost your links today </span>
          <Button text="Get Started" type="circular" btnType="button" />
        </ScrollAnimation>
      </div>
    </main>
  );
}
