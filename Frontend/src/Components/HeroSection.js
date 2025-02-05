import React, { useEffect, useState, useRef } from "react";
import { Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "react-scroll";

const HeroContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#0d1117",
  color: "white",
  padding: "0 10%",
});

const HeroContent = styled(Box)({
  maxWidth: "50%",
});
const profileImg = "Assets/47CCA15F-102C-4ACF-8F7B-F3862CD5712B_1_105_c.jpeg";

const HighlightText = styled("span")({
  color: "#00c8ff",
});

const SocialIcons = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "15px",
  marginTop: "20px",
  "& i": {
    fontSize: "1.5rem",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      color: "#00c8ff",
    },
  },
});

const CvButton = styled(Button)({
  backgroundColor: "#00c8ff",
  color: "white",
  marginTop: "20px",
  padding: "10px 20px",
  borderRadius: "25px",
  fontSize: "1rem",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#00b2e2",
  },
});

const HeroImage = styled(Box)({
  position: "relative",
  width: "350px",
  height: "350px",
  background: "linear-gradient(135deg, #00c8ff, transparent)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 0px 20px rgba(0, 200, 255, 0.5)",
  
});

const ProfileImage = styled("img")({
  width: "90%",
  height: "auto",
  borderRadius: "50%",
});

const HeroSection = () => {
    const [text, setText] = useState("");
  const fullText = "Roohit Kumar"; // Corrected name (single 'h')
  const index = useRef(0);

  useEffect(() => {
    let isMounted = true; // Track if component is mounted
    let timeoutId;

    const typingEffect = () => {
      if (!isMounted) return;

      if (index.current < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(index.current));
        index.current += 1;
        timeoutId = setTimeout(typingEffect, 200); // Schedule next character
      }
    };

    // Start the animation
    timeoutId = setTimeout(typingEffect, 200);

    // Cleanup function
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("Link");
    link.href = "/Assets/Rohit-React-Resume.pdf"; // Replace with your CV file path
    link.download = "Rohit_Resume.pdf";
    link.click();
  };

  return (
    <HeroContainer id="HeroSection">
      <HeroContent>
        <Typography variant="h6">Hello, It's Me</Typography>
        <Typography variant="h2" fontWeight={500}>
          {text}
        </Typography>
        <Typography variant="h4">
          And I'm a <HighlightText>React Developer</HighlightText>
        </Typography>
        <Typography variant="body1" sx={{ marginY: 2, color: "#a0a0a0" }}>
          I am deeply passionate about continuously enhancing my technical skills and stay driven by the desire to learn and grow. Embracing new challenges, I am always eager to take on innovative tasks and contribute to dynamic projects.
        </Typography>
        <Typography variant="h6" sx={{ marginY: 2 }}>Social Media Links</Typography>
        <SocialIcons>
          <Link href="https://github.com/Rohit367673" target="_blank" rel="noopener noreferrer">
            <GitHub fontSize="large" sx={{ cursor: "pointer", color: "#00c8ff" }} />
          </Link>
          <Link href="https://www.instagram.com/_rohitkumar324/" target="_blank" rel="noopener noreferrer">
            <Instagram fontSize="large" sx={{ cursor: "pointer", color: "#00c8ff" }} />
          </Link>
          <Link href="https://www.linkedin.com/in/rohit-kumar-7b3424231/" target="_blank" rel="noopener noreferrer">
            <LinkedIn fontSize="large" sx={{ cursor: "pointer", color: "#00c8ff" }} />
          </Link>
        </SocialIcons>
        <CvButton onClick={handleDownload} variant="contained">
          Download CV
        </CvButton>
      </HeroContent>
      <HeroImage>
        <ProfileImage src={profileImg} alt="Profile" />
      </HeroImage>
    </HeroContainer>
  );
};

export default HeroSection;
