import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import 'jest-canvas-mock';
import Header from '../Components/Layout/Header/Header';
import { Provider } from '../Contexts/HomePageContext';

afterEach(cleanup);

const providerValues = {
  isDesktopWidth: false,
};

const compWithProvider = (comp, values) => {
  return render(<Provider value={{ ...values }}>{comp}</Provider>);
};

describe('<Header />', () => {
  it('Renders without crashing', () => {
    compWithProvider(<Header />, providerValues);
  });
  it('Renders burger menu in mobile version and onClick shows navBox', () => {
    compWithProvider(<Header />, providerValues);
    const burgerMenu = screen.getByTestId('burger_menu');
    fireEvent.click(burgerMenu);
    const navBox = screen.getByTestId('navBox');
    expect(navBox).toBeInTheDocument();
  });
  it('NavBar is rendered in desktop version', () => {
    compWithProvider(<Header />, { isDesktopWidth: true });
    const navBar = screen.getByTestId('navBar');

    expect(navBar).toBeInTheDocument();
  });
});
