'use client';
import { Box } from '@mui/material';
import { useAppTheme } from '@/context/ThemeContext';

export default function GradientBackground({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useAppTheme();

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: isDarkMode ? '#121212' : '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      transition: 'background-color 0.5s ease-in-out'
    }}>
      {children}
    </Box>
  );
} 