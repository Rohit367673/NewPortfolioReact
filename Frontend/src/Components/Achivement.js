import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const Achievement = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/portfolio')
      .then(response => response.json())
      .then(data => setCertifications(data.certifications));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container sx={{ my: 4, backgroundColor: '#0d1117', color: 'white', padding: '2rem' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#00c8ff' }}>Certifications</Typography>
        <List>
          {certifications.map((cert, index) => (
            <ListItem key={index} sx={{ '&:hover': { backgroundColor: '#1a1d24' } }}>
              <ListItemText primary={cert} sx={{ color: '#a0a0a0' }} />
            </ListItem>
          ))}
        </List>
      </Container>
    </motion.div>
  );
};

export default Achievement;
