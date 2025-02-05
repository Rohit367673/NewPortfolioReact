import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponseMsg('Thank you for contacting me!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container sx={{ my: 4, backgroundColor: '#0d1117', color: 'white', padding: '2rem' ,}}>
        <Typography variant="h4" gutterBottom sx={{ color: '#00c8ff' }}>Contact</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Name" name="name" variant="outlined" value={formData.name} onChange={handleChange} required sx={{ backgroundColor: '#1a1d24', color: 'white',WebkitTextFillColor:"white" }} />
          <TextField label="Email" name="email" type="email" variant="outlined" value={formData.email} onChange={handleChange} required sx={{ backgroundColor: '#1a1d24', color: 'white',WebkitTextFillColor:"white" }} />
          <TextField label="Message" name="message" multiline rows={4} variant="outlined" value={formData.message} onChange={handleChange} required sx={{ backgroundColor: '#1a1d24', color: 'white',WebkitTextFillColor:"white" }} />
          <Button variant="contained" color="primary" type="submit" sx={{ backgroundColor: '#00c8ff', '&:hover': { backgroundColor: '#00b2e2' } }}>Send Message</Button>
        </Box>
        {responseMsg && <Typography sx={{ mt: 2, color: '#00c8ff' }}>{responseMsg}</Typography>}
      </Container>
    </motion.div>
  );
};

export default Contact;
