import { createContext, Dispatch, SetStateAction } from 'react';
import { ISchool } from '../types/index';

interface ISchoolContext {
  schools: ISchool[];
  setSchools: Dispatch<SetStateAction<ISchool[]>>;
  schoolsLoading: boolean;
  setSchoolsLoading: Dispatch<SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>
}

export const SchoolContext = createContext<ISchoolContext>({
  schools: [],
  setSchools: () => {},
  schoolsLoading: false,
  setSchoolsLoading: () => {},
  errorMessage: '',
  setErrorMessage: () => {}
})
