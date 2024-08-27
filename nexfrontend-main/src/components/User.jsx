import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [form, setForm] = useState({
    Email: '',
    Password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Hardcoded credentials for demo purposes
  const correctEmail = 'user@example.com';
  const correctPassword = 'userpassword123';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.Email || !form.Password) {
      setError('All fields are required.');
      return;
    }

    // Simple authentication check
    if (form.Email === correctEmail && form.Password === correctPassword) {
      setError('');
      console.log('Form Submitted:', form);
      navigate('/home'); // Navigate after successful authentication
    } else {
      setError('Invalid email or password.');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        backgroundColor: 'transparent', // Fixed typo
        p: 3, // Adjusted padding for better spacing
        height: 'auto', // Adjusted height to fit content
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontSize: 30,
          fontFamily: 'serif',
          mb: 3, // Margin-bottom for spacing
          color: 'white',
          letterSpacing: '7px',
        }}
      >
        USER LOGIN
      </Typography>
      <TextField
        required
        id="email"
        label="Email"
        name="Email"
        type="email"
        value={form.Email}
        onChange={handleChange}
        sx={{ backgroundColor: '#fff' }}
      />
      <TextField
        required
        id="password"
        label="Password"
        name="Password"
        type="password"
        value={form.Password}
        onChange={handleChange}
        sx={{ backgroundColor: '#fff' }}
      />
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: '#6b1ca2',
          '&:hover': {
            backgroundColor: '#6b2ca2',
          },
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default User;
