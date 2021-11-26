import { render, screen } from '@testing-library/react';
import AppServicio from './AppServicio';

test('renders learn react link', () => {
  render(<AppServicio/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
