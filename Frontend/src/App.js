import React from 'react';
import Header from './Components/Header';
import Skills from './Components/Skills';

import Experiences from './Components/Experiences';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { Container, Box } from '@mui/material';
import "./App.css"
import Achivement from './Components/Achivement.js';
import HeroSection from './Components/HeroSection.js';

function App() {
  const sections = [
    { id: 'HeroSection', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="App">
      <Header sections={sections} />
      <HeroSection/>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
       
        <Box id="skills"><Skills /></Box>
        <Box id="certifications"><Achivement /></Box>
        <Box id="experiences"><Experiences /></Box>
        <Box id="projects"><Projects /></Box>
        <Box id="contact"><Contact /></Box>
      </Container>
    </div>
  );
}

export default App;
