'use client';
import { IconButton, Menu, MenuItem, Box } from '@mui/material';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function LanguageSelector() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { language, setLanguage } = useLanguage();
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (lang: 'pt-BR' | 'en' | 'es') => {
    setLanguage(lang);
    handleClose();
  };

  const flags = {
    'pt-BR': 'https://flagcdn.com/br.svg',
    'en': 'https://flagcdn.com/us.svg',
    'es': 'https://flagcdn.com/es.svg'
  };

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <Box sx={{ width: 24, height: 24, position: 'relative' }}>
          <Image
            src={flags[language]}
            alt={language}
            fill
            sizes="24px"
            style={{ borderRadius: '4px' }}
          />
        </Box>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleLanguageSelect('pt-BR')}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 24, height: 24, position: 'relative' }}>
              <Image src={flags['pt-BR']} alt="PT-BR" fill sizes="24px" />
            </Box>
            Português
          </Box>
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect('en')}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 24, height: 24, position: 'relative' }}>
              <Image src={flags['en']} alt="EN" fill sizes="24px" />
            </Box>
            English
          </Box>
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect('es')}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 24, height: 24, position: 'relative' }}>
              <Image src={flags['es']} alt="ES" fill sizes="24px" />
            </Box>
            Español
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
} 