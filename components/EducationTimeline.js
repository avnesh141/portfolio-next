import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedComponent from './AnimatedComponent';

const EducationTimeline = ({ education }) => {
  const theme = useTheme();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box id="education" sx={{ 
      py: { xs: 6, md: 10 },
      background: theme.palette.background.default
    }}>
      <Container maxWidth="lg">
        <AnimatedComponent direction="flip">
          <Typography variant="h2" align="center" sx={{ 
            mb: 6,
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #2196F3, #00BCD4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}>
            Education
          </Typography>
        </AnimatedComponent>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Box sx={{ 
                display: 'flex',
                mb: 6,
                '&:last-child': { mb: 0 }
              }}>
                <Box sx={{ 
                  width: '30%',
                  textAlign: 'right',
                  pr: 4,
                  borderRight: `2px solid ${theme.palette.primary.main}`,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    right: '-7px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: theme.palette.primary.main
                  }
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.year}
                  </Typography>
                </Box>
                <Box sx={{ 
                  width: '70%',
                  pl: 4
                }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.institution}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    {item.degree}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default EducationTimeline;
