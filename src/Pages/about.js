import React from "react";
import HeaderMain from "../components/headermain";
import {
  Box,
  Typography,
  Container,
  Button,
  useTheme,
  useMediaQuery,
  alpha,
  keyframes,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiMail,
  FiSmartphone,
  FiMapPin,
} from "react-icons/fi";

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
        background: "linear-gradient(-45deg, #0a192f, #172a45, #2a4a6e)",
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
          color: "#e6f1ff",
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
              background: "linear-gradient(45deg, #64ffda, #8892b0)",
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
              color: "#ccd6f6",
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
              border: "2px solid #64ffda",
              borderRadius: "24px",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                width: "8px",
                height: "8px",
                background: "#64ffda",
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
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            border: "3px solid #64ffda",
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
          color: "#ccd6f6",
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
          color: "#8892b0",
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
              background: "linear-gradient(45deg, #64ffda, #172a45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e6f1ff",
            }}
          >
            <Icon size={24} />
          </Box>
        )}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "#ccd6f6",
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
          color: "#8892b0",
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
      background: "linear-gradient(135deg, #0a192f 0%, #172a45 100%)",
      borderRadius: "24px",
      boxShadow: "0 8px 32px rgba(100, 255, 218, 0.1)",
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        mb: 4,
        color: "#ccd6f6",
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
              background: alpha("#64ffda", 0.1),
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
                background: alpha("#64ffda", 0.2),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#64ffda",
              }}
            >
              <item.icon size={24} />
            </Box>
            <Typography
              sx={{
                color: "#8892b0",
                fontFamily: "'Inter', sans-serif",
              }}
            >
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
      {/* Additional content can go here */}
    </motion.div>
  </Box>
);

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 6,
      background: "#0a192f",
      borderTop: "1px solid rgba(100, 255, 218, 0.1)",
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
            color: "#8892b0",
            fontFamily: "'Inter', sans-serif",
            textAlign: "center",
          }}
        >
          © 2025 Roa Ventures. All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {["Privacy Policy", "Terms of Service", "Contact"].map(
            (item, index) => (
              <Typography
                key={index}
                component="a"
                href="#"
                sx={{
                  color: "#ccd6f6",
                  textDecoration: "none",
                  "&:hover": { color: "#64ffda" },
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item}
              </Typography>
            )
          )}
        </Box>
      </Box>
    </Container>
  </Box>
);

// ---------- Default Data ----------
const defaultData = {
  name: "Alex Roa",
  image:
    "https://media.licdn.com/dms/image/v2/D5603AQF4WZ5WMP9MOg/profile-displayphoto-shrink_200_200/B56ZW_jhfCGQAY-/0/1742675517831?e=2147483647&v=beta&t=B3Qjx3_j7JtKvzHsSeAh6-_ixohBLki6_h4nWOoslS8",
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

// ---------- Main About Component ----------
const About = ({ data = defaultData }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Use the external URL if provided
  const profilePic =
    data.image.startsWith("http") || data.image.startsWith("https")
      ? data.image
      : `/images/${data.image}`;

  // Expanded text blocks for each section
  const aboutMeText =
    "I am Alex Roa, an entrepreneur with a passion for bridging creativity and technology. Three years ago, I founded Pangea with a vision to democratize influencer marketing, empowering both creators and brands to connect on a global scale. My journey is driven by a relentless pursuit of innovation and a commitment to building communities that thrive on creativity, sustainability, and forward-thinking strategies.";

  const pangeaText = (
    <>
      "Changing the World through Various Ventures" isn't just our tagline—it’s our mission. At Pangea, we stand at the crossroads of a generational revolution, incubating innovations that redefine the future of work. We serve as the incubation hub for Blitz, ensuring creators and entrepreneurs get paid on time; MYAH AI, empowering people to connect and build meaningful networks; and The Culture Club, where influence and creativity flourish. Essentially, Pangea acts as a holding company for all these groundbreaking ventures, uniting diverse industries to transform how we work, create, and connect.
    </>
  );
    
  const cultureClubText = (
    <>
      The Culture Club inspires global culture through captivating content and accessible creator marketing services. I believe that creative expression fuels progress, and with The Culture Club, I strive to provide a platform where artistic talents can thrive. Our extensive partnership network helps creators build sustainable careers and reach audiences worldwide.
    </>
  );

  const rahraCoText =
    "Rahra Co, home to the Protein Party Co brand, is at the forefront of creating sustainable, climate-conscious food solutions. My involvement with Rahra Co reflects my commitment to innovation in the food industry, aiming to bring eco-friendly, healthy products to market while addressing global sustainability challenges.";

  const roaVenturesText =
    "RΩA Ventures is a real estate collective dedicated to building community spaces that merge sustainable practices with innovative design. Through RΩA Ventures, I work to reshape urban landscapes, fostering communities that thrive on creativity, sustainability, and forward-thinking strategies.";

  const cultureClubRecordsText =
    "Culture Club Records, once a global artist incubator in collaboration with Sony Music's The Orchard, has evolved into a dynamic label that champions diverse voices and groundbreaking talent. This transformation mirrors my passion for music and the arts, as I continue to support emerging artists in reaching their full potential.";

  return (
    <>
      <HeaderMain />
      {/* Full-screen landing header */}
      <LandingHeader />

      {/* Main content */}
      <Container maxWidth="lg">
        <HeroSection
          profilePic={profilePic}
          aboutText={aboutMeText}
          isMobile={isMobile}
        />

        <Section title="Pangea">{pangeaText}</Section>
        <Section title="The Culture Club">{cultureClubText}</Section>
        <Section title="Rahra Co">{rahraCoText}</Section>
        <Section title="RΩA Ventures">{roaVenturesText}</Section>
        <Section title="Culture Club Records">{cultureClubRecordsText}</Section>

        <ContactSection data={data} />
      </Container>

      <Footer />
    </>
  );
};

export default About;
