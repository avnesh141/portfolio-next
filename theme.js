import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5722', // Vibrant orange
      light: '#FF8A65',
      dark: '#E64A19',
    },
    secondary: {
      main: '#2196F3', // Bright blue
      light: '#64B5F6',
      dark: '#1976D2',
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FFC107',
    },
    error: {
      main: '#F44336',
    },
    info: {
      main: '#29B6F6',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      fontSize: '4rem',
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
      background: 'linear-gradient(90deg, #FF5722 0%, #FF9800 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      background: 'linear-gradient(90deg, #29B6F6 0%, #81D4FA 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          fontWeight: 600,
          padding: '12px 28px',
          textTransform: 'none',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #FF5722 0%, #FF9800 100%)',
        },
        containedSecondary: {
          background: 'linear-gradient(90deg, #2196F3 0%, #21CBF3 100%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02) rotate(1deg)',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.25)',
          },
        },
      },
    },
  },
});

export default theme;
