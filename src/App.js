
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Menu Icon for mobile */}
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Logo or Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bavanuja
        </Typography>

        {/* Navigation Links */}
        {!isMobile && (
          <>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Work Experiences</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Contact Me</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}




function App() {
  return (
    <div>
      <Nav />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
