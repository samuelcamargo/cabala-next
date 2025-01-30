'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { useAppTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export function SobreContent() {
  const { isDarkMode } = useAppTheme();

  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 10, sm: 12 }, mb: 8 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Texto à esquerda */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: { xs: 2, md: 6 } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h1" 
                gutterBottom 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 900,
                  mb: 4,
                  background: isDarkMode 
                    ? 'linear-gradient(45deg, #9c27b0, #e91e63)'
                    : 'linear-gradient(45deg, #6a1b9a, #c2185b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: isDarkMode 
                    ? '0 0 30px rgba(156, 39, 176, 0.3)'
                    : '0 0 30px rgba(106, 27, 154, 0.2)'
                }}
              >
                Descubra sua
                Conexão Espiritual
              </Typography>

              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  opacity: 0.9,
                  mb: 4,
                  maxWidth: '600px',
                  color: isDarkMode ? '#e0e0e0' : '#424242',
                  lineHeight: 1.8
                }}
              >
                A Cabala Online é sua porta de entrada para o fascinante mundo da numerologia sagrada dos Orixás. Através de cálculos ancestrais, revelamos as energias divinas que guiam seu caminho e influenciam sua jornada espiritual.
              </Typography>

              <Box sx={{ mb: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography 
                    variant="body1"
                    sx={{ 
                      mb: 3,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      color: isDarkMode ? '#e0e0e0' : '#424242',
                      lineHeight: 1.8,
                      fontStyle: 'italic'
                    }}
                  >
                    &ldquo;Cada número carrega uma vibração única, uma mensagem dos Orixás para iluminar seu destino e fortalecer sua conexão com o sagrado.&rdquo;
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Typography 
                    variant="body1"
                    sx={{ 
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      color: isDarkMode ? '#e0e0e0' : '#424242',
                      lineHeight: 1.8
                    }}
                  >
                    Descubra quais Orixás regem sua vida e como suas energias podem transformar sua jornada espiritual. Uma experiência única de autoconhecimento e conexão com o divino.
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </Grid>

        {/* Imagem à direita */}
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{
              height: { xs: '300px', md: '600px' },
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '20px',
              boxShadow: isDarkMode 
                ? '0 8px 32px rgba(0, 0, 0, 0.4)'
                : '0 8px 32px rgba(0, 0, 0, 0.15)',
            }}
          >
            <Box
              component="img"
              src="/images/slide2.jpg"
              alt="Cabala"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
                transition: 'transform 0.5s ease-in-out',
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
                background: isDarkMode
                  ? 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))'
                  : 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
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
                  fontWeight: 'bold',
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
              >
                Cabala Online
              </Typography>
            </Box>
          </MotionBox>
        </Grid>
      </Grid>
    </Container>
  );
} 