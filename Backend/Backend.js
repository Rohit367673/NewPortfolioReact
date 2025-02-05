import express from 'express';
import path from 'path';
import cors from 'cors';
const app = express();


app.use(cors());
app.use(express.json());

const _dirname = path.resolve();
// Sample portfolio data
const portfolioData = {
 
  skills: ["JavaScript", "React", "Node.js", "Express", "HTML-CSS","MongoDB",],

  Pskills: ["Chess", "Calligraphy", "Football", "Divergent thinking", "Programming","Communication",],

  certifications: ["AWS Certified Solutions Architect", "Certified React Developer"],
  experiences: [
    { company: "Company A", role: "Frontend Developer", duration: "2018-2020", description: "Worked on various React projects." },
    { company: "Company B", role: "Full Stack Developer", duration: "2020-2022", description: "Developed backend services with Node.js." }
  ],
  projects: [
    { title: "Project One", description: "A web application built with React and Node.js", link: "https://github.com/johndoe/project-one" },
    { title: "Project Two", description: "A mobile app built with React Native", link: "https://github.com/johndoe/project-two" }
  ],
  contact: {
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main Street, Anytown, USA"
  }
};

// Endpoint to return portfolio data
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});
app.use(express.static(path.join(_dirname, "/Frontend/build")))
app.get
app.get("/*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "Frontend","build","index.html"));
});
const PORT = process.env.PORT|| 3002
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));