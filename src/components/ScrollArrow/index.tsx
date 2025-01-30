'use client';
import { Box, IconButton, useMediaQuery, useTheme, Fade } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ScrollArrow() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToContent = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: windowHeight,
      behavior: 'smooth'
    });
  };

  if (isMobile) return null;

  return (
    <Fade in={true} timeout={1000}>
      <Box
        sx={{
          position: 'fixed',
          bottom: 40,
          left: 40,
          zIndex: 10,
          animation: 'bounce 2s infinite'
        }}
      >
        <IconButton
          onClick={scrollToContent}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(4px)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
            width: 48,
            height: 48,
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateY(0)',
              },
              '40%': {
                transform: 'translateY(-10px)',
              },
              '60%': {
                transform: 'translateY(-5px)',
              },
            },
          }}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>
    </Fade>
  );
} 