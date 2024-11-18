import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ParticlesBg from "particles-bg";
import { keyframes } from "@emotion/react";
import Header from "../Components/Header";

// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const headerData = {
  project: "Gibson Estates",
  name: "Gibson Estates 2025",
  description: "Luxury townhomes in the heart of Rice Military, Houston, Texas",
};

const Gibson = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e0e0e0", // Changed to a darker color for better contrast
        width: "100%",
        color: "#333", // Changed text color to dark gray
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header Section */}
      <Header data={headerData} />

      {/* Main Content */}
      <Container
        sx={{
          paddingTop: 2,
          paddingBottom: 4,
        }}
      >
        {/* Title Section */}
        <Box sx={{ mb: 4 }}>
          {/* Hero Image */}
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img
              src="https://storage.googleapis.com/blitzccmc.appspot.com/1/9c1856ae6ada77e72b7bd78d9406fe2d37e2692f-1.jfif"
              alt="Gibson Estates Overview"
              style={{ maxWidth: "80%", borderRadius: "8px" }}
            />
          </Box>

          {/* Quick Facts */}
          <Typography variant="body3" paragraph sx={{ color: "#333" }}>
            Located in Rice Military, Houston, Texas, Gibson Estates 2025 offers two exquisite townhomes designed for luxury living. With unobstructed views of Downtown Houston and the Galleria, these properties redefine modern elegance and convenience.
          </Typography>

          {/* Property Details */}
          <Box sx={{ my: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Property Highlights
            </Typography>
            <Typography variant="body3" component="ul" sx={{ pl: 2, color: "#333" }}>
              <li>Total Living Area: 3,226 square feet</li>
              <li>Total Floor Area: 4,310 square feet</li>
              <li>Sale Price: $1.249 million</li>
              <li>Unobstructed views of Downtown and the Galleria</li>
              <li>Rooftop deck with exclusive views in Rice Military</li>
              <li>Large front yards with space for a pool</li>
              <li>Custom-built 3-bedroom, 3-bathroom homes</li>
              <li>High-end finishes and designer lighting</li>
              <li>Elevator shaft and generator-ready</li>
            </Typography>
            <Box sx={{ textAlign: "center", my: 3 }}>
              <img
                src="https://storage.googleapis.com/blitzccmc.appspot.com/1/2c908f06bc295df85a2bdf487bfe188727fbf482-2.jpg"
                alt="Custom Interiors"
                style={{ maxWidth: "70%", borderRadius: "8px" }}
              />
            </Box>
          </Box>

          {/* Luxury Features */}
          <Box sx={{ my: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Luxury Features
            </Typography>
            <Typography variant="body3" paragraph sx={{ color: "#333" }}>
              Each townhome in Gibson Estates is meticulously designed with the following luxury amenities:
            </Typography>
            <Typography variant="body3" component="ul" sx={{ pl: 2, color: "#333" }}>
              <li>Modern open-concept living spaces</li>
              <li>Chef-inspired kitchen with state-of-the-art appliances</li>
              <li>Expansive rooftop terrace with breathtaking views</li>
              <li>Spacious bedrooms with custom closets</li>
              <li>Spa-like bathrooms with high-end finishes</li>
            </Typography>
            <Box sx={{ textAlign: "center", my: 3 }}>
              <img
                src="https://storage.googleapis.com/blitzccmc.appspot.com/1/cbac82ebad965ee71268c062ec3f0817372fe257-1.jpg"
                alt="Rooftop Views"
                style={{ maxWidth: "70%", borderRadius: "8px" }}
              />
            </Box>
          </Box>

          {/* Call to Action */}
          <Box sx={{ my: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Ready to Own Luxury?
            </Typography>
            <Typography variant="body3" paragraph sx={{ color: "#333" }}>
              Don’t miss the opportunity to own one of these stunning townhomes in the heart of Rice Military. Contact us today to schedule a private tour or for more information.
            </Typography>
            <Box sx={{ textAlign: "center", my: 3 }}>
              <img
                src="https://storage.googleapis.com/blitzccmc.appspot.com/1/0bbd98c93f51a943bcdd73c0c113bd61c86fc90c-2.jpg"
                alt="Schedule a Tour"
                style={{ maxWidth: "70%", borderRadius: "8px" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Gibson;
