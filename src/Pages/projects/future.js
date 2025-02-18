import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Divider } from "@mui/material";
import { keyframes } from "@emotion/react";
import HeaderMain from "../../components/headermain";

// Simple fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Future = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f8f8f8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <HeaderMain />

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "40vh", md: "60vh" },
          background: `url("https://images.unsplash.com/photo-1516156762556-33090a114553?ixlib=rb-4.0.3&auto=format&fit=crop&w=1951&q=80") center/cover no-repeat`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.3))",
            zIndex: 1,
          }}
        />
        {/* Hero Text */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            p: 2,
            animation: `${fadeIn} 1.2s ease-out`,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              mb: 2,
            }}
          >
            ROA VENTURES
          </Typography>
          <Typography variant="h5" sx={{ mb: 0.5 }}>
            Building Beyond Boundaries
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Container sx={{ py: { xs: 4, md: 6 } }}>
        {/* Core Thesis Section */}
        <Box sx={{ animation: `${fadeIn} 0.8s ease-in` }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
            Core Thesis: The Next Evolution of Urban Living
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", textAlign: "center", mb: 4, mx: "auto", maxWidth: 800 }}>
            ROA Ventures focuses on creating walkable, future-forward developments in high-growth
            markets like Texas. By integrating smart urban design, green spaces, and high-density
            living, we aim to redefine convenience and sustainability for the modern city dweller.
          </Typography>

          {/* Bullet Points */}
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Walkability & Convenience
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#333" }}>
                    We prioritize developments that create micro-urban ecosystems
                    where residents can access essentials without car dependency.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Strategic Growth Markets
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#333" }}>
                    Texas remains a top-performing market driven by job migration,
                    corporate relocations, and a robust business climate.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    High-Impact, Scalable Investments
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#333" }}>
                    We focus on lean, high-density projects that maximize lifestyle benefits
                    and investor returns, ensuring sustainable growth.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Sustainability & Longevity
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#333" }}>
                    Our projects incorporate smart urban design, green spaces, and
                    energy-efficient solutions to future-proof investments.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Phase 1 Section */}
        <Box sx={{ animation: `${fadeIn} 0.8s ease-in` }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Phase 1 (2025 - 2027): Houston &amp; Dallas-Fort Worth
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
            Leveraging two of the fastest-growing metro areas in the U.S. to develop high-density,
            mixed-use residential projects.
          </Typography>
          <Grid container spacing={3}>
            {/* Houston */}
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    Houston (HTX)
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#333", mb: 2 }}>
                    Integrating living, work, and entertainment in key urban districts.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                    Key Districts:
                  </Typography>
                  <ul style={{ marginLeft: "1.5rem", color: "#333" }}>
                    <li>Rice Military</li>
                    <li>North Heights</li>
                    <li>Sugarland</li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
            {/* DFW */}
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    Dallas-Fort Worth (DFW)
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#333", mb: 2 }}>
                    Capitalizing on rapid population growth, a diversified economy,
                    and expanding infrastructure.
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                    Key Districts:
                  </Typography>
                  <ul style={{ marginLeft: "1.5rem", color: "#333" }}>
                    <li>Plano</li>
                    <li>Irving</li>
                    <li>Fort Worth</li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Completed Projects */}
        <Box sx={{ animation: `${fadeIn} 0.8s ease-in` }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Completed Projects
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            <strong>Gibson Estates:</strong> 2m AUM
          </Typography>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Planned Projects (2025) */}
        <Box sx={{ animation: `${fadeIn} 0.8s ease-in` }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Planned Projects (2025)
          </Typography>
          <Typography variant="body2" sx={{ color: "#333", mb: 2 }}>
            <ul style={{ marginLeft: "1.5rem" }}>
              <li>DFW - Mixed use or townhome development</li>
              <li>HTX - Townhome development (4x)</li>
            </ul>
          </Typography>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Planned Projects (2026) */}
        <Box sx={{ animation: `${fadeIn} 0.8s ease-in` }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Planned Projects (2026)
          </Typography>

          {/* Option 1 */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              Option 1: ROA NEIGHBORHOOD
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Redevelop a plot of land or industrial building into a community.  
              <br />
              <a
                href="https://www.loopnet.com/Listing/1803-McGowen-St-Houston-TX/16888393/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1976d2", textDecoration: "underline" }}
              >
                1803 McGowen Listing
              </a>
            </Typography>
            <Typography variant="body2" sx={{ color: "#333" }}>
              15 units at 500k = ~7.5m  
              <br />
              Cost of land: 2.3m  
              <br />
              Cost of development: 4.5m  
              <br />
              Total cost: 6.8m  
              <br />
              Total profit: 700k  
              <br />
              Total invested ~ 1m
            </Typography>
          </Box>

          {/* Option 2 */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              Option 2: ROA MIXED USE
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Redevelop or develop from scratch a multi-purpose building with retail, residential,
              and restaurant spaces.  
              <br />
              <a
                href="https://www.loopnet.com/Listing/2530-Garrow-St-Houston-TX/31364117/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1976d2", textDecoration: "underline" }}
              >
                2530 Garrow Listing
              </a>
            </Typography>
            <Typography variant="body2" sx={{ color: "#333", mb: 2 }}>
              Inspired by concepts like Detroit Shipping Company, featuring open-air dining and
              artisan bites. Potential to include residential or office space in the design.
            </Typography>
            <Typography variant="body2" sx={{ color: "#333" }}>
              Includes plans for a large, rentable ad space and an Art Deco design aesthetic.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* 2027 Capstone Project */}
        <Box sx={{ animation: `${fadeIn} 0.8s ease-in` }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            2027 Capstone Project
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            ROA ROYALE
          </Typography>
          <Typography variant="body2" sx={{ color: "#333" }}>
            A visionary development aiming to set the benchmark for luxury urban living in 
            Houston or DFW. More details to come.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Future;
