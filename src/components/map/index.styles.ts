import { createStyles, makeStyles } from '@mui/styles';

export const styles = () =>
  createStyles({
    mapContainer: {
      height: '600px',
      width: '100%'
    },
    loadingMapContainer: {
      height: '600px',
      width: '100%',
      opacity: '0.2'
    },
    circularProgressWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: 1
    },
    circularProgress: {
      top: '40%',
      left: '50%',
      position: 'absolute'
    }
  });

const useStyles = makeStyles(styles);
export default useStyles;
