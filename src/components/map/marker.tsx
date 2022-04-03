import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Tooltip } from '@mui/material';
interface IProps {
  collegeName: string;
  lat: number;
  lng: number;
}

const Marker = ({ collegeName }: IProps) => (
  <Tooltip title={collegeName} arrow={true}>
    <LocationOnIcon fontSize="large" color="secondary" />
  </Tooltip>
);

export default Marker;
