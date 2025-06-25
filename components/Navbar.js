// Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useThemeContext } from '../context/ThemeContext';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? 'rgba(15, 32, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderBottom: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { darkMode, toggleTheme } = useThemeContext();

  const menuItems = [
    { text: 'Home', path: '#home' },
    { text: 'Experience', path: '#experience' },
    { text: 'Projects', path: '#projects' },
    { text: 'Achievements', path: '#achievements' },
    { text: 'Contact', path: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box 
      sx={{ 
        width: 280,
        height: '100%',
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #0f2027 0%, #203a43 100%)' 
          : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
        color: theme.palette.text.primary,
      }}
      role="presentation"
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6">Menu</Typography>
        <Box>
          {/* <IconButton onClick={toggleTheme} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton> */}
          <IconButton onClick={handleDrawerToggle} sx={{ color: theme.palette.text.primary }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            // button 
            key={item.text} 
            component="a" 
            href={item.path}
            onClick={handleDrawerToggle}
            sx={{
              py: 2,
              '&:hover': {
                background: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.1)',
              }
            }}
          >
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ 
                variant: 'h6',
                color: 'text.primary',
                fontWeight: 500,
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledAppBar position="fixed" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography 
          variant="h6" 
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ 
            fontWeight: 700,
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(90deg, #fff 0%, #a8edea 100%)' 
              : 'linear-gradient(90deg, #0f2027 0%, #203a43 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Portfolio
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {!isMobile && (
            <>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={motion.a}
                  href={item.path}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      background: theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.1)' 
                        : 'rgba(0, 0, 0, 0.1)',
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              {/* <IconButton 
                onClick={toggleTheme}
                color="inherit"
                sx={{ 
                  color: 'text.primary',
                  '&:hover': {
                    background: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'rgba(0, 0, 0, 0.1)',
                  }
                }}
              >
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton> */}
            </>
          )}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
};

export default Navbar;