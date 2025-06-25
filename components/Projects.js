import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActionArea,
  CardActions, 
  Button, 
  Chip, 
  useTheme, 
  IconButton, 
  Tooltip,
  useMediaQuery,
  Divider,
  Skeleton
} from '@mui/material';
import { 
  Launch as LaunchIcon, 
  GitHub as GitHubIcon, 
  Code as CodeIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedComponent from './AnimatedComponent';

const projects = [
  {
    title: 'Real Time Messaging App',
    description: 'Built with socket.io and WebRTC featuring E2E encryption and media sharing',
    tech: ['React.js', 'Node.js', 'MongoDB', 'WebSockets', 'WebRTC'],
    images: [
      '/assets/images/chat.png',
    ],
    link: 'https://chat-app-1-npz0.onrender.com/',
    github: 'https://github.com/avnesh141/chat-app',
    features: [
      '95+ PageSpeed score',
      'End-to-end encryption',
      'Media upload capability'
    ]
  },
  // {
  //   title: 'Job Platform (NullClass)',
  //   description: 'Full-stack job portal with JWT auth, 2FA, and Razorpay integration',
  //   tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Razorpay'],
  //   images: [
  //     '/assets/images/job-platform.jpg',
  //     '/assets/images/job-platform-2.jpg',
  //     '/assets/images/job-platform-3.jpg'
  //   ],
  //   link: '#',
  //   github: '#',
  //   features: [
  //     '10+ RESTful APIs',
  //     'Two-factor authentication',
  //     'Subscription management'
  //   ]
  // },
  {
    title: 'Trading Website',
    description: 'Virtual trading platform with cryptocurrency and stock data APIs',
    tech: ['React.js', 'Node.js', 'MongoDB','JWT', 'APIs'],
    images: [
      '/assets/images/stocker.png',
    ],
    link: 'https://stocker-avnesh141.vercel.app/',
    github: 'https://github.com/avnesh141/Stocker',
    features: [
      'User authentication',
      'Dashboard management',
      'Real-time data'
    ]
  },
  {
    title: 'AI Noise Cancellation',
    description: '20-layer DCU-Net neural network using Noise2Noise approach',
    tech: ['Python', 'PyTorch', 'Deep Learning','Noise2Noise'],
    images: [
      '/assets/images/noise.webp',
    ],
    link: '#',
    github: 'https://github.com/avnesh141/btp',
    features: [
      '10 noise categories',
      'CReLU and Xavier optimization',
      'No clean dataset needed'
    ]
  }
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [hoveredProject, setHoveredProject] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});
  const containerRef = useRef(null);

  // Handle image load
  const handleImageLoad = (projectId) => {
    setImageLoaded(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-zoom-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));

    return () => {
      projectCards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <Box 
      id="projects" 
      ref={containerRef}
      sx={{ 
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3 },
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '150px',
          background: `linear-gradient(to bottom, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
          zIndex: 1,
          [theme.breakpoints.down('md')]: {
            height: '80px'
          }
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <AnimatedComponent direction="up" delay={0.1}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography 
              variant="h2" 
              component="h2"
              sx={{
                display: 'inline-block',
                fontWeight: 700,
                mb: 2,
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: '2px'
                },
                background: theme.palette.mode === 'light'
                  ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                  : `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.2
              }}
            >
              Featured Projects
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="text.secondary"
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                mb: 1
              }}
            >
              A selection of my recent work and side projects
            </Typography>
          </Box>
        </AnimatedComponent>

        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)' 
            },
            gap: { xs: 3, md: 4 },
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '100%',
              background: `radial-gradient(circle at center, ${theme.palette.primary.main}10 0%, transparent 70%)`,
              filter: 'blur(60px)',
              zIndex: -1,
              opacity: 0.7
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Card 
                elevation={0}
                sx={{
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
                    '& .project-image': {
                      transform: 'scale(1.03)',
                      '&:after': {
                        opacity: 0.1
                      }
                    },
                    '& .project-content': {
                      background: theme.palette.mode === 'dark' 
                        ? 'linear-gradient(to top, rgba(18, 18, 18, 0.9) 0%, rgba(18, 18, 18, 0.7) 100%)'
                        : 'linear-gradient(to top, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)'
                    }
                  },
                  '&:active': {
                    transform: 'translateY(-4px) scale(0.99)'
                  }
                }}
              >
                <Box 
                  className="project-image"
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
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={hoveredProject === index ? 'hover' : 'default'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={hoveredProject === index && project.images[1] 
                          ? project.images[1] 
                          : project.images[0]}
                        alt={project.title}
                        onLoad={() => handleImageLoad(project.title)}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      />
                      {!imageLoaded[project.title] && (
                        <Skeleton 
                          variant="rectangular" 
                          width="100%" 
                          height="100%" 
                          sx={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0
                          }} 
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Project Type Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      zIndex: 2,
                      px: 1.5,
                      py: 0.5,
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      boxShadow: theme.shadows[2],
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5
                    }}
                  >
                    <CodeIcon color="primary" fontSize="small" />
                    <Typography 
                      variant="caption" 
                      color="text.primary"
                      sx={{ 
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        fontSize: '0.6rem',
                        lineHeight: 1
                      }}
                    >
                      {project.tech[0]}
                    </Typography>
                  </Box>
                </Box>
                <CardContent 
                  className="project-content"
                  sx={{ 
                    flexGrow: 1,
                    p: { xs: 2, sm: 3 },
                    pt: { xs: 2, sm: 2.5 },
                    background: 'transparent',
                    transition: 'background 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    '&:last-child': { 
                      pb: { xs: 2, sm: 3 } 
                    }
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="h5" 
                      component="h3"
                      sx={{ 
                        mb: 1,
                        fontWeight: 700,
                        color: 'text.primary',
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                        lineHeight: 1.3,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        mb: 2,
                        minHeight: '40px',
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mt: 'auto' }}>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 0.75, 
                        mb: 2.5,
                        '& .MuiChip-root': {
                          height: '24px',
                          borderRadius: '6px',
                          fontSize: '0.65rem',
                          fontWeight: 500,
                          color: 'text.secondary',
                          backgroundColor: theme.palette.action.selected,
                          '&:hover': {
                            backgroundColor: theme.palette.action.hover,
                            color: 'text.primary'
                          },
                          '& .MuiChip-label': {
                            px: 1,
                            py: 0.5
                          }
                        }
                      }}
                    >
                      {project.tech.slice(0, isMobile ? 3 : 4).map((tech, i) => (
                        <Chip 
                          key={i} 
                          label={tech} 
                          size="small"
                        />
                      ))}
                      {project.tech.length > (isMobile ? 3 : 4) && (
                        <Tooltip title={project.tech.slice(isMobile ? 3 : 4).join(', ')}>
                          <Chip 
                            label={`+${project.tech.length - (isMobile ? 3 : 4)}`} 
                            size="small"
                          />
                        </Tooltip>
                      )}
                    </Box>
                    
                    <Divider sx={{ my: 1.5, opacity: 0.5 }} />
                    
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      pt: 2
                    }}>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<LaunchIcon fontSize="small" />}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          textTransform: 'none',
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          borderRadius: '8px',
                          px: 2,
                          py: 0.75,
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: theme.shadows[1]
                          }
                        }}
                      >
                        Live Demo
                      </Button>
                      
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<GitHubIcon fontSize="small" />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          textTransform: 'none',
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          borderRadius: '8px',
                          px: 2,
                          py: 0.75,
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: theme.shadows[1]
                          }
                        }}
                      >
                        Code
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;