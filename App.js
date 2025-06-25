import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Button } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievement';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import { ThemeProvider } from './context/ThemeContext';
import { createTheme } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';

function App() {

  const theme = createTheme({
    palette: {
      mode: 'light', // or 'dark'
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <ThemeProvider>
      <MuiThemeProvider theme={theme}>  
        <CssBaseline />
          <Box sx={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.default',
          }}>
            <Navbar />
            <Box component="main" sx={{ flex: 1 }}>
              <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 8 }, py: { xs: 4, md: 8 } }}>
                  <Hero id="home">
                    <Button 
                      variant="contained" 
                      color="primary" 
                      startIcon={<DownloadIcon />}
                      href="/resume.pdf"
                      download
                      sx={{ 
                        mt: 3,
                        px: 4,
                        py: 1,
                        fontSize: '1.1rem',
                        borderRadius: '50px',
                        boxShadow: '0 4px 14px rgba(0, 0, 255, 0.4)',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 6px 20px rgba(0, 0, 255, 0.5)'
                        }
                      }}
                    >
                      Download Resume
                    </Button>
                  </Hero>
                  <Education id="education" />
                  <Skills id="skills" />
                  <Experience id="experience" />
                  <Achievements id="achievements" />
                  <Certificates id="certificates" />
                  <Projects id="projects" />
                  <Contact id="contact" />
                </Box>
              </Container>
            </Box>
            <Footer />
          </Box>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;