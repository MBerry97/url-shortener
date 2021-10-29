import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  screen,
  configure,
} from '@testing-library/react';
import '@testing-library/jest-dom';
// import 'jest-canvas-mock';
import HomePage from '../../Components/Pages/HomePage';

afterEach(cleanup);

configure({ asyncUtilTimeout: 7500 });

describe('<HomePage />', () => {
  it('Renders without crashing', () => {
    render(<HomePage />);
  });
  it('Error message appears when text box has no input ', async () => {
    render(<HomePage />);

    const shortenBtn = screen.getByRole('button', { name: /Shorten it!/i });
    const errorSpan = screen.queryByTestId('error_span');

    expect(errorSpan).not.toBeInTheDocument();

    await fireEvent.click(shortenBtn);

    const errorSpanPostClick = screen.queryByTestId('error_span');

    expect(errorSpanPostClick).toBeInTheDocument();
  });
  it('LinkBox component appears when text box has an input', async () => {
    render(<HomePage />);

    const inputBox = screen.getByTestId('text_input');
    const shortenBtn = screen.getByRole('button', { name: /Shorten it!/i });
    await fireEvent.change(inputBox, { target: { value: 'youtube.com' } });

    await fireEvent.click(shortenBtn);

    const linkBoxPostClick = await screen.findByTestId('linkBox');

    expect(linkBoxPostClick).toBeInTheDocument();
  });
});
