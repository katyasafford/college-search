import { Alert, CircularProgress } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import { useContext } from 'react';

import { SchoolContext } from '../../providers/school-provider';
import useStyles from './index.styles';
import Marker from './marker';
import { mapTheme } from './map-silver-theme';

const Map = () => {
  const classes = useStyles();
  const { schools, schoolsLoading, errorMessage } = useContext(SchoolContext);

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const defaultProps = {
    center: {
      lat: 41.850033,
      lng: -87.6500523
    },
    zoom: 4
  };

  return (
    <>
      {errorMessage && !schoolsLoading && <Alert severity="error">{errorMessage}</Alert>}

      {!errorMessage && schoolsLoading && (
        <div className={classes.circularProgressWrapper}>
          <CircularProgress color="primary" className={classes.circularProgress} data-testid="circular-progress" />
        </div>
      )}

      {!errorMessage && (
        <div className={schoolsLoading ? classes.loadingMapContainer : classes.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapsApiKey as string }}
            options={{ styles: mapTheme.silver as GoogleMapReact.MapTypeStyle[] }}
            data-testid="map"
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
            {schools.map((school) => (
              <Marker lat={school.location.lat} lng={school.location.lon} collegeName={school.latest.school.name} key={school.id} />
            ))}
          </GoogleMapReact>
        </div>
      )}
    </>
  );
};

export default Map;
