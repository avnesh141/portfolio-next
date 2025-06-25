import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip, useTheme } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AnimatedComponent from './AnimatedComponent';

const CertificateCard = ({ certificate }) => {
  const theme = useTheme();
  
  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      borderRadius: 4,
      overflow: 'hidden',
      position: 'relative',
      background: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: `0 20px 40px -12px rgba(0,0,0,${theme.palette.mode === 'dark' ? '0.3' : '0.1'})`,
        borderColor: theme.palette.primary.main + '40',
        '& .certificate-image': {
          transform: 'scale(1.03)',
          '&:after': {
            opacity: 0.1
          }
        },
        '& .certificate-content': {
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(to top, rgba(18, 18, 18, 0.9) 0%, rgba(18, 18, 18, 0.7) 100%)'
            : 'linear-gradient(to top, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)'
        }
      },
      '&:active': {
        transform: 'translateY(-4px) scale(0.99)'
      }
    }}>
      <Box 
        className="certificate-image"
        sx={{
          position: 'relative',
          pt: '56.25%', // 16:9 aspect ratio
          overflow: 'hidden',
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
            opacity: 0.6,
            transition: 'opacity 0.4s ease',
            zIndex: 1
          }
        }}
      >
        <CardMedia
          component="img"
          image={certificate.image}
          alt={`${certificate.title} certificate`}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            backgroundColor: theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(0, 0, 0, 0.02)',
            p: 2,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      </Box>
      
      <CardContent 
        className="certificate-content"
        sx={{ 
          flexGrow: 1,
          p: 3,
          background: 'transparent',
          transition: 'background 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          '&:last-child': { 
            pb: 3 
          }
        }}
      >
        <Box sx={{ flex: '1 0 auto' }}>
          <Typography 
            variant="h6" 
            component="h3" 
            gutterBottom 
            noWrap
            sx={{ 
              fontWeight: 600,
              fontSize: '1.1rem',
              lineHeight: 1.3,
              mb: 1,
              color: theme.palette.text.primary,
            }}
          >
            {certificate.title}
          </Typography>
          
          <Typography 
            variant="subtitle2" 
            color="text.secondary" 
            gutterBottom 
            sx={{ 
              fontWeight: 500,
              mb: 1.5,
              minHeight: '20px',
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontSize: '0.9rem',
            }}
          >
            {certificate.institution}
          </Typography>
          
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mb: 2,
              minHeight: '60px',
              fontSize: '0.9rem',
              lineHeight: 1.5,
            }}
          >
            {certificate.description}
          </Typography>
        </Box>
      </CardContent>
      
      <Box sx={{ 
        p: 2,
        bgcolor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: certificate.skills ? 1 : 0,
        }}>
          <Typography 
            variant="caption" 
            color="text.secondary"
            sx={{ 
              fontSize: '0.75rem',
              fontWeight: 500,
            }}
          >
            {certificate.year}
            {certificate.credentialId && (
              <Box component="span" sx={{ mx: 0.5 }}>•</Box>
            )}
            {certificate.credentialId && (
              <Box component="span" sx={{ 
                fontSize: '0.7rem',
                fontFamily: 'monospace',
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                px: 1,
                py: 0.25,
                borderRadius: 1,
              }}>
                {certificate.credentialId}
              </Box>
            )}
          </Typography>
          
          {certificate.credentialId && (
            <Button
              variant="contained"
              size="small"
              href={certificate.verify}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: 'none',
                borderRadius: 1,
                px: 1.5,
                py: 0.5,
                fontSize: '0.75rem',
                fontWeight: 600,
                minWidth: '100px',
                height: '28px',
                bgcolor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                '&:hover': {
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                },
              }}
            >
              Verify
            </Button>
          )}
        </Box>
        
        {certificate.skills && (
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 0.5,
            mt: 1,
            maxHeight: '24px',
            overflow: 'hidden',
          }}>
            {certificate.skills.slice(0, 3).map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                size="small"
                sx={{
                  fontSize: '0.6rem',
                  height: '20px',
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.08)' 
                    : 'rgba(0, 0, 0, 0.04)',
                  color: 'text.secondary',
                  '& .MuiChip-label': {
                    px: 0.75,
                    py: 0.25,
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.12)' 
                      : 'rgba(0, 0, 0, 0.08)',
                  }
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Card>
  );
};


