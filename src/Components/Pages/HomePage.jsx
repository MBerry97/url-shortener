import React from 'react';
import './HomePage.css';
import Header from '../Layout/Header/Header';
import Main from '../Layout/Main/Main';
import Footer from '../Layout/Footer/Footer';
import useInnerWidth from '../../Hooks/useInnerWidth';
import { Provider } from '../../Contexts/HomePageContext';

export default function HomePage() {
  const windowWidth = useInnerWidth();
  const isDesktopWidth = windowWidth >= 1440;
  return (
    <Provider value={{ isDesktopWidth }}>
      <div className="homePage_container">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}
