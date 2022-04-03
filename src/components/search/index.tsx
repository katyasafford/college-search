import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';
import React, { useState, useCallback, useContext } from 'react';
import Api from '../../helpers/api';
import { SchoolContext } from '../../providers/school-provider';

const Search = () => {
  const [searchText, setSearchText] = useState<string>('');

  const { setErrorMessage, setSchools, setSchoolsLoading } = useContext(SchoolContext);

  const collegeScorecardKey = process.env.REACT_APP_COLLEGE_SCORECARD_API_KEY;

  const getSearchResults = (value: string) => {
    setSchoolsLoading(true);
    Api.get(`https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${collegeScorecardKey}&school.name=${encodeURI(value)}`).then((res) => {
      setSchoolsLoading(false);
      if (res.ok) {
        setSchools(res.body.results);
        setErrorMessage('');
      } else {
        setErrorMessage('Something went wrong, and we could not get the college information. Please try again later');
      }
    });
  };

  const debounceSearchResults = useCallback(debounce(getSearchResults, 1000), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchText(e.target.value);
    debounceSearchResults(e.target.value);
  };

  const handleSearchClear = () => {
    setSearchText('');
    setSchools([]);
  };

  return (
    <FormControl variant="outlined">
      <OutlinedInput
        value={searchText}
        size="small"
        fullWidth={true}
        onChange={(e) => handleChange(e)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          searchText ? (
            <InputAdornment position="end">
              <IconButton aria-label="clear search" onClick={handleSearchClear} edge="end">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ) : null
        }
      />
    </FormControl>
  );
};

export default Search;
