
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
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


function Nav({ darkMode, handleThemeChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleReload = (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.location.reload(); // Reload the page
  };
  return (
    <Toolbar>
      {isMobile && (
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
      )}
      <Link href="/" onClick={handleReload} underline="none" flexGrow={1} >
      <Typography variant="h4" component="div" className="logo" sx={{ fontFamily: "Pacifico", color: "purple", fontWeight: "200" }}>
      
        <span>&lt;</span>
        Bavanuja
        <span>/&gt;</span>
        
        </Typography>
        </Link>
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
        <Typography variant="h2" sx={{ mb:2,  fontFamily: "Pacifico" ,}}>
          Hi, I'm Bavanuja 
        </Typography>
        <Typography variant="h3" sx={{mb:2,fontFamily:  "Pacifico" ,}}>
        Aspiring Frontend Developer
        </Typography>
        <SocialMediaLinks />
        <Button variant="contained"   sx={{color:"white",fontWeight:"700"}}>Get Resume</Button>
        </Container>
    </Box>
  );
}

function SocialMediaLinks() {
  return (
    <div style={{ display: 'flex', justifyContent: 'left', gap: '10px',mb:4}}>
      <IconButton component="a" href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
        <GitHubIcon fontSize="large" sx={{ color: '#181717' }}/>
      </IconButton>
      <IconButton component="a" href="https://www.linkedin.com/in/your-username/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon fontSize="large" sx={{ color: '#0A66C2' }}/>
      </IconButton>
      <IconButton component="a" href="https://www.facebook.com/your-username" target="_blank" rel="noopener noreferrer">
        <FacebookIcon fontSize="large" sx={{ color: '#1877F2' }} />
      </IconButton>
    </div>
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
