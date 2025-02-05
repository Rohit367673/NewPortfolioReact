import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, CardActions, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/api/portfolio")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <Container sx={{ my: 4, color: "#fff" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#00E6F6", textAlign: "center" }}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card
                elevation={3}
                sx={{
                  backgroundColor: "#1A1A2E",
                  color: "#fff",
                  transition: "0.3s",
                  "&:hover": { boxShadow: "0px 0px 15px #00E6F6" },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#00E6F6" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" sx={{ color: "#00E6F6" }} href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
