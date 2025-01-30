'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import ScrollArrow from '@/components/ScrollArrow';

interface Slide {
  title: string;
  description: string;
  backgroundImage: string;
}

interface SlideshowProps {
  slides: Slide[];
  autoplay?: boolean;
}

export default function ComponentSlideshow({ 
  slides, 
  autoplay = true 
}: SlideshowProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      width: '100%',
      height: '100vh', // Altura total da viewport
      position: 'relative',
      backgroundColor: 'black' // Fundo preto como no exemplo
    }}>
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={!isMobile}
        autoplay={autoplay ? {
          delay: 3000,
          disableOnInteraction: false,
        } : false}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.6)', // Overlay mais escuro como no exemplo
                zIndex: 1
              },
              '& > *': {
                position: 'relative',
                zIndex: 2,
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }
            }}>
              <Typography 
                variant={isMobile ? "h3" : "h1"}
                gutterBottom 
                align="center"
                sx={{ 
                  maxWidth: '90%',
                  mb: 3,
                  fontSize: {
                    xs: '2.5rem',
                    sm: '4rem',
                    md: '6rem'
                  },
                  fontWeight: 'bold',
                  letterSpacing: '0.2rem'
                }}
              >
                {slide.title}
              </Typography>
              <Typography 
                variant="h5" 
                align="center"
                sx={{ 
                  maxWidth: '80%',
                  fontSize: {
                    xs: '1rem',
                    sm: '1.5rem',
                    md: '2rem'
                  },
                  px: 2,
                  opacity: 0.9
                }}
              >
                {slide.description}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <ScrollArrow />
    </Box>
  );
} 