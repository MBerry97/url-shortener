import React from 'react';
import './HomePage.css';
import Header from '../Layout/Header/Header';
import Main from '../Layout/Main/Main';

export default function HomePage() {
  return (
    <div className="homePage_container">
      <Header />
      <Main />
    </div>
  );
}
