

        import React, { useState} from 'react';
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
        import { ThemeProvider, CssBaseline,createTheme } from '@mui/material';
        import { lightTheme, darkTheme } from './theme';
        import Link from '@mui/material/Link';
        import GitHubIcon from '@mui/icons-material/GitHub';
        import LinkedInIcon from '@mui/icons-material/LinkedIn';
        import FacebookIcon from '@mui/icons-material/Facebook';
        import Grid from '@mui/material/Grid';
        import TextField from '@mui/material/TextField';
        import { Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';
        import { motion } from 'framer-motion';
        import{Drawer,List,ListItem,ListItemText,} from '@mui/material';
        
        

        function Nav({ darkMode, handleThemeChange }) {
          const theme = useTheme();
          const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
          const [drawerOpen, setDrawerOpen] = useState(false);
        
          const handleReload = (e) => {
            e.preventDefault();
            window.location.reload();
          };
        
          const toggleDrawer = (open) => () => {
            setDrawerOpen(open);
          };
        
          const navItems = [
            { text: 'Skills', href: '#education' },
            { text: 'Experiences', href: '#experiences' },
            { text: 'Services', href: '#services' },
            { text: 'Contact', href: '#contactme' },
          ];
        
          return (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Toolbar>
                {isMobile && (
                  <>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                      <MenuIcon />
                    </IconButton>
                    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                      <List>
                        {navItems.map((item) => (
                          <ListItem button component="a" href={item.href} key={item.text} onClick={toggleDrawer(false)}>
                            <ListItemText primary={item.text} />
                          </ListItem>
                        ))}
                      </List>
                    </Drawer>
                  </>
                )}
        
                <Link href="/" onClick={handleReload} underline="none" flexGrow={1}>
                  <Typography variant="h5" component="div" className="logo" sx={{ fontFamily: "Roboto", color: "#3B5281", fontWeight: "300" }}>
                    <span>&lt;</span>
                    Bavanuja
                    <span>/&gt;</span>
                  </Typography>
                </Link>
        
                {!isMobile && (
                  <>
                    {navItems.map((item) => (
                      <Button key={item.text} color="inherit" href={item.href} sx={{ padding: 3, fontFamily: "Roboto" }}>
                        {item.text}
                      </Button>
                    ))}
                  </>
                )}
                
                <CustomSwitch darkMode={darkMode} handleThemeChange={handleThemeChange} />
              </Toolbar>
            </motion.div>
          );
        }
        
        const CustomSwitch = ({ darkMode, handleThemeChange }) => {
          return (
            <Switch checked={darkMode} onChange={handleThemeChange} />
          );
        };
      
        function AboutSection() {
          return (
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          >
          <Grid item xs={12} md={6}>
          <Box
            sx={{
                height: '100vh',
                backgroundImage: 'url(/bg3.jpg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover', 
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white',
                padding: 2,
                textAlign: 'center', 
              }}
            id="about"
          >
          <Container>
          <Grid item xs={12}>
          <Typography
          variant="h3"
            sx={{
                marginTop: '40px',
                fontFamily: "Roboto",
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
          >
          Hi, I'm Bavanuja
          </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography
          variant="h3"
            sx={{
                fontFamily: "Roboto",
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
                }}
          >
          Aspiring Frontend Developer
          </Typography>
          </Grid>
          <Typography
            sx={{
                mb: 2,
                gap: 2,
                marginTop: '10px',
                fontFamily: "Roboto",
               }}
          >
          I'm a passionate front-end developer with a solid foundation in computer science and technology. 
          I have a strong background in HTML, CSS, and JavaScript, and I'm continually expanding my skills.
          Currently, I'm focusing on building responsive and user-friendly websites using modern frameworks 
          like React and Material-UI. My goal is to create visually appealing and functional web applications 
          that provide an excellent user experience.
          </Typography>
          <SocialMediaLinks />
          <Button
          variant="outlined"
          href="#contact"
            sx={{
                color: "white",
                fontFamily: "Roboto",
                fontWeight: "200",
                marginTop: "20px",
                marginRight: "30px",
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)',
                backgroundColor: "#3B5281",
                },
                }}
          >
          Contact Me
          </Button>
          <Button
          variant="outlined"
          href='BavanujaCV.pdf'
            sx={{
                color: "white",
                fontFamily: "Roboto",
                fontWeight: "200",
                marginTop: "20px",
                marginLeft: "30px",
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)',
                backgroundColor: "#3B5281",
                },
                }}
          >
          Get Resume
          </Button>
          </Container>
          </Box>
          </Grid>
          </motion.div>
          );
          }
        
        function SocialMediaLinks() {
          return (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px',}}>
          <IconButton component="a" href="https://github.com/Bavanuja" target="_blank" rel="noopener noreferrer">
          <GitHubIcon
          fontSize="large"
              sx={{
                  color: 'black',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                  }}
          />
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/bavanuja-kamalakkannan27" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon
          fontSize="large"
              sx={{
                  color: 'black',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                  }}
          />
          </IconButton>
          <IconButton component="a" href="https://www.facebook.com/profile.php?id=61564185656337" target="_blank" rel="noopener noreferrer">
          <FacebookIcon
          fontSize="large"
              sx={{
                  color: 'black',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                  }}
          />
          </IconButton>
          </div>
          );
          }
        

        function Education() {
          return (
          <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration:4}}
          >
          <Container id="education" maxWidth="md" sx={{ textAlign: 'center', mt: 8, mb: 8 }}>
          <Typography 
          variant="h3" 
              sx={{ 
                  mb: 6, 
                  fontFamily: "Roboto",
                  color: '#3B5281',
                  borderBottom: '2px solid',
                  display: 'inline-block',
                  pb: 1 
                  ,transition: 'transform 0.3s ease',
                  '&:hover': {transform: 'scale(1.05)',}
                }}
          >
          Education
          </Typography>
          <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ mb: 5 }}>
          <Grid item>
          <Box
          component="img"
             sx={{
                  height: 100,
                  width: 100,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',}
                }}
          alt="Uduvil Girls' College Logo"
          src='UGC.png' 
          />
          </Grid>
          <Grid item>
          <Typography variant="h4" sx={{ fontWeight: 'medium',fontFamily: "Roboto", transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',}}}>
          Uduvil Girls' College
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary',fontFamily: "Roboto", }}>
          Advanced Level - Maths Stream
          <br />
          Graduated in 2023
          </Typography>
          </Grid>
          </Grid>
          <Box
              sx={{
                  borderTop: '1px solid',
                  borderColor: 'grey.300',
                  width: '100%',
                  mb: 5,
                }}
          />
          <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item>
          <Box
          component="img"
              sx={{
                  height: 100,
                  width: 100,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',}
                  }}
          alt="University of Uva Wellassa Logo"
          src='UWU.jpeg' 
          />
          </Grid>
          <Grid item>
          <Typography variant="h4" sx={{ fontWeight: 'medium',fontFamily: "Roboto",transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',} }}>
          University of Uva Wellassa
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary',fontFamily: "Roboto" }}>
          BSc Honours in Computer Science and Technology
          <br />
          Expected Graduation: 2028
          </Typography>
          </Grid>
          </Grid>
          </Container>
          </motion.div>
          );
          }


        function Experience (){
          
          return (
          <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration:4}}
          >
          <Container id="experiences" maxWidth="md" sx={{ textAlign: 'center', mt: 8, mb: 8 }}>
          <Grid item xs={12} md={6}>
          <Typography 
          variant="h3" 
              sx={{ 
                  mb: 6, 
                  fontFamily: "Roboto", 
                  color: '#3B5281',
                  borderBottom: '2px solid',
                  display: 'inline-block',
                  pb: 1,
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' }
                  }}
          >
          Experiences
          </Typography>
          <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ mb: 5 }}>
          <Grid item>
          <Box
          component="img"
              sx={{
                  height: 100,
                  width: 100,
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' }
                  }}
                  alt="Yarl IT Hub Logo"
                  src='YIT.png' 
          />
          </Grid>
          <Grid item>
          <Typography 
          variant="h4" 
              sx={{ 
                  fontWeight: 'medium',
                  fontFamily: "Roboto",
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' }
                  }}
          >
          Yarl IT Hub
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "Roboto",color: 'text.secondary' }}>
          Project Intern
          <br />
          October 2023-May 2024
          </Typography>
          </Grid>
          </Grid>
          </Grid>
          </Container>
          </motion.div>
          );
          }  

        function Services (){
          return(
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          >
          <Container id="services" maxWidth="md" sx={{ textAlign: 'center', mt: 8, mb: 8 }}>
          <Typography 
          variant="h3" 
              sx={{ 
                  mb: 6, 
                  fontFamily: "Roboto", 
                  color: '#3B5281',
                  borderBottom: '2px solid',
                  display: 'inline-block',
                  pb: 1,
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' }
                  }}
          >
          Services
          </Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
          <Box
              sx={{
                    border:'2px solid #3B5281',
                    padding: 2,                  
                    borderRadius: 2,             
                    color: 'black',   
                    '&:hover': { transform: 'scale(1.05)',
                    backgroundColor: "#8D8A9F",
                  },           
                  }}
          >
          <Box
          component="img"
              sx={{
                  height: 100,
                  width: 100,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',}
                  }}
          alt="Web Design"
          src='web design.png' 
          />
          <Typography variant="h5" sx={{fontFamily: "Roboto"}}>Web Design </Typography>
          </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box
              sx={{
                  border:'2px solid #3B5281',
                  padding: 2,                  
                  borderRadius: 2,            
                  color: 'black',
                  '&:hover': { transform: 'scale(1.05)',
                  backgroundColor: "#8D8A9F",
                  },              
                  }}
           >
          <Box
          component="img"
              sx={{
                  height: 100,
                  width: 100,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',}
                  }}
          alt="Web Development"
          src='web development.png' 
          />
          <Typography variant="h5" sx={{fontFamily: "Roboto"}}>Web Development</Typography>
          </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box
              sx={{
                  border:'2px solid #3B5281',
                  padding: 2,                  
                  borderRadius: 2,            
                  color: 'black',  
                  '&:hover': { transform: 'scale(1.05)',
                  backgroundColor: "#8D8A9F",
                  },            
                  }}
          >
          <Box
          component="img"
              sx={{
                  height: 100,
                  width: 100,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',}
                }}
          alt="UI/UX Design"
          src='uiux design.png' 
          />
          <Typography variant="h5" sx={{fontFamily: "Roboto"}}>UI/UX Design</Typography>
          </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box
              sx={{
                  border:'2px solid #3B5281', 
                  padding: 2,                  
                  borderRadius: 2,            
                  color: 'black',
                  '&:hover': { transform: 'scale(1.05)',
                  backgroundColor: "#8D8A9F",
                  },             
                  }}
          >
          <Box
          component="img"
              sx={{
                  height: 100,
                  width: 100,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',
                  }
                  }}
          alt="CV Generate"
          src='cv.jpeg' 
          />
          <Typography variant="h5" sx={{fontFamily: "Roboto"}}>Generate CV</Typography>
          </Box>
          </Grid>
          </Grid>
          </Container>
          </motion.div>
          )
          }

          const ContactSection = () => {
          const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: ''
          });
          const [formStatus, setFormStatus] = useState('');
          const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
          ...formData,
          [name]: value
          });
          };
          const handleSubmit = async (e) => {
          e.preventDefault();
          setFormStatus(''); // Clear any previous status messages
          const response = await fetch('https://formspree.io/f/xrbzwdqb', {
          method: 'POST',
          headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                   },
          body: JSON.stringify(formData)
          });
          if (response.ok) {
                setFormStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
              } else {
                setFormStatus('There was a problem sending your message.');
              }
          };
          return (
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          >
          <Container id="contact" maxWidth="md" sx={{ textAlign: 'center', mt: 8, mb: 8 }}>
          <Typography 
          variant="h3" 
                  sx={{ 
                      mb: 6, 
                      fontFamily: "Roboto", 
                      color: '#3B5281',
                      borderBottom: '2px solid',
                      display: 'inline-block',
                      pb: 1,
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'scale(1.05)' }
                    }}
            >
            Get In Touch
            </Typography>
            <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
            <Box
            component="img"
            src="bg6.avif"
            alt="Contact Image"
                  sx={{
                        width: '100%',  
                        height: '70vh', 
                        borderRadius: '10px', 
                        objectFit: 'cover', 
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', 
                      }}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
                  sx={{
                      p: 3,
                      borderRadius: 2,
                      boxShadow: 4,
                      backgroundColor: '#3B5281',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      color: '#ffffff'
                      }}
              >
              <Typography variant="h6" sx={{ fontWeight: 'medium', mb: 2 }}>
              Send a Message
              </Typography>
              <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              InputLabelProps={{
                style: { color: '#ffffff' } 
              }}
              
              />
              <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              InputLabelProps={{
                style: { color: '#ffffff' } 
              }}
              />
              <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              InputLabelProps={{
                style: { color: '#ffffff' } 
              }}
              />
              <Button
              type="submit"
              variant="outlined"
              size="large"
              fullWidth
                    sx={{
                        mt: 2,
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.05)' },
                        }}
              >
              Send Message
              </Button>
              {formStatus && (
              <Typography variant="body1" color={formStatus.includes('success') ? 'white' : 'red'}>
              {formStatus}
              </Typography>
              )}
              </Box>
              </Grid>
              </Grid>
              </Container>
              </motion.div>
              );
              };

          // function Contact() {
          //     return (
          //     <motion.div
          //     initial={{ opacity: 0, y: 50 }}
          //     animate={{ opacity: 1, y: 0 }}
          //     transition={{ duration: 1 }}
          //     >
          //     <Container id="contactme" maxWidth="lg" sx={{ my: 8}}>
          //     <Grid  alignItems="center">
          //     <Grid item xs={12} md={8}>
          //     <Box
          //           sx={{
          //               p: 3,
          //               borderLeft: '4px solid #3B5281', 
          //               backgroundColor: '#CCCCCC', 
          //               borderRadius: '8px',
          //               display: 'flex',
          //               flexDirection: 'column',
          //               gap: 2,
          //               boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          //             }}
          //     >
          //     <Typography variant="h5" sx={{ fontWeight: 'bold',fontFamily: "Roboto", color: '#3B5281' }}>
          //     Contact Information
          //     </Typography>
          //     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          //     <EmailIcon sx={{ color: '#3B5281' }} />
          //     <Typography variant="body1" sx={{ color: '#3B5281' ,fontFamily: "Roboto",transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',}}}>
          //     bbavanuja@gmail.com
          //     </Typography>
          //     </Box>
          //     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          //     <PhoneIcon sx={{ color: '#3B5281' }} />
          //     <Typography variant="body1" sx={{ color: '#3B5281' ,fontFamily: "Roboto",transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',}}}>
          //     077 2040 616
          //     </Typography>
          //     </Box>
          //     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          //     <LocationOnIcon sx={{ color: '#3B5281' }} />
          //     <Typography variant="body1" sx={{ color: '#3B5281',fontFamily: "Roboto",transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',} }}>
          //     No.4, Sanguvely North Manipay, Jaffna, Sri Lanka.
          //     </Typography>
          //     </Box>
          //     </Box>
          //     </Grid>
          //     <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          //     <Box
          //     component="img"
          //     src="Bavanuja.jpg" 
          //     alt="Your Image"
          //           sx={{
          //               width: '180px',
          //               height: '180px',
          //               borderRadius: '50%', 
          //               objectFit: 'cover', 
          //               boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', 
          //               transition: 'transform 0.3s ease-in-out', 
          //               '&:hover': {
          //                 transform: 'scale(1.05)', 
          //           },
          //           }}
          //     />
          //     </Grid>
          //     </Grid>
          //     <Typography  variant="h5" component="div" className="logo" sx={{ fontFamily: "Roboto", color: "#3B5281", fontWeight: "300", textAlign:"center", marginTop:"20px"}}>
          //     <span>&lt;</span>
          //     Bavanuja
          //     <span>/&gt;</span>
          //     </Typography>
          //     </Container>
          //     </motion.div>
          //     );
          //     }


          const Footer = () => {
            return (
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
            <Box
            component="footer"
                sx={{
                    backgroundColor: '#C1C1C1',
                    color: '#fff',
                    py: 1,
                    mt: 4,
                   }}
            >
            <Container id="contactme" maxWidth="lg" sx={{ my: 4}}>
            <Typography variant="h5" sx={{ fontWeight: 'bold',fontFamily: "Roboto", color: '#3B5281', justifyContent:'center' }}>
            Contact Information
            </Typography>
            <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <EmailIcon sx={{ color: '#3B5281' }} />
            <Typography variant="body1" sx={{ color: '#3B5281' ,fontFamily: "Roboto",transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',}}}>
            bbavanuja@gmail.com
            </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <PhoneIcon sx={{ color: '#3B5281' }} />
            <Typography variant="body1" sx={{ color: '#3B5281' ,fontFamily: "Roboto",transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',}}}>
            077 2040 616
            </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <LocationOnIcon sx={{ color: '#3B5281' }} />
            <Typography variant="body1" sx={{ color: '#3B5281',fontFamily: "Roboto",transition: 'transform 0.3s ease','&:hover': {transform: 'scale(1.05)',} }}>
            No.4, Sanguvely North Manipay, Jaffna, Sri Lanka.
            </Typography>
            </Box>
            </Box>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="center">
            <Box
            component="img"
            src="Bavanuja.jpg" 
            alt="Your Image"
                sx={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%', 
                    objectFit: 'cover', 
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', 
                    transition: 'transform 0.3s ease-in-out', 
                    '&:hover': {
                      transform: 'scale(1.05)',
                   },
                  }}
            />
              
            </Grid>
            </Grid>
            <Box textAlign="center" sx={{ mt: 4 }}>
            <Typography  variant="h5" component="div" className="logo" sx={{ fontFamily: "Roboto", color: "#3B5281", fontWeight: "300", textAlign:"center", marginTop:"20px"}}>
            <span>&lt;</span>
            Bavanuja
            <span>/&gt;</span>
            </Typography>
            <Typography variant="body2" sx={{color:'black'}}>
            © {new Date().getFullYear()} Bavanuja Kamalakkannan. All rights reserved.
            </Typography>
            </Box>
            </Container>
            </Box>
            </motion.div>
            );
            };
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
            <Education />
            <Experience />
            <Services />
            <ContactSection />
            <Footer />
            </div>
            </ThemeProvider>
            
            );
            }
            export default App;
