import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Grid,} from '@mui/material';
import { motion } from 'framer-motion';

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/portfolio')
      .then(response => response.json())
      .then(data => setExperiences(data.experiences));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container sx={{ my: 4, backgroundColor: '#0d1117', color: 'white', padding: '2rem' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#00c8ff' }}>Experiences</Typography>
        <Grid container spacing={2}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <Card elevation={3} sx={{ backgroundColor: '#1a1d24', color: 'white', borderRadius: '8px' }}>
                <CardContent>
                  <Typography variant="h6">{exp.company} - {exp.role}</Typography>
                  <Typography variant="subtitle2">{exp.duration}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>{exp.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Experiences;
