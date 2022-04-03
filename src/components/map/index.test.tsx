import { render } from '@testing-library/react';
import Map from '.';
import { SchoolContext } from '../../providers/school-provider';

test('renders error message if search results errored out', () => {
  const { getByText } = render(
    <SchoolContext.Provider value={{ errorMessage: "I'm a bad, bad error", setErrorMessage: jest.fn(), schools: [], setSchools: jest.fn(), schoolsLoading: false, setSchoolsLoading: jest.fn() }}>
      <Map />
    </SchoolContext.Provider>
  );

  expect(getByText("I'm a bad, bad error")).toBeInTheDocument();
});

test('renders spinning circle if map is loading', () => {
  const { getByTestId } = render(
    <SchoolContext.Provider value={{ errorMessage: '', setErrorMessage: jest.fn(), schools: [], setSchools: jest.fn(), schoolsLoading: true, setSchoolsLoading: jest.fn() }}>
      <Map />
    </SchoolContext.Provider>
  );

  expect(getByTestId('circular-progress')).toBeInTheDocument();
});
