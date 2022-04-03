import { Grid } from '@mui/material';
import { useState } from 'react';

import Header from './components/header';
import Map from './components/map';
import Search from './components/search';
import { SchoolContext } from './providers/school-provider';
import { ISchool } from './types';

const App = () => {
  const [schools, setSchools] = useState<ISchool[]>([]);
  const [schoolsLoading, setSchoolsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <SchoolContext.Provider
      value={{ schools: schools, setSchools: setSchools, schoolsLoading: schoolsLoading, setSchoolsLoading: setSchoolsLoading, errorMessage: errorMessage, setErrorMessage: setErrorMessage }}>
      <Header />

      <Grid container={true} spacing={3} sx={{ marginTop: '65px' }} justifyContent="center">
        <Grid item={true} xs={12} container={true} justifyContent="center">
          <Search />
        </Grid>

        <Grid item={true} xs={11}>
          <Map />
        </Grid>
      </Grid>
    </SchoolContext.Provider>
  );
};

export default App;
