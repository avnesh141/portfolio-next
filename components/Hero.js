import React from 'react';
import { Box, Typography, Button, Container, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedComponent from './AnimatedComponent';
import ParticlesBackground from './ParticlesBackground';

const Hero = ({ children }) => {

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 },
        pb: { xs: 8, md: 0 },
        background: 'radial-gradient(circle at center, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      }}
    >
      <ParticlesBackground />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 4 }}>
        <Grid 
          container 
          spacing={6} 
          alignItems="center"
          justifyContent="center"
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <AnimatedComponent direction="right" delay={0.2}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  component={motion.div}
                  sx={{
                    color: '#a8edea',
                    fontWeight: 600,
                    letterSpacing: 2,
                    mb: 1,
                    textTransform: 'uppercase',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                  }}
                >
                  Welcome to My Creative Space
                </Typography>
                <Typography
                  variant="h1"
                  component={motion.h1}
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                    fontSize: { 
                      xs: '2.5rem', 
                      sm: '3.5rem', 
                      md: '4.5rem' 
                    },
                    lineHeight: 1.1,
                    mb: 2,
                    background: 'linear-gradient(90deg, #fff 0%, #a8edea 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  }}
                >
                  Hi, I'm <Box component="span" sx={{ 
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, #21cbf3 0%, #2196f3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 15px rgba(33, 150, 243, 0.4)'
                  }}>Avnesh Kumar</Box>
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { 
                      xs: '1.25rem', 
                      sm: '1.5rem', 
                      md: '2rem' 
                    },
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.9)',
                    mb: 4,
                    maxWidth: '600px',
                  }}
                >
                  Full Stack Developer & Competitive Programmer
                </Typography>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                gap: 3,
                justifyContent: { xs: 'center', md: 'flex-start' },
                flexWrap: 'wrap',
                mt: 4
              }}>
                <Button
                  component={motion.a}
                  href="#projects"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: '50px',
                    background: 'linear-gradient(45deg, #2196f3 0%, #21cbf3 100%)',
                    color: '#fff',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(33, 150, 243, 0.6)',
                    },
                  }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore My Work
                </Button>
                <Button
                  component={motion.a}
                  href="#contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderWidth: '2px',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '50px',
                    color: '#fff',
                    borderColor: '#a8edea',
                    '&:hover': {
                      borderWidth: '2px',
                      transform: 'translateY(-2px)',
                      background: 'rgba(168, 237, 234, 0.1)',
                      borderColor: '#a8edea',
                    },
                  }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's Connect
                </Button>
              </Box>

              <Box sx={{ mt: 3 }}>
                {children}
              </Box>

            </AnimatedComponent>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <AnimatedComponent direction="left" delay={0.4}>
              <Box sx={{ 
                position: 'relative',
                width: { xs: 250, md: 350 },
                height: { xs: 250, md: 350 },
              }}>
                <Box
                  component={motion.div}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    delay: 0.4
                  }}
                  whileHover={{ scale: 1.03 }}
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '5px solid rgba(168, 237, 234, 0.3)',
                    boxShadow: '0 15px 35px -5px rgba(0,0,0,0.4)',
                    position: 'relative',
                    zIndex: 2,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.2), rgba(33, 203, 243, 0.2))',
                      zIndex: 1,
                    }
                  }}
                >
                  <Avatar
                    src="/assets/images/profile.jpg"
                    alt="Profile"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Box
                  component={motion.div}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.6,
                    type: 'spring',
                    stiffness: 100,
                    damping: 20
                  }}
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    borderRadius: '50%',
                    border: '2px dashed rgba(168, 237, 234, 0.4)',
                    animation: 'rotate 20s linear infinite',
                    '@keyframes rotate': {
                      '0%': { transform: 'rotate(0deg)' },
                      '100%': { transform: 'rotate(360deg)' }
                    }
                  }}
                />
              </Box>
            </AnimatedComponent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;