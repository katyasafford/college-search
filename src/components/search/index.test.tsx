import { render } from '@testing-library/react';
import Search from '.';
import { SchoolContext } from '../../providers/school-provider';

test('renders search field', () => {
  const { getByTestId } = render(
    <SchoolContext.Provider value={{ errorMessage: '', setErrorMessage: jest.fn(), schools: [], setSchools: jest.fn(), schoolsLoading: false, setSchoolsLoading: jest.fn() }}>
      <Search />
    </SchoolContext.Provider>
  );

  const searchInput = getByTestId('search-input');
  expect(searchInput).toBeInTheDocument();
});