const ProfileCard = ({ profile }) => {
  const theme = useTheme();
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 4,
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: theme.shadows[3],
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: theme.shadows[10],
        },
        maxWidth: '100%', // Ensure it doesn't overflow on small screens
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        p: 2,
        backgroundColor: theme.palette.background.default,
        flexDirection: { xs: 'column', sm: 'row' } // Stack on mobile, row on larger screens
      }}>
        <CardMedia
          component="img"
          image={profile.icon}
          alt={`${profile.platform} logo`}
          sx={{ 
            width: { xs: '80px', sm: '100px' },
            height: { xs: '80px', sm: '100px' },
            objectFit: 'contain',
            borderRadius: '8px',
          }}
        />
        <Box sx={{ 
          ml: { sm: 2 }, 
          mt: { xs: 2, sm: 0 },
          textAlign: { xs: 'center', sm: 'left' }
        }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {profile.platform}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            @{profile.username}
          </Typography>
        </Box>
      </Box>
      
      <CardContent sx={{ 
        flexGrow: 1, 
        p: 2,
        '&:last-child': {
          pb: 2
        }
      }}>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 1,
          justifyContent: { xs: 'center', sm: 'flex-start' }
        }}>
          {profile.rating && (
            <Chip 
              label={`Rating: ${profile.rating}`} 
              size="small"
              sx={{ 
                fontWeight: 600,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(25, 118, 210, 0.2)' : 'rgba(25, 118, 210, 0.1)'
              }}
            />
          )}
          {profile.rank && (
            <Chip 
              label={profile.rank} 
              size="small"
              sx={{ 
                fontWeight: 600,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(46, 125, 50, 0.2)' : 'rgba(46, 125, 50, 0.1)'
              }}
            />
          )}
          {profile.stars && (
            <Chip 
              label={profile.stars} 
              size="small"
              sx={{ 
                fontWeight: 600,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 152, 0, 0.2)' : 'rgba(255, 152, 0, 0.1)'
              }}
            />
          )}
          {profile.problemSolved && (
            <Chip 
              label={`Solved: ${profile.problemSolved}`} 
              size="small"
              sx={{ 
                fontWeight: 600,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(25, 118, 210, 0.2)' : 'rgba(25, 118, 210, 0.1)'
              }}
            />
          )}
        </Box>
      </CardContent>
      <CardActions sx={{ 
        p: 2, 
        borderTop: `1px solid ${theme.palette.divider}` 
      }}>
        <Button
          variant="contained"
          size="small"
          fullWidth
          href={profile.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewIcon fontSize="small" />}
          sx={{
            textTransform: 'none',
            borderRadius: 2,
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              bgcolor: theme.palette.primary.dark,
            },
            py: 1,
            fontSize: '0.875rem'
          }}
        >
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
};
const Certificates = () => {
  const theme = useTheme();

  const certificates = [
    {
      title: 'AWS Cloud Technical Essentials',
      institution: 'Amazon Web Services',
      year: '2023',
      description: 'Fundamentals of AWS cloud architecture and services',
      image: '/assets/images/aws-cloud-essentials.png',
      credentialId: '5H5HJ546M9YT',
      verify:"https://www.coursera.org/account/accomplishments/certificate/5H5HJ546M9YT"
    },
    {
      title: 'HackerRank SQL Certification',
      institution: 'HackerRank',
      year: '2024',
      description: 'Advanced SQL programming and database management',
      image: '/assets/images/hackerrank-sql.png',
      credentialId: 'AE19B1CE1743',
      verify:"https://www.hackerrank.com/certificates/ae19b1ce1743",
      skills: ['Database Management System (DBMS)', 'SQL', 'Competitive Programming']
    },
    {
      title: 'HackerRank Problem Solving',
      institution: 'HackerRank',
      year: '2024',
      description: 'Expert problem solving and algorithm implementation',
      image: '/assets/images/hackerrank-problem-solving.png',
      credentialId: '3BB105C2FE86',
      verify:"https://www.hackerrank.com/certificates/3bb105c2fe86",
      skills: ['Problem Solving', 'Data Structures', 'Algorithms', 'Competitive Programming']
    },
    {
      title: 'Object Oriented Programming (C++)',
      institution: 'Coursera',
      year: '2023',
      description: 'Advanced C++ programming and OOP concepts',
      image: '/assets/images/cpp-certification.png'
    },
    {
      title: 'Google Project Management',
      institution: 'Google/Coursera',
      year: '2023',
      description: 'Professional project management methodologies and practices',
      image: '/assets/images/google-project-management.png'
    }
  ];

  const competitiveProfiles = [
    {
      platform: 'LeetCode',
      username: 'avnesh',
      rating: '2001',
      rank:'Knight',
      problemSolved:'1000+',
      profileUrl: 'https://leetcode.com/u/avnesh/',
      icon: '/assets/images/leetcode-icon.png'
    },
    {
      platform: 'CodeForces',
      username: 'avnesh',
      rating: '1410',
      rank:'Specialist',
      problemSolved:'400+',
      profileUrl: 'https://codeforces.com/profile/avnesh',
      icon: '/assets/images/codeforces-icon.png'
    },
    {
      platform: 'CodeChef',
      username: 'avnesh',
      rating:1682,
      stars: '3★',
      problemSolved:'100+',
      profileUrl: 'https://www.codechef.com/users/avnesh',
      icon: '/assets/images/codechef-icon.jpeg'
    }
  ];

  return (
    <>
    <Box id="certificates" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <AnimatedComponent>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{
              mb: 6,
              background: theme.palette.mode === 'dark' 
                ? 'linear-gradient(45deg, #FF8A65 30%, #FFC107 90%)' 
                : 'linear-gradient(45deg, #FF5722 30%, #FF9800 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Certifications
          </Typography>
        </AnimatedComponent>

        <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
          {certificates.map((cert, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index} 
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
                '& > div': {
                  width: '100%',
                  maxWidth: '345px',
                }
              }}
            >
              <AnimatedComponent delay={index * 0.1} sx={{ width: '100%', height: '100%' }}>
                <CertificateCard certificate={cert} />
              </AnimatedComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* Competitive Programming Profiles Section */}
    <Box sx={{ py: 8, background: theme.palette.background.default }} id="competitive-profiles">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Competitive Programming Profiles
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
            My profiles on various competitive programming platforms.
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'stretch', mt: 4 }}>
          {competitiveProfiles.map((profile, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <AnimatedComponent delay={index * 0.1} sx={{ width: '100%', height: '100%' }}>
                <ProfileCard profile={profile} />
              </AnimatedComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </>
  );
};

export default Certificates;
