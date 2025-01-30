'use client';
import { Box, Container } from '@mui/material';
import ComponentSlideshow from '@/components/ComponentSlideshow';
import CabalaForm from '@/components/CabalaForm';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
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

  return (
    <Box>
      <ComponentSlideshow slides={slides} />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <CabalaForm />
      </Container>
    </Box>
  );
} 