'use client';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useLanguage } from '@/context/LanguageContext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function Sobre() {
  const theme = useTheme();
  const { t } = useLanguage();
  const [showExample, setShowExample] = useState(false);

  const handleExampleClick = () => {
    setShowExample(!showExample);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 8, sm: 10 } }}>
      <Grid container spacing={4} alignItems="center">
        {/* Texto à esquerda */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: { xs: 2, md: 6 } }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 'bold',
                mb: 4
              }}
            >
              {t('about.welcome')}
            </Typography>

            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.2rem' },
                opacity: 0.8,
                mb: 4,
                maxWidth: '600px'
              }}
            >
              {t('about.description')}
            </Typography>

            <Box sx={{ mb: 6 }}>
              {[
                t('about.dayDigits'),
                t('about.monthDigits'),
                t('about.yearDigits')
              ].map((text, index) => (
                <Typography 
                  key={index}
                  variant="body1"
                  sx={{ 
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    '&:before': {
                      content: '""',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                      marginRight: 2,
                      display: 'inline-block'
                    }
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>

            <Button 
              variant="outlined" 
              endIcon={<ArrowForwardIcon />}
              onClick={handleExampleClick}
              sx={{ 
                borderRadius: '30px',
                padding: '10px 30px',
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              {t('about.example')}
            </Button>
          </Box>
        </Grid>

        {/* Imagem à direita com animação */}
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{
              height: { xs: '300px', md: '600px' },
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 4,
              boxShadow: theme.palette.mode === 'dark'
                ? '0 8px 32px rgba(0, 0, 0, 0.5)'
                : '0 8px 32px rgba(0, 0, 0, 0.2)',
            }}
          >
            <AnimatePresence mode='wait'>
              <MotionBox
                key={showExample ? 'example' : 'default'}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%'
                }}
              >
                <Box
                  component="img"
                  src={showExample ? "/images/exemplo10.jpg" : "/images/slide1.jpg"}
                  alt="Cabala"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: 4
                  }}
                >
                  <Typography 
                    variant="h5" 
                    color="white"
                    sx={{ 
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      fontWeight: 'bold'
                    }}
                  >
                    {showExample ? 'Exemplo: 10/02/1989' : 'Cabala Online'}
                  </Typography>
                </Box>
              </MotionBox>
            </AnimatePresence>
          </MotionBox>
        </Grid>
      </Grid>
    </Container>
  );
} 