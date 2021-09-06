import React from 'react';
import './HomePage.css';
import Header from '../Layout/Header/Header';
import Main from '../Layout/Main/Main';
import Footer from '../Layout/Footer/Footer';

export default function HomePage() {
  return (
    <div className="homePage_container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
