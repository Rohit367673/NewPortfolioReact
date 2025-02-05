import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-scroll";

const Header = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1A1A2E", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        {sections.map((section) => (
          <Button
            key={section.id}
            color={activeSection === section.id ? "secondary" : "inherit"}
            sx={{
              mx: 1,
              color: activeSection === section.id ? "#00E6F6" : "#fff",
              fontWeight: 600,
              textTransform: "none",
              transition: "0.3s",
              "&:hover": { color: "#00E6F6" },
            }}
          >
            <Link
              activeClass="active"
              to={section.id}
              spy={true}
              smooth={true}
              duration={500}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              {section.label}
            </Link>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
