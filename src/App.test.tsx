import { render } from '@testing-library/react';
import App from './App';

test('renders component without crashing', () => {
  const { getByText } = render(<App />);

  expect(getByText('College Search')).toBeInTheDocument();
});
