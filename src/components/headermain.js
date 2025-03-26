import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, ArrowDropDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const HeaderMain = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Main mobile menu anchor
  const [anchorEl, setAnchorEl] = useState(null);
  // Projects dropdown anchor for both desktop and mobile
  const [projectsAnchorEl, setProjectsAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProjectsMenuClick = (event) => {
    setProjectsAnchorEl(event.currentTarget);
  };

  const handleProjectsMenuClose = () => {
    setProjectsAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: "#FAFAFA",
        top: 0,
        zIndex: 100,
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images.jpg"
            alt="Roa Ventures Logo"
            style={{
              maxHeight: "50px",
              height: "auto",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
        </Box>
        {isMobile ? (
          <>
            {/* Mobile Menu Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
              style={{ color: "#4A4A4A" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  backgroundColor: "#2E2E2E",
                  color: "#FFFFFF",
                },
              }}
            >
              {/* Projects MenuItem triggers nested Projects dropdown */}
              <MenuItem
                onClick={handleProjectsMenuClick}
                sx={{
                  color: "#FFFFFF",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Projects <ArrowDropDown />
              </MenuItem>
              {/* Nested Projects dropdown */}
              <Menu
                anchorEl={projectsAnchorEl}
                open={Boolean(projectsAnchorEl)}
                onClose={handleProjectsMenuClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                PaperProps={{
                  style: {
                    backgroundColor: "#2E2E2E",
                    color: "#FFFFFF",
                  },
                }}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/gibson");
                    handleProjectsMenuClose();
                    handleMenuClose(); // close the main mobile menu as well
                  }}
                  sx={{ color: "#FFFFFF" }}
                >
                  Gibson
                </MenuItem>
              </Menu>
              <MenuItem
                onClick={() => {
                  navigate("/future");
                  handleMenuClose();
                }}
                sx={{ color: "#FFFFFF" }}
              >
                Future
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/about");
                  handleMenuClose();
                }}
                sx={{ color: "#FFFFFF" }}
              >
                About
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/blog");
                  handleMenuClose();
                }}
                sx={{ color: "#FFFFFF" }}
              >
                Blog
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
              {/* Desktop Projects Button opens the dropdown */}
              <Button
                color="inherit"
                style={{
                  color: "#1D1E20",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  letterSpacing: "-0.04em",
                  lineHeight: "129%",
                  textTransform: "none",
                  margin: "0 20px",
                }}
                onClick={handleProjectsMenuClick}
              >
                Projects <ArrowDropDown />
              </Button>
              <Menu
                anchorEl={projectsAnchorEl}
                open={Boolean(projectsAnchorEl)}
                onClose={handleProjectsMenuClose}
                PaperProps={{
                  style: {
                    backgroundColor: "#2E2E2E",
                    color: "#FFFFFF",
                  },
                }}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/gibson");
                    handleProjectsMenuClose();
                  }}
                  sx={{ color: "#FFFFFF" }}
                >
                  Gibson Estates
                </MenuItem>
              </Menu>
              <Button
                color="inherit"
                style={{
                  color: "#1D1E20",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  letterSpacing: "-0.04em",
                  lineHeight: "129%",
                  textTransform: "none",
                  margin: "0 20px",
                }}
                onClick={() => navigate("/future")}
              >
                Future
              </Button>
              <Button
                color="inherit"
                style={{
                  color: "#1D1E20",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  letterSpacing: "-0.04em",
                  lineHeight: "129%",
                  textTransform: "none",
                  margin: "0 20px",
                }}
                onClick={() => navigate("/about")}
              >
                About
              </Button>
              <Button
                color="inherit"
                style={{
                  color: "#1D1E20",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  letterSpacing: "-0.04em",
                  lineHeight: "129%",
                  textTransform: "none",
                  margin: "0 20px",
                }}
                onClick={() => navigate("/blog")}
              >
                Blog
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMain;
