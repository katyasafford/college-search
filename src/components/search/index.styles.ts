import { createStyles, makeStyles } from '@mui/styles';

export const styles = () =>
  createStyles({
    inputField: {
      width: '300px'
    }
  });

const useStyles = makeStyles(styles);
export default useStyles;
