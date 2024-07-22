
// App.js
import React, { useState } from 'react';
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
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';


function Nav({ darkMode, handleThemeChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Toolbar>
      {isMobile && (
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      )}
      <Typography variant="h4" component="div" className="logo" flexGrow={1} sx={{ fontFamily: "Pacifico", color: "purple", fontWeight: "200" }}>
        <span>&lt;</span>
        Bavanuja
        <span>/&gt;</span>
      </Typography>
      {!isMobile && (
        <>
          <Button color="inherit" sx={{ padding: 3 }}>Skills</Button>
          <Button color="inherit" sx={{ padding: 3 }}>Work Experiences</Button>
          <Button color="inherit" sx={{ padding: 3 }}>Projects</Button>
          <Button color="inherit" sx={{ padding: 3 }}>Contact Me</Button>
        </>
      )}
      <CustomSwitch darkMode={darkMode} handleThemeChange={handleThemeChange} />
    </Toolbar>
  );
}

const CustomSwitch = ({ darkMode, handleThemeChange }) => {
  return (
    <Switch checked={darkMode} onChange={handleThemeChange} />
  );
};

function AboutSection() {
  return (
    
    <Box
      sx={{
        height: '100vh', // Adjust height as needed
        backgroundImage:'url(/background.jpeg)' ,
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', // Adjust text color as needed
        padding: 2,
      }}
    >
      <Container >
        <Typography variant="h2" sx={{ mb: 2,  fontFamily: "Pacifico" ,}}>
          Hi, I'm Bavanuja Aspiring Frontend Developer
        </Typography>
        <Typography>
        Aspiring Frontend Developer
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.5, }}>
          Hi, I'm [Your Name], a [Your Profession or Field]. I have a passion for [Your Passion] and enjoy working on [Your Interests]. 
          My journey in [Your Field] has been [Brief Description of Your Journey], and I am excited to continue growing and learning. 
          Here, you can find some of the projects I've worked on and learn more about what drives me.
        </Typography>
        </Container>
    </Box>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div>
        <Nav darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <AboutSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
