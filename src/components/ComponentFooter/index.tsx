'use client';
import { Box, Container, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <InstagramIcon />, url: 'https://instagram.com', label: 'INSTAGRAM' },
    { icon: <FacebookIcon />, url: 'https://facebook.com', label: 'FACEBOOK' },
    { icon: <YouTubeIcon />, url: 'https://youtube.com', label: 'YOUTUBE' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com', label: 'LINKEDIN' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        py: 3,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          {/* Copyright */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start' 
          }}>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © {t('footer.copyright')} {new Date().getFullYear()}.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {t('footer.slogan')}
            </Typography>
          </Box>

          {/* Social Links */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {socialLinks.map((social) => (
              <Box
                key={social.label}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.7,
                  transition: 'opacity 0.3s',
                  '&:hover': {
                    opacity: 1
                  }
                }}
              >
                {social.icon}
                <Typography
                  variant="caption"
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    letterSpacing: 1
                  }}
                >
                  {social.label}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Back to Top */}
          <Box sx={{ 
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'opacity 0.3s',
            '&:hover': {
              opacity: 1
            }
          }} onClick={scrollToTop}>
            <Typography variant="caption" sx={{ letterSpacing: 1 }}>
              {t('footer.backToTop')}
            </Typography>
            <KeyboardArrowUpIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 