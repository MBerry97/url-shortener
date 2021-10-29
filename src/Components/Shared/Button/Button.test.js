import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import 'jest-canvas-mock';
import Button from './Button'; // import your component to test

afterEach(cleanup);

describe('<Button />', () => {
  it('Render the correct text passed down as props', () => {
    render(<Button text="test" />);
    const button = screen.getByRole('button', { name: /test/i });
    expect(button.innerHTML).toBe('test');
  });
  it('Button onClick fires function passed down props', () => {
    const testFn = jest.fn();
    render(<Button text="test" onClickFn={testFn} />);
    const button = screen.getByRole('button', { name: /test/i });
    fireEvent.click(button);
    expect(testFn).toHaveBeenCalledTimes(1);
  });
});
