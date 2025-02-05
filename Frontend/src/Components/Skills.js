import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [Pskills, setPskills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/api/portfolio")
      .then((response) => response.json())
      .then((data) => {setSkills(data.skills);
                       setPskills(data.Pskills)});
        
  }, []);


  return (
    <Container sx={{ my: 4, color: "#fff" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#00E6F6", textAlign: "center" }}>
        Technical-Skills
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  textAlign: "center",
                  backgroundColor: "#1A1A2E",
                  color: "#00E6F6",
                  fontWeight: "bold",
                  transition: "0.3s",
                  "&:hover": { boxShadow: "0px 0px 15px #00E6F6" },
                }}
              >
                {skill}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" gutterBottom sx={{ color: "#00E6F6", textAlign: "center" }}>
        Personal-Skills
      </Typography>
      <Grid container spacing={2}>
        {Pskills.map((Pskills, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  textAlign: "center",
                  backgroundColor: "#1A1A2E",
                  color: "#00E6F6",
                  fontWeight: "bold",
                  transition: "0.3s",
                  "&:hover": { boxShadow: "0px 0px 15px #00E6F6" },
                }}
              >
                {Pskills}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
