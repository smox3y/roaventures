import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderMain from "../../components/headermain";
// Dummy blog posts data - replace with dynamic content as needed

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

  
const blogPosts = [
  {
    id: 1,
    title: "Exploring the Future of Technology",
    summary: "A look into the emerging trends that are shaping our digital world.",
    image: "/blogs/tech-future.jpg",
    path: "/blog/exploring-future-of-technology",
  },
  {
    id: 2,
    title: "Sustainable Living in Modern Cities",
    summary:
      "How urban environments are evolving to embrace eco-friendly practices.",
    image: "/blogs/sustainable-living.jpg",
    path: "/blog/sustainable-living",
  },
  {
    id: 3,
    title: "The Art of Creative Innovation",
    summary:
      "Diving deep into how creativity drives technological advances.",
    image: "/blogs/creative-innovation.jpg",
    path: "/blog/creative-innovation",
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderMain />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Space Grotesk, sans-serif",
            fontWeight: 700,
            mb: 4,
            textAlign: "center",
            color: "#1D1E20",
          }}
        >
          Blog
        </Typography>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
                onClick={() => navigate(post.path)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.summary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate(post.path)}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
