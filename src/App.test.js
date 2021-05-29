import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Repositories in the Home page', () => {
  render(<App />);
  const TextElement = screen.getByText("Repositories");
  expect(TextElement).toBeInTheDocument();
});

