import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, useTheme, Divider, InputAdornment, IconButton, Card, Link } from '@mui/material';
import { Person, Email, Message, Phone, LocationOn, LinkedIn, GitHub, Twitter, Send } from '@mui/icons-material';
import { motion } from 'framer-motion';
import AnimatedComponent from './AnimatedComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const [buttonText,setButtonText]=useState("Send Message");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonText("Sending Message");
      toast.info('Sending message...');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        toast.error(data.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Network error. Try again later.');
    } finally {
      setButtonText("Send Message");
    }
  };


  return (
    <Box id='contact' component="section" sx={{ py: 10, bgcolor: 'background.default', color: 'text.primary' }}>
      <Container maxWidth="lg">
        <AnimatedComponent direction="rotate">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 8,
              fontWeight: 'bold',
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)'
                : 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get In Touch
          </Typography>
        </AnimatedComponent>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <AnimatedComponent direction="right">
              <Box
                component={motion.div}
                whileHover={{
                  y: -5,
                  boxShadow: theme.shadows[6],
                }}
                sx={{
                  p: 5,
                  height: '100%',
                  borderRadius: 4,
                  background: 'background.paper',
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
                  Send Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Message color="primary" sx={{ alignSelf: 'flex-start', mt: 1 }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        disabled={buttonText=="Sending Message"}
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        endIcon={<Send />}
                        sx={{
                          mt: 3,
                          px: 4,
                          py: 1.5,
                          fontWeight: 'bold',
                          borderRadius: '50px',
                          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                          boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                          '&:hover': {
                            boxShadow: '0 5px 7px 3px rgba(33, 203, 243, .4)',
                            transform: 'translateY(-2px)',
                          }
                        }}
                      >
                        {buttonText}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </AnimatedComponent>
          </Grid>

          <Grid item xs={12} md={2}>
  <AnimatedComponent direction="left" delay={0.2}>
    <Box 
      component={motion.div}
      whileHover={{ 
        y: -5,
        boxShadow: theme.shadows[6],
      }}
      sx={{ 
        p: { xs: 2, sm: 3, md: 4 },
        height: '100%',
        borderRadius: 4,
        background: 'background.paper',
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          mb: { xs: 2, sm: 3, md: 4 }, 
          fontWeight: 'bold',
          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } 
        }}
      >
        Contact Information
      </Typography>
    
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2, md: 3 } }}>
        <ContactInfoCard 
          icon={<Email color="primary" />} 
          title="Email" 
          content="avneshkumar5435487@gmail.com" 
          link="mailto:avneshkumar5435487@gmail.com"
          compact={true}
        />
        <ContactInfoCard 
          icon={<Phone color="primary" />} 
          title="Phone" 
          content="+91 7895414317" 
          link="tel:+917895414317"
          compact={true}
        />
        <ContactInfoCard 
          icon={<LocationOn color="primary" />} 
          title="Location" 
          content="Budaun, India"
          compact={true}
        />
        
        <Box sx={{ mt: { xs: 1.5, sm: 2, md: 3 } }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' } 
            }}
          >
            Connect with me
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 1, sm: 1.5, md: 2 }, 
            mt: { xs: 1, sm: 1.5 },
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}>
            <IconButton 
              color="primary" 
              href="https://linkedin.com/in/avnesh-kumar" 
              target="_blank"
              size="small"
              sx={{ 
                bgcolor: theme.palette.primary.light, 
                '&:hover': { bgcolor: theme.palette.primary.main },
                width: { xs: 34, sm: 38, md: 40 },
                height: { xs: 34, sm: 38, md: 40 }
              }}
            >
              <LinkedIn fontSize="inherit" />
            </IconButton>
            <IconButton 
              color="primary" 
              href="https://github.com/avnesh141" 
              target="_blank"
              size="small"
              sx={{ 
                bgcolor: theme.palette.primary.light, 
                '&:hover': { bgcolor: theme.palette.primary.main },
                width: { xs: 34, sm: 38, md: 40 },
                height: { xs: 34, sm: 38, md: 40 }
              }}
            >
              <GitHub fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  </AnimatedComponent>
</Grid>
        </Grid>
      </Container>
      <ToastContainer position="bottom-right" />
    </Box>
  );
};

// ContactInfoCard component (should be defined separately)
const ContactInfoCard = ({ icon, title, content, link, compact = false }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: compact ? 1.5 : 2,
        p: compact ? 1 : 1.5,
        borderRadius: 2,
        transition: 'background-color 0.2s',
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: theme.palette.primary.light,
          p: compact ? 1 : 1.5,
          borderRadius: '50%',
          color: theme.palette.primary.main,
        }}
      >
        {React.cloneElement(icon, { fontSize: compact ? 'small' : 'medium' })}
      </Box>
      <Box sx={{ overflow: 'hidden' }}>
        <Typography 
          variant={compact ? 'body2' : 'subtitle2'} 
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          {title}
        </Typography>
        {link ? (
          <Link 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ 
              color: 'text.primary',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            <Typography 
              variant={compact ? 'body2' : 'body1'} 
              noWrap
              sx={{ fontWeight: 600 }}
            >
              {content}
            </Typography>
          </Link>
        ) : (
          <Typography 
            variant={compact ? 'body2' : 'body1'} 
            noWrap
            sx={{ fontWeight: 600 }}
          >
            {content}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
export default Contact;