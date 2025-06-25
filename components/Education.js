import React from 'react';
import { Box, Typography, Container, useTheme, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Education = () => {
  const theme = useTheme();

  const educationData = [
    {
      institution: "Indian Institute of Technology (BHU), Varanasi",
      degree: "B.Tech in Electrical Engineering",
      year: "2021 - 2025",
      description: "CGPA: 8.48",
      icon: <WorkspacePremiumIcon fontSize="large" />
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Sambhal, Uttar Pradesh",
      degree: "Higher Secondary (CBSE)",
      year: "2019 - 2020",
      description: "Percentage: 93.2% | Specialized in Physics, Chemistry, and Mathematics",
      icon: <SchoolIcon fontSize="large" />
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Sambhal, Uttar Pradesh",
      degree: "Secondary (CBSE)",
      year: "2017 - 2018",
      description: "Percentage: 92.4% | Consistently ranked among the top students in the school",
      icon: <SchoolIcon fontSize="large" />
    }
  ];

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

  const iconVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { 
        duration: 0.3,
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {educationData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Box sx={{ 
                display: 'flex',
                mb: 6,
                '&:last-child': { mb: 0 },
                flexDirection: { xs: 'column', md: 'row' }
              }}>
                <Box sx={{ 
                  width: { xs: '100%', md: '30%' },
                  textAlign: { xs: 'center', md: 'right' },
                  pr: { md: 4 },
                  borderRight: { md: `2px solid ${theme.palette.primary.main}` },
                  position: 'relative',
                  mb: { xs: 2, md: 0 },
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    right: { xs: '50%', md: '-7px' },
                    top: { xs: 'auto', md: '50%' },
                    bottom: { xs: '-15px', md: 'auto' },
                    transform: { xs: 'translateX(50%)', md: 'translateY(-50%)' },
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: theme.palette.primary.main
                  }
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.year}
                  </Typography>
                  
                  <motion.div
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Avatar 
                      sx={{ 
                        width: 80, 
                        height: 80, 
                        margin: { xs: '0 auto', md: '10px 0 0 auto' },
                        boxShadow: 3,
                        border: `2px solid ${theme.palette.primary.main}`,
                        bgcolor: theme.palette.primary.main,
                        color: theme.palette.common.white
                      }} 
                    >
                      {item.icon}
                    </Avatar>
                  </motion.div>
                </Box>
                
                <Box sx={{ 
                  width: { xs: '100%', md: '70%' },
                  pl: { md: 4 },
                  pt: { xs: 4, md: 0 }
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

export default Education;