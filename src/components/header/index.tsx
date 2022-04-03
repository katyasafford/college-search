import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        College Search
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
