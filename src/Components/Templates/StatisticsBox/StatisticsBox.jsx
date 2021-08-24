import React from 'react';
import './StatisticsBox.css';
import CircularIcon from '../../Shared/Icons/CircularIcon/CircularIcon';
import brandImage from '../../../assets/icon-brand-recognition.svg';

export default function StatisticsBox({ children, title, description }) {
  return (
    <section className="statisticsBox">
      <CircularIcon>{children}</CircularIcon>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
