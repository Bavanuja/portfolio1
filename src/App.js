
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    
      <Toolbar>
        {/* Menu Icon for mobile */}
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Logo or Title */}
        <Typography variant="h4" component="div" className="logo" flexGrow={1} sx={{fontFamily:"pacifico",color:"purple",fontWeight:"200"}}>
        <span>&lt;</span>
        Bavanuja
        <span>/&gt;</span>
        </Typography>

        {/* Navigation Links */}
        {!isMobile && (
          <>
            <Button color="inherit" sx={{padding:3}} >Skills</Button>
            <Button color="inherit" sx={{padding:3}}>Work Experiences</Button>
            <Button color="inherit" sx={{padding:3}}>Projects</Button>
            <Button color="inherit" sx={{padding:3}}>Contact Me</Button>
          </>
        )}
        <CustomSwitch />
        </Toolbar>
    
  );
}
const label = { inputProps: { 'aria-label': 'Switch demo' } };

function CustomSwitch() {
  return (
    <div>
      <Switch {...label} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Nav />
      
      
    </div>
  );
}
export default App;
