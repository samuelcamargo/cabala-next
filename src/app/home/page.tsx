'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { useAppTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WavesIcon from '@mui/icons-material/Waves';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CabalaForm from '@/components/CabalaForm';
import ComponentSlideshow from '@/components/ComponentSlideshow';
import { useLanguage } from '@/context/LanguageContext';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

export default function Home() {
  const { isDarkMode } = useAppTheme();
  const { t } = useLanguage();

  const slides = [
    {
      title: t('slides.slide1.title'),
      description: t('slides.slide1.description'),
      backgroundImage: '/images/slide4.jpg'
    },
    {
      title: t('slides.slide2.title'),
      description: t('slides.slide2.description'),
      backgroundImage: '/images/slide5.jpg'
    },
    {
      title: t('slides.slide3.title'),
      description: t('slides.slide3.description'),
      backgroundImage: '/images/slide6.jpg'
    }
  ];

  const features = [
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      title: 'Numerologia Sagrada',
      description: 'A Cabala dos Orixás revela os números sagrados que influenciam sua vida, conectando você com as energias ancestrais.'
    },
    {
      icon: <WavesIcon sx={{ fontSize: 40 }} />,
      title: 'Energia dos Orixás',
      description: 'Cada Orixá traz consigo uma energia única e poderosa, capaz de transformar e equilibrar diferentes aspectos da sua vida.'
    },
    {
      icon: <LocalFloristIcon sx={{ fontSize: 40 }} />,
      title: 'Sabedoria Ancestral',
      description: 'Descubra a profunda sabedoria da tradição africana e como ela pode guiar seu caminho espiritual.'
    },
    {
      icon: <SelfImprovementIcon sx={{ fontSize: 40 }} />,
      title: 'Autoconhecimento',
      description: 'Através dos números e suas conexões com os Orixás, você terá uma compreensão mais profunda de si mesmo.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ position: 'relative' }}>
        <ComponentSlideshow slides={slides} />
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDarkMode ? '#121212' : '#f5f5f5'
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <MotionPaper
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  elevation={isDarkMode ? 4 : 1}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'white',
                    borderRadius: 4,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      color: isDarkMode ? '#9c27b0' : '#6a1b9a',
                      mb: 2
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      color: isDarkMode ? '#e0e0e0' : '#424242'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: isDarkMode ? '#bdbdbd' : '#616161',
                      lineHeight: 1.7
                    }}
                  >
                    {feature.description}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDarkMode 
            ? 'linear-gradient(45deg, #4a148c, #311b92)'
            : 'linear-gradient(45deg, #6a1b9a, #4527a0)',
        }}
      >
        <Container maxWidth={false} sx={{ width: '80%' }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: 'center' }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Comece sua Jornada Espiritual
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.9)',
                mb: 6,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8
              }}
            >
              Insira sua data de nascimento e descubra os Orixás que regem seu caminho,
              suas influências e como eles podem ajudar em sua evolução espiritual.
            </Typography>
            <Box 
              sx={{ 
                width: '100%',
                mx: 'auto',
                '.MuiPaper-root': {
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                }
              }}
            >
              <CabalaForm />
            </Box>
          </MotionBox>
        </Container>
      </Box>
    </>
  );
} 