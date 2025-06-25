import React from 'react';
import { Box, Typography, Container, useTheme, Card, Chip, Grid } from '@mui/material';
import { EmojiEvents, School, Code } from '@mui/icons-material';
import AnimatedComponent from './AnimatedComponent';

const achievements = [
  {
    title: "JEE Advanced 2021",
    description: "All India Rank 5843 among 150,000+ candidates",
    icon: <School sx={{ fontSize: 40 }} />,
    year: "2021"
  },
  {
    title: "Competitive Programming",
    description: "Leetcode (2001 rating), Codeforces (1410 rating), 1500+ problems solved",
    icon: <Code sx={{ fontSize: 40 }} />,
    year: "Ongoing"
  },
  {
    title: "Codechef Rankings",
    description: "Global Rank 24 (April Long 2022), Global Rank 60 (August Long 2022)",
    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
    year: "2022"
  },
  {
    title: "Leetcode Contests",
    description: "Global Rank 687 in Weekly Contest 412 (Top 2%) among 35,000+ participants",
    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
    year: "2022"
  }
];

const Achievements = () => {
  const theme = useTheme();

  return (
    <Box id="achievements" sx={{ 
      py: { xs: 6, md: 8 },
      background: theme.palette.background.default
    }}>
      <Container maxWidth="md">
        <AnimatedComponent direction="down">
          <Typography variant="h2" align="center" sx={{
            mb: 5,
            fontWeight: 700,
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' }
          }}>
            Achievements
          </Typography>
        </AnimatedComponent>

        <AnimatedComponent direction="zoom">
          <Grid container spacing={3} justifyContent="center">
            {achievements.map((achievement, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <AnimatedComponent direction="up" delay={index * 0.1}>
                  <Card sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: theme.shadows[2],
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[6]
                    }
                  }}>
                    <Box sx={{ 
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}>
                      <Box sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2
                      }}>
                        {React.cloneElement(achievement.icon, { sx: { fontSize: 28 } })}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {achievement.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ 
                        mb: 2,
                        fontSize: '0.9rem'
                      }}>
                        {achievement.description}
                      </Typography>
                      <Chip 
                        label={achievement.year}
                        size="small"
                        color="primary"
                        sx={{ 
                          fontWeight: 500,
                          fontSize: '0.8rem'
                        }}
                      />
                    </Box>
                  </Card>
                </AnimatedComponent>
              </Grid>
            ))}
          </Grid>
        </AnimatedComponent>
      </Container>
    </Box>
  );
};

export default Achievements;