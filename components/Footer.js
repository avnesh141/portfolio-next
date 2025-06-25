import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Link, styled } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

const StyledFooter = styled(Box)(() => ({
  background: 'linear-gradient(135deg, #0f2027 0%, #203a43 100%)',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 70%)',
    zIndex: 1,
  }
}));

const AnimatedComponent = ({ children, direction }) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Footer = () => {

  return (
    <StyledFooter component="footer" sx={{ py: 8 }}>
      <AnimatedComponent direction="fade">
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h5" 
                gutterBottom 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                sx={{ 
                  fontWeight: 700,
                  mb: 3,
                  background: 'linear-gradient(90deg, #fff 0%, #a8edea 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Let&apos;s Work Together
              </Typography>
              <Typography 
                variant="body1" 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                sx={{ 
                  mb: 3,
                  color: 'rgba(255,255,255,0.8)',
                  maxWidth: '500px'
                }}
              >
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
              </Typography>
              <Box 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                sx={{ display: 'flex', gap: 2, mt: 2 }}
              >
                <IconButton
                  component={motion.a}
                  href="https://linkedin.com/in/avnesh-kumar"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                    }
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  component={motion.a}
                  href="https://github.com/avnesh141"
                  target="_blank"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                    }
                  }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  component={motion.a}
                  href="mailto:avneshkuumar5435487@gmail.com"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                    }
                  }}
                >
                  <Email />
                </IconButton>
              </Box>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography 
                variant="h6" 
                gutterBottom 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                sx={{ fontWeight: 600 }}
              >
                Quick Links
              </Typography>
              <Box 
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
              >
                {['Home', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    component={motion.a}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      '&:hover': {
                        color: 'white',
                        textDecoration: 'none',
                      }
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography 
                variant="h6" 
                gutterBottom 
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                sx={{ fontWeight: 600 }}
              >
                Contact
              </Typography>
              <Box 
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
              >
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>avneshkumar5435487@gmail.com</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>+91 7895414317</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>Budaun, India</Typography>
              </Box>
            </Grid>
          </Grid>

          <Box 
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            sx={{ 
              mt: 6, 
              pt: 3, 
              borderTop: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
            }}
          >
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
              &copy; {new Date().getFullYear()} Avnesh Kumar. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </AnimatedComponent>
    </StyledFooter>
  );
};

export default Footer;