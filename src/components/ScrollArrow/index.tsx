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
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          animation: 'bounce 2s infinite'
        }}
      >
        <IconButton
          onClick={scrollToContent}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(4px)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
            width: 56,
            height: 56,
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
          <KeyboardArrowDownIcon sx={{ fontSize: 37 }} />
        </IconButton>
      </Box>
    </Fade>
  );
} 