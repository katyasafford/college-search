import { render } from '@testing-library/react';
import Header from '.';

test('renders Header component', () => {
  const { getByText } = render(<Header />);
  expect(getByText('College Search')).toBeInTheDocument();
});
