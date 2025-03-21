import React from 'react';
import { Box, Typography, Button, Grid, CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { keyframes } from '@mui/system';

// Animation definitions for UI elements
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Live light blue gradient animation
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const WelcomePage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        padding: { xs: '1rem', md: '5rem' },
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(90deg, #A0DFFF, #B0E0FF, #D1ECFF)',
        backgroundSize: '200% 200%',
        animation: `${gradientAnimation} 8s ease infinite`, // Smooth live animation
      }}
    >
      <Grid container spacing={4} alignItems="center" zIndex={1}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ animation: `${slideIn} 1.2s ease-out` }}>
            <Box display="flex" alignItems="center" mb={1}>
              <SearchIcon sx={{ fontSize: '3rem', color: '#1976d2' }} />
              <Typography
                variant="h6"
                sx={{ marginLeft: '0.5rem', color: '#1976d2', fontSize: { xs: '1rem', md: '1.25rem' } }}
              >
                Welcome to
              </Typography>
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                color: '#1976d2',
                marginBottom: '1rem',
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Easy Job
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#555',
                marginBottom: '2rem',
                fontSize: { xs: '0.875rem', md: '1rem' },
              }}
            >
              We bridge the gap between job seekers and recruiting companies, providing tailored
              support for both. Job seekers find ideal opportunities, while recruiters access top
              talent quickly and efficiently, making the hiring process seamless and successful for
              all.
            </Typography>
            <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth={false}
                sx={{ animation: `${fadeIn} 1.5s ease-out` }}
              >
                I’m a Job Seeker
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={false}
                sx={{ animation: `${fadeIn} 1.7s ease-out` }}
              >
                I’m Hiring
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={10} md={6}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              animation: `${slideIn} 1.8s ease-out`,
            }}
          >
            <CardMedia
              component="img"
              image="welcomepage.png"
              alt="Team Meeting"
              sx={{
                borderRadius: '1rem',
                height: { xs: '250px', md: '400px' },
                width: { xs: '120%', md: '600px' },
                maxWidth: '800px',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomePage;
