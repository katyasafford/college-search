export interface ISchool {
  location: { lat: number; lon: number };
  id: number;
  latest: {
    school: {
      city: string;
      name: string;
    };
  };
}
