import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const buttonStyles = {
  fontSize: 14,
  fontFamily: 'serif',
  margin: '0 20px'
};

// Apply background image styles directly to the AppBar container
const navbarStyles = {
  backdropFilter: 'blur(8px)', // Adjust the blur intensity here (e.g., 8px for moderate blur)
  backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent white background
  boxShadow: 'none', // No box shadow
  height: '80px', // Adjust the height of the AppBar here
};

const toolbarStyles = {
  minHeight: '80px', // Ensure Toolbar height matches AppBar height
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 20px', // Adjust padding for better spacing
};

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/adm' || location.pathname === '/reg') {
    return (
      <Box sx={{ flexGrow: 1, marginTop: 7 }}>
        <AppBar position="absolute" sx={{ ...navbarStyles }}>
          <Toolbar sx={{ ...toolbarStyles }}>
            <Typography variant="h6" noWrap component="a" sx={{ mr: 5, display: { xs: 'none', md: 'flex' }, fontFamily: 'serif', fontWeight: 700, letterSpacing: '.3rem', color: 'white', textDecoration: 'none', }}>
              <img src="logo4bg.png" alt="Logo" style={{ width: 280, height: 120, marginLeft: -16.5, marginTop: 3 }} />
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}></Box>
            <Typography>
              <Button color="inherit" component={Link} to="/" sx={buttonStyles}>
                User
              </Button>
              <Button color="inherit" component={Link} to="/adm" sx={buttonStyles}>
                Admin
              </Button>
              <Button color="inherit" component={Link} to="/reg" sx={buttonStyles}>
                Register
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else {
    return null;
  }
};

export default Navbar;
