'use client';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';

export default function Sobre() {
  const { t } = useLanguage();
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {t('about.welcome')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {t('about.description')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {t('about.dayDigits')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {t('about.monthDigits')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {t('about.yearDigits')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {t('about.example')}
        </Typography>
        <table style={{
          borderCollapse: 'collapse',
          margin: '16px 0',
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#f5f5f5',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <tbody>
            {[['1','0'], ['0','2'], ['1','9'], ['8','9']].map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{
                    border: `1px solid ${theme.palette.divider}`,
                    padding: '12px 24px',
                    textAlign: 'center',
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? i % 2 === 0 ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)'
                      : i % 2 === 0 ? '#ffffff' : '#f9f9f9'
                  }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Container>
  );
} 