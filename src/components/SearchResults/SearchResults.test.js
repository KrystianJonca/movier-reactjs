import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SearchResults from './SearchResults';

test('Shows movie results', async () => {
  render(<SearchResults movieName="Star Wars" />);

  const loading = screen.getByText(/Loading.../i);
  expect(loading).toBeInTheDocument();

  const movieModals = await screen.findAllByRole('link');
  expect(movieModals.length).toBeGreaterThan(1);
});
