import React from "react";
import { Box, Typography, Container, Grid, Button, Card, CardContent } from "@mui/material";
import { keyframes } from "@emotion/react";
import HeaderMain from "../../components/headermain";

// Keyframes for subtle fade-in animations
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Gibson = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f8f8f8",
      }}
    >
      {/* Header */}
      <HeaderMain />

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "60vh", md: "80vh" },
          backgroundImage: `url("https://storage.googleapis.com/blitzccmc.appspot.com/1/9c1856ae6ada77e72b7bd78d9406fe2d37e2692f-1.jfif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))",
            zIndex: 1,
          }}
        />
        {/* Hero Text */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            p: 2,
            animation: `${fadeInUp} 1.2s ease-out`,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textTransform: "uppercase",
              letterSpacing: 1.5,
            }}
          >
            Gibson Estates 2025
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Where Luxury Meets Urban Living
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffffff",
              color: "#000",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            Explore Now
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Container
        sx={{
          py: { xs: 4, md: 6 },
          animation: `${fadeIn} 1s ease-in`,
        }}
      >
        {/* Intro Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            A Modern Sanctuary in Rice Military
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#333", textAlign: "center", maxWidth: 800, mx: "auto" }}
          >
            Located in Rice Military, Houston, Texas, Gibson Estates 2025 offers two exquisite
            townhomes designed for luxury living. With unobstructed views of Downtown Houston
            and the Galleria, these properties redefine modern elegance and convenience.
          </Typography>
        </Box>

        {/* Property Highlights */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 2,
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Property Highlights
                </Typography>
                <Typography variant="body1" component="ul" sx={{ pl: 2, color: "#333" }}>
                  <li>Total Living Area: 3,226 sq ft</li>
                  <li>Total Floor Area: 4,310 sq ft</li>
                  <li>Sale Price: $1.249 million</li>
                  <li>Unobstructed views of Downtown &amp; The Galleria</li>
                  <li>Exclusive rooftop deck in Rice Military</li>
                  <li>Large front yards with room for a pool</li>
                  <li>3 bedrooms, 3 bathrooms with high-end finishes</li>
                  <li>Elevator shaft &amp; generator-ready</li>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ animation: `${fadeInUp} 1.2s ease-out` }}
          >
            <Box
              component="img"
              src="https://storage.googleapis.com/blitzccmc.appspot.com/1/2c908f06bc295df85a2bdf487bfe188727fbf482-2.jpg"
              alt="Custom Interiors"
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 2,
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
        </Grid>

        {/* Luxury Features */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ animation: `${fadeInUp} 1.2s ease-out` }}
          >
            <Box
              component="img"
              src="https://storage.googleapis.com/blitzccmc.appspot.com/1/cbac82ebad965ee71268c062ec3f0817372fe257-1.jpg"
              alt="Rooftop Views"
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 2,
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 2,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Luxury Features
                </Typography>
                <Typography variant="body1" sx={{ color: "#333", mb: 2 }}>
                  Each townhome in Gibson Estates is meticulously designed with the following
                  luxury amenities:
                </Typography>
                <Typography variant="body1" component="ul" sx={{ pl: 2, color: "#333" }}>
                  <li>Modern open-concept living spaces</li>
                  <li>Chef-inspired kitchen with state-of-the-art appliances</li>
                  <li>Expansive rooftop terrace with breathtaking views</li>
                  <li>Spacious bedrooms with custom closets</li>
                  <li>Spa-like bathrooms with high-end finishes</li>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textTransform: "uppercase",
            }}
          >
            Ready to Own Luxury?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#333", maxWidth: 700, mx: "auto", mb: 4 }}
          >
            Don’t miss the opportunity to own one of these stunning townhomes in the heart
            of Rice Military. Contact us today to schedule a private tour or for more
            information.
          </Typography>
          <Box
            component="img"
            src="https://storage.googleapis.com/blitzccmc.appspot.com/1/0bbd98c93f51a943bcdd73c0c113bd61c86fc90c-2.jpg"
            alt="Schedule a Tour"
            sx={{
              maxWidth: { xs: "100%", md: "70%" },
              borderRadius: 2,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              mb: 4,
            }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              fontWeight: "bold",
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Schedule a Tour
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Gibson;
