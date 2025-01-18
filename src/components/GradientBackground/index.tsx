'use client';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { gradients, getRandomGradient } from '@/theme/gradients';
import { useTheme } from '@/context/ThemeContext';

export default function GradientBackground({ children }: { children: React.ReactNode }) {
  const [gradient, setGradient] = useState(gradients[0]);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setGradient(getRandomGradient());
  }, []);

  const darkGradient = {
    start: isDarkMode ? 'rgba(0, 0, 0, 0.9)' : gradient.start,
    middle: isDarkMode ? 'rgba(18, 18, 18, 0.95)' : gradient.middle,
    end: isDarkMode ? 'rgba(33, 33, 33, 0.9)' : gradient.end,
  };

  const currentGradient = isDarkMode ? darkGradient : gradient;

  return (
    <Box sx={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${currentGradient.start} 0%, ${currentGradient.middle} 50%, ${currentGradient.end} 100%)`,
      display: 'flex',
      flexDirection: 'column',
      transition: 'background 0.5s ease-in-out'
    }}>
      {children}
    </Box>
  );
} 