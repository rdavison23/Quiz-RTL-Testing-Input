import React from 'react';
import ChangeInput from '../ChangeInput';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('checking for anonymous', async () => {
  render(<ChangeInput />);
  const welcome = screen.getByText(/Welcome/i);
  console.log(welcome.innerHTML);
  expect(welcome.innerHTML).toEqual('Welcome, Anonymous User!');
});
