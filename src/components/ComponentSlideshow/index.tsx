'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

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
      height: {
        xs: '300px', // altura para mobile
        sm: '350px', // altura para tablets
        md: '400px'  // altura para desktop
      },
      marginTop: 0, // removido o marginTop negativo
    }}>
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={!isMobile} // desativa navegação em mobile
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
                backgroundColor: 'rgba(0,0,0,0.4)',
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
                variant={isMobile ? "h5" : "h4"}
                gutterBottom 
                align="center"
                sx={{ 
                  maxWidth: '80%',
                  mb: 3,
                  fontSize: {
                    xs: '1.5rem',
                    sm: '2rem',
                    md: '2.5rem'
                  }
                }}
              >
                {slide.title}
              </Typography>
              <Typography 
                variant="body1" 
                align="center"
                sx={{ 
                  maxWidth: '70%',
                  fontSize: {
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.1rem'
                  },
                  px: 2
                }}
              >
                {slide.description}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
} 