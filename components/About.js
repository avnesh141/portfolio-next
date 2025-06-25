import React from 'react';
import { Box, Typography, Container, Grid, Paper, Avatar, Chip, useTheme, styled } from '@mui/material';
import { Work, School, Code, Star } from '@mui/icons-material';
import { motion } from 'framer-motion';
import AnimatedComponent from './AnimatedComponent';

const StyledBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 70%)',
    zIndex: 1,
  }
}));

const About = () => {
  const theme = useTheme();

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'SQL', level: 75 },
    { name: 'Git', level: 85 },
    { name: 'REST APIs', level: 85 },
    { name: 'Material-UI', level: 90 },
    { name: 'Responsive Design', level: 95 },
    { name: 'Problem Solving', level: 90 }
  ];

  return (
    <StyledBox component="section" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <AnimatedComponent direction="down" delay={0.2}>
          <Typography
            variant="h2"
            component={motion.h2}
            align="center"
            sx={{ 
              mb: 6,
              background: 'linear-gradient(45deg, #fff, #e0e0e0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            About Me
          </Typography>
        </AnimatedComponent>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <AnimatedComponent direction="right">
              <Paper
                component={motion.div}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                }}
                sx={{ 
                  mb: 4,
                  p: 4,
                  borderRadius: 4,
                  bgcolor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  mb: 3,
                  color: 'white'
                }}>
                  <Work sx={{ mr: 2, color: 'primary.light' }} /> Professional Journey
                </Typography>
                <Typography variant="body1" paragraph sx={{ 
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.8,
                }}>
                  With over 5 years of experience in web development, I&apos;ve crafted digital solutions for startups and enterprises alike. My passion lies in creating intuitive, performant applications that deliver exceptional user experiences.
                </Typography>
                <Box sx={{ mt: 3 }}>
                  {[1, 2, 3].map((item) => (
                    <Box key={item} sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 2,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'rgba(0,0,0,0.2)',
                    }}>
                      <Avatar sx={{ 
                        bgcolor: 'primary.main', 
                        mr: 2,
                        width: 40,
                        height: 40
                      }}>
                        {item}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" sx={{ color: 'white' }}>
                          Position at Company {item}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                          20{20+item} - Present
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </AnimatedComponent>
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatedComponent direction="left" delay={0.2}>
              <Paper
                component={motion.div}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                }}
                sx={{ 
                  p: 4,
                  borderRadius: 4,
                  bgcolor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                  color: 'white'
                }}>
                  <Code sx={{ mr: 2, color: 'primary.light' }} /> My Skills
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: 2
                }}>
                  {skills.map((skill, index) => (
                    <Box key={index}>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        mb: 1
                      }}>
                        <Typography variant="body1" sx={{ color: 'white' }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                          {skill.level}%
                        </Typography>
                      </Box>
                      <Box sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: 'rgba(0,0,0,0.3)',
                        overflow: 'hidden',
                        position: 'relative'
                      }}>
                        <Box 
                          component={motion.div}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1,
                            delay: index * 0.1,
                            type: 'spring'
                          }}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            background: 'linear-gradient(90deg, #2196F3, #00BCD4)',
                            borderRadius: 4
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </AnimatedComponent>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default About;