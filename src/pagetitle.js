// src/components/PageTitle.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const PageTitle = ({ title }) => (
  <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
    <Typography variant="h3">{title}</Typography>
  </Box>
);

export default PageTitle;
