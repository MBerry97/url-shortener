import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './StatisticsBox.css';
import CircularIcon from '../../Shared/Icons/CircularIcon/CircularIcon';

export default function StatisticsBox({ children, title, description }) {
  return (
    <ScrollAnimation className="statisticsBox" animateIn="fadeIn" animateOnce>
      <CircularIcon>{children}</CircularIcon>

      <h1>{title}</h1>
      <p>{description}</p>
    </ScrollAnimation>
  );
}
