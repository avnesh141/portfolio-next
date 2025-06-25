import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  useMediaQuery, 
  useTheme,
  CardContent,
  CardHeader,
  Avatar,
  Chip,
  Button
} from '@mui/material';
import { 
  Work as WorkIcon, 
  School as SchoolIcon, 
  Code as CodeIcon, 
  Star as StarIcon, 
  ArrowForward as ArrowForwardIcon 
} from '@mui/icons-material';
import AnimatedComponent from './AnimatedComponent';

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "EES, IIT(BHU)",
    duration: "Oct 2022 - Apr 2023",
    location: "Varanasi, India",
    responsibilities: [
      "Developed responsive web applications using React.js",
      "Collaborated with design team to implement UI/UX designs",
      "Optimized application performance and cross-browser compatibility",
      "Integrated with backend APIs and implemented state management"
    ],
    skills: ["React.js", "JavaScript", "HTML/CSS", "Git", "Responsive Design"],
    icon: <CodeIcon sx={{ fontSize: 40 }} />
  },
  {
    id: 2,
    role: "Prompt Engineer",
    company: "Remotasks",
    duration: "Dec 2023 - Mar 2024",
    location: "Remote",
    responsibilities: [
      "Evaluated 1000+ AI responses, ensuring quality through performance metrics",
      "Completed 5+ missions across 4 projects, specializing in prompt evaluation",
      "Improved prompt design and model outputs through structured feedback",
      "Maintained review accuracy, enhancing overall AI system performance"
    ],
    skills: ["AI Prompt Engineering", "QA", "Performance Analysis"],
    icon: <WorkIcon sx={{ fontSize: 40 }} />
  },
  {
    id: 3,
    role: "AI Research Project",
    company: "IIT BHU (Under Prof. Dr. Kishor P. Sarawadekar)",
    duration: "Jan 2024 - April 2024",
    responsibilities: [
      "Built 20-layer DCU-Net neural network for noise cancellation",
      "Implemented Noise2Noise approach across 10 noise categories",
      "Optimized model training with CReLU and Xavier functions"
    ],
    skills: ["Deep Learning", "Python", "TensorFlow", "Neural Networks"],
    icon: <CodeIcon sx={{ fontSize: 40 }} />
  },
  {
    id: 4,
    role: "Full Stack Developer Intern",
    company: "NullClass",
    duration: "May 2024 - July 2024",
    location: "Remote",
    responsibilities: [
      "Designed and developed a full-stack job platform with 10+ RESTful APIs",
      "Implemented JWT authentication and 2FA via email OTP",
      "Integrated Razorpay for subscription management",
      "Built responsive interfaces with React and Node.js"
    ],
    skills: ["React", "Node.js", "MongoDB", "JWT", "REST APIs"],
    icon: <WorkIcon sx={{ fontSize: 40 }} />
  }
];

const ExperienceCard = ({ experience, index, theme, isMobile }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <Box
      sx={{
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          left: { xs: 24, md: '50%' },
          top: { xs: 0, md: '50%' },
          transform: {
            xs: 'translateX(-50%)',
            md: isEven ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)',
          },
          width: 16,
          height: 16,
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.main,
          border: `3px solid ${theme.palette.background.paper}`,
          zIndex: 1,
          transition: 'all 0.3s ease',
          boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
        },
        '&:hover:before': {
          transform: {
            xs: 'translateX(-50%) scale(1.2)',
            md: isEven ? 'translate(-50%, -50%) scale(1.2)' : 'translate(-50%, -50%) scale(1.2)',
          },
          boxShadow: `0 0 0 3px ${theme.palette.primary.main}, 0 0 15px ${theme.palette.primary.main}80`,
        },
      }}
    >
      <AnimatedComponent
        direction={isEven ? 'left' : 'right'}
        delay={0.1 + index * 0.1}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <Card
          sx={{
            borderRadius: 2,
            overflow: 'visible',
            boxShadow: theme.shadows[2],
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: theme.shadows[8],
              transform: 'translateY(-4px)',
            },
            width: { xs: '100%', md: 'calc(50% - 16px)' },
            ml: { xs: 0, md: isEven ? 0 : 'auto' },
            mr: { xs: 0, md: isEven ? 'auto' : 0 },
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: theme.palette.primary.main,
                  width: 56,
                  height: 56,
                  '& .MuiSvgIcon-root': {
                    fontSize: '2rem',
                  },
                }}
              >
                {experience.icon}
              </Avatar>
            }
            title={
              <Typography variant="h6" component="div">
                {experience.role}
              </Typography>
            }
            subheader={
              <Box>
                <Typography variant="subtitle1" color="text.primary">
                  {experience.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {experience.duration} • {experience.location}
                </Typography>
              </Box>
            }
            sx={{
              '& .MuiCardHeader-content': {
                overflow: 'hidden',
              },
            }}
          />
          <CardContent>
            <Box component="ul" sx={{ pl: 2, mb: 0 }}>
              {experience.responsibilities.slice(0, isExpanded ? undefined : 3).map((item, i) => (
                <Typography
                  component="li"
                  key={i}
                  variant="body2"
                  sx={{
                    mb: 1,
                    display: 'flex',
                    alignItems: 'flex-start',
                    '&:before': {
                      content: '"•"',
                      color: theme.palette.primary.main,
                      mr: 1,
                      mt: '0.2em',
                      fontSize: '1.2em',
                      lineHeight: 1,
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
              {experience.responsibilities.length > 3 && (
                <Button
                  size="small"
                  onClick={() => setIsExpanded(!isExpanded)}
                  sx={{
                    mt: 1,
                    textTransform: 'none',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {isExpanded ? 'Show Less' : `+${experience.responsibilities.length - 3} More`}
                </Button>
              )}
            </Box>
            <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {experience.skills.map((skill, i) => (
                <Chip
                  key={i}
                  label={skill}
                  size="small"
                  sx={{
                    borderRadius: 1,
                    backgroundColor: theme.palette.action.selected,
                    color: 'text.secondary',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                      color: 'text.primary',
                    },
                  }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </AnimatedComponent>
    </Box>
  );
};

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="experience" sx={{ py: 8, position: 'relative', bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <AnimatedComponent direction="up" delay={0.1}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 6,
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: '2px',
              },
              background:
                theme.palette.mode === 'light'
                  ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                  : `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              lineHeight: 1.2,
            }}
          >
            Work Experience
          </Typography>
        </AnimatedComponent>

        <Box
          sx={{
            position: 'relative',
            mt: 6,
            '&:before': {
              content: '""',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}00, ${theme.palette.primary.main}80, ${theme.palette.primary.main}00)`,
              display: { xs: 'none', md: 'block' },
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              position: 'relative',
            }}
          >
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                theme={theme}
                isMobile={isMobile}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;