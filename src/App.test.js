import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});
