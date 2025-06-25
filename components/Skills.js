import React, { useState } from 'react';
import { Box, Typography, Container, LinearProgress, useTheme, Card } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import AnimatedComponent from './AnimatedComponent';

const skills = [
  { name: 'C/C++', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'React.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Data Structures', level: 95 },
  { name: 'Algorithms', level: 95 },
  { name: 'MongoDB', level: 80 },
  { name: 'AWS', level: 75 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Git', level: 85 },
  { name: 'PyTorch', level: 70 }
];

const Skills = () => {
  const theme = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <Box id="skills" sx={{ 
      py: 10,
      background: theme.palette.background.paper,
      px: { xs: 2, sm: 3, md: 4 }
    }}>
      <Container maxWidth="lg">
        <AnimatedComponent direction="down">
          <Typography variant="h2" align="center" sx={{ 
            mb: 6,
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #2196F3, #00BCD4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}>
            Technical Skills
          </Typography>
        </AnimatedComponent>

        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          '& > *': {
            flex: '1 1 300px',
            maxWidth: '100%',
            minWidth: '250px'
          }
        }}>
          {skills.map((skill, index) => (
            <AnimatedComponent 
              key={index} 
              direction={index % 2 === 0 ? "right" : "left"} 
              delay={index * 0.1}
            >
              <Card
                elevation={hoveredSkill === index ? 6 : 2}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: 3,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Box sx={{ mb: 2.5 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mb: 1.5
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        color: 'text.primary',
                        fontSize: '1.1rem'
                      }}
                    >
                      {skill.name}
                    </Typography>
                    <Box 
                      sx={{
                        bgcolor: 'primary.light',
                        color: 'primary.contrastText',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                      }}
                    >
                      {skill.level}%
                    </Box>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={skill.level} 
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 4,
                        background: 'linear-gradient(90deg, #2196F3, #00BCD4)',
                        transition: 'transform 0.6s ease',
                        transform: hoveredSkill === index ? 'scaleX(1.02)' : 'scaleX(1)'
                      },
                      backgroundColor: theme.palette.mode === 'light' ? '#e9ecef' : '#2d333b',
                      overflow: 'hidden',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.2) 100%)',
                        opacity: 0.3,
                        transition: 'opacity 0.3s ease',
                        pointerEvents: 'none'
                      },
                      '&:hover:before': {
                        opacity: hoveredSkill === index ? 0.5 : 0.3
                      }
                    }}
                  />
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mt: 1.5,
                  '& svg': {
                    color: 'primary.main',
                    mr: 1
                  }
                }}>
                  <TrendingUp fontSize="small" />
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                    {skill.level < 50 ? 'Beginner' : skill.level < 80 ? 'Proficient' : 'Expert'}
                  </Typography>
                </Box>
              </Card>
            </AnimatedComponent>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;