import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Checkbox, FormControlLabel, TextField, Alert, Typography } from '@mui/material';

const Register = () => {
  const [form, setForm] = useState({
    userName: '',
    emailId: '',
    password: '',
    contact: ''
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state != null) {
      setForm({
        userName: location.state.mindmaps.userName,
        emailId: location.state.mindmaps.emailID,
        password: location.state.mindmaps.password,
        contact: location.state.mindmaps.contact,
      });
    }
  }, [location.state]);

  const postData = () => {
    if (location.state != null) {
      axios.put('http://localhost:4000/user-updation/' + location.state.mindmaps._id, form)
        .then(() => {
          alert('Data updated');
          navigate('/');
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      axios.post('http://localhost:4000/new-user', form)
        .then(() => {
          alert('User data posted');
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const valueCap = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const showData = () => {
    if (!termsAccepted) {
      setError('You must accept the terms and conditions.');
      return;
    }
    if (!form.userName || !form.emailId || !form.contact || !form.password) {
      setError('All fields are required.');
      return;
    }
    setError('');
    alert('Registration Completed');
    console.log(form);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(backgroundimg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
          backdropFilter: 'blur(10px)', // Blurring effect
          borderRadius: '8px',
          p: 4,
          width: '80%',
          maxWidth: '500px', // Adjust width as needed
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center horizontally
        }}
      >
        <Typography variant="h6" noWrap component="a" sx={{
          fontSize: 32,
          fontFamily: 'serif',
          textAlign: 'center',
          color: 'black',
          letterSpacing: '3px',
          mb: 3,
        }}>
          REGISTER
        </Typography>
        <TextField
          required
          id="name"
          label="Name"
          name="userName"
          value={form.userName}
          onChange={valueCap}
          sx={{ backgroundColor: '#fff', mb: 2, width: '100%' }} 
        />
        <TextField
          required
          id="email"
          label="Email"
          name="emailId"
          type="email"
          value={form.emailId}
          onChange={valueCap}
          sx={{ backgroundColor: '#fff', mb: 2, width: '100%' }}
        />
        <TextField
          required
          id="password"
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={valueCap}
          sx={{ backgroundColor: '#fff', mb: 2, width: '100%' }}
        />
        <TextField
          required
          id="contact"
          label="Contact Number"
          name="contact"
          type="tel"
          value={form.contact}
          onChange={valueCap}
          sx={{ backgroundColor: '#fff', mb: 2, width: '100%' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={termsAccepted}
              onChange={handleCheckboxChange}
              sx={{ color: '#000' }}
            />
          }
          label={
            <span style={{ color: '#000' }}>
              I agree to the terms and conditions
            </span>
          }
          sx={{ mb: 2 }}
        />
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#6b1ca2',
            '&:hover': {
              backgroundColor: '#6b2ca2', 
            },
            width: '100%' // Full width button
          }}
          onClick={showData}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Register;

