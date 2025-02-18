import React from "react";
import HeaderMain from "../components/headermain";
import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
  alpha,
  keyframes
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail, FiSmartphone, FiMapPin } from "react-icons/fi";

// ---------- Animations ----------
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// ---------- Landing Header Component ----------
const LandingHeader = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        // Replace the blue-teal gradient with red hues
        background: "linear-gradient(-45deg, #400000, #750000, #a00000)",
        backgroundSize: "400% 400%",
        animation: `${gradientBackground} 15s ease infinite`,
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          // Replace the light-blue text color with a softer pinkish-white
          color: "#ffe5e5",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "3rem", md: "5rem" },
              // Replace the teal-to-blue text gradient with reds
              background: "linear-gradient(45deg, #000000, #000000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            ROA VENTURES
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1.5rem", md: "2rem" },
              // Slightly lighter pink for subheading text
              color: "#ffc5c5",
              maxWidth: "800px",
              mx: "auto",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Building Beyond Boundaries
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: "2rem" }}
        >
          <Box
            sx={{
              width: "40px",
              height: "64px",
              // Replace teal border with red
              border: "2px solid #ff4d4d",
              borderRadius: "24px",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                width: "8px",
                height: "8px",
                // Replace teal dot with red
                background: "#ff4d4d",
                borderRadius: "50%",
                left: "50%",
                transform: "translateX(-50%)",
                animation: `${fadeIn} 1.5s infinite`,
              },
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};

// ---------- Modular Components ----------
const HeroSection = ({ profilePic, aboutText, isMobile }) => (
  <Box
    component="section"
    sx={{
      py: 8,
      display: "grid",
      gap: 6,
      gridTemplateColumns: { xs: "1fr", md: "300px 1fr" },
      alignItems: "center",
    }}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          borderRadius: "50%",
          overflow: "hidden",
          mx: "auto",
          // Replace teal border with red
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            border: "3px solid #ff4d4d",
            borderRadius: "50%",
            opacity: 0.3,
          },
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        <img
          src={profilePic}
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
        />
      </Box>
    </motion.div>

    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          mb: 3,
          // Replace bluish color with a soft pink
          color: "#ffc5c5",
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        About Me
      </Typography>
      <Typography
        sx={{
          fontSize: "1.1rem",
          lineHeight: 1.6,
          // Replace gray-blue with pinkish
          color: "#ff9b9b",
          maxWidth: "800px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {aboutText}
      </Typography>
    </motion.div>
  </Box>
);

const Section = ({ title, children, icon: Icon }) => (
  <Box component="section" sx={{ py: 6 }}>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        {Icon && (
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "12px",
              // Replace teal gradient with red
              background: "linear-gradient(45deg, #ff4d4d, #750000)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // Lighter text icon color
              color: "#ffe5e5",
            }}
          >
            <Icon size={24} />
          </Box>
        )}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            // Replace bluish color with pinkish
            color: "#ffc5c5",
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "1.1rem",
          lineHeight: 1.6,
          // Replace gray-blue with pinkish
          color: "#ff9b9b",
          maxWidth: "800px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {children}
      </Typography>
    </motion.div>
  </Box>
);

const ContactSection = ({ data }) => (
  <Box
    component="section"
    sx={{
      py: 8,
      // Replace blue gradient with red
      background: "linear-gradient(135deg, #400000 0%, #750000 100%)",
      borderRadius: "24px",
      // Subtle red shadow
      boxShadow: "0 8px 32px rgba(255, 77, 77, 0.1)",
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        mb: 4,
        // Replace bluish color with pinkish
        color: "#ffc5c5",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      Contact Details
    </Typography>

    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
        maxWidth: "600px",
        mx: "auto",
      }}
    >
      {[
        { icon: FiMapPin, text: `${data.address.street}, ${data.address.city}` },
        { icon: FiSmartphone, text: data.phone },
        { icon: FiMail, text: data.email },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 3,
              // Replace teal alpha backgrounds with red alpha
              background: alpha("#ff4d4d", 0.1),
              borderRadius: "16px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "12px",
                background: alpha("#ff4d4d", 0.2),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // Icon color red
                color: "#ff4d4d",
              }}
            >
              <item.icon size={24} />
            </Box>
            <Typography sx={{ color: "#ff9b9b", fontFamily: "'Inter', sans-serif" }}>
              {item.text}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Box>

    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
    >
      {/* Example: Could place a "Contact Me" button here */}
    </motion.div>
  </Box>
);

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 6,
      // Replace dark-blue background with dark-red
      background: "#400000",
      // Replace teal border with red
      borderTop: "1px solid rgba(255, 77, 77, 0.1)",
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          sx={{
            // Replace gray-blue text with pinkish
            color: "#ff9b9b",
            fontFamily: "'Inter', sans-serif",
            textAlign: "center",
          }}
        >
          © 2025 Roa Ventures. All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {["Privacy Policy", "Terms of Service", "Contact"].map((item, index) => (
            <Typography
              key={index}
              component="a"
              href="#"
              sx={{
                // Replace bluish text with pink
                color: "#ffc5c5",
                textDecoration: "none",
                "&:hover": { color: "#ff4d4d" },
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

// ---------- Main Home Component ----------
const defaultData = {
  name: "Alex Roa",
  image: "profile.jpg", // Ensure this image is in your public/images folder
  address: {
    street: "1239 Cedar Post Lane",
    city: "Houston",
    state: "TX",
    zip: "77055",
  },
  phone: "917-631-5694",
  email: "alex@roa.ventures",
  resumedownload: "/resume.pdf",
};

const Home = ({ data = defaultData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const profilePic = `/images/${data.image}`;

  // Text blocks for each section (replace with your own)
  const aboutMeText =
    "3 years ago, I started Pangea with the goal of inspiring global culture through democratizing the influencer marketing industry for creators and brands alike. Since then, our company has evolved into a multi-service and software solution firm.";

  // Example usage of the sections—update or remove as needed
  // const pangeaText = ...
  // const cultureClubText = ...
  // const rahraCoText = ...
  // const roaVenturesText = ...
  // const cultureClubRecordsText = ...

  return (
    <>
      <HeaderMain />
      {/* Full-screen landing header */}
      <LandingHeader />

    

      <Footer />
    </>
  );
};

export default Home;
