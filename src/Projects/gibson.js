import React from "react";
import { Box, Typography, Container, Toolbar } from "@mui/material";

const Gibson = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        width: "100%",
        color: "#000",
      }}
    >
      <Toolbar />

      {/* Main Content */}
      <Container
        sx={{
          paddingTop: 6,
          paddingBottom: 4,
        }}
      >
        {/* Title Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
            Gibson Estates 2025
          </Typography>

          {/* Hero Image */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <img
              src="https://via.placeholder.com/1200x600"
              alt="Gibson Estates Overview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </Box>

          {/* Quick Facts */}
          <Typography variant="body1" paragraph>
            Located in Rice Military, Houston, Texas, Gibson Estates 2025 offers two exquisite townhomes designed for luxury living. With unobstructed views of Downtown Houston and the Galleria, these properties redefine modern elegance and convenience.
          </Typography>

          <Divider />

          {/* Property Details */}
          <Box sx={{ my: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Property Highlights
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
              <li>Total Living Area: 3,226 square feet</li>
              <li>Total Floor Area: 4,310 square feet</li>
              <li>Sale Price: $1.249 million</li>
              <li>Unobstructed views of Downtown and the Galleria</li>
              <li>Rooftop deck with exclusive views in Rice Military</li>
              <li>Large front yards with space for a pool</li>
              <li>Custom-built 3-bedroom, 3.5-bathroom homes</li>
              <li>High-end finishes and designer lighting</li>
              <li>Elevator shaft and generator-ready</li>
            </Typography>
            <Box sx={{ textAlign: "center", my: 3 }}>
              <img
                src="https://via.placeholder.com/800x400"
                alt="Custom Interiors"
                style={{ maxWidth: "100%", borderRadius: "8px" }}
              />
            </Box>
          </Box>


          {/* Luxury Features */}
          <Box sx={{ my: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Luxury Features
            </Typography>
            <Typography variant="body1" paragraph>
              Each townhome in Gibson Estates is meticulously designed with the following luxury amenities:
            </Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
              <li>Modern open-concept living spaces</li>
              <li>Chef-inspired kitchen with state-of-the-art appliances</li>
              <li>Expansive rooftop terrace with breathtaking views</li>
              <li>Spacious bedrooms with custom closets</li>
              <li>Spa-like bathrooms with high-end finishes</li>
            </Typography>
            <Box sx={{ textAlign: "center", my: 3 }}>
              <img
                src="https://via.placeholder.com/800x400"
                alt="Rooftop Views"
                style={{ maxWidth: "100%", borderRadius: "8px" }}
              />
            </Box>
          </Box>

          <Divider />

          {/* Call to Action */}
          <Box sx={{ my: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Ready to Own Luxury?
            </Typography>
            <Typography variant="body1" paragraph>
              Don’t miss the opportunity to own one of these stunning townhomes in the heart of Rice Military. Contact us today to schedule a private tour or for more information.
            </Typography>
            <Box sx={{ textAlign: "center", my: 3 }}>
              <img
                src="https://via.placeholder.com/800x400"
                alt="Schedule a Tour"
                style={{ maxWidth: "100%", borderRadius: "8px" }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

    </Box>
  );
};

export default Gibson;
