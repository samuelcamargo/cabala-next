'use client';
import { useState } from 'react';
import { Box, TextField, Button, Grid, Paper, Typography, Fade } from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';
import { calculateCabala } from '@/utils/cabala';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PublicIcon from '@mui/icons-material/Public';
import ChurchIcon from '@mui/icons-material/Church';
import Image from 'next/image';

interface CabalaResult {
  numbers: {
    [key: string]: number;
  };
  dinheiro: { numero: number; orixa: string };
  pessoas: { numero: number; orixa: string };
  coracao: { numero: number; orixa: string };
  racional: { numero: number; orixa: string };
  destino: { numero: number; orixa: string };
  fe: { numero: number; orixa: string };
}

interface CabalaFormProps {
  onCalculate?: (results: CabalaResult) => void;
}

export default function CabalaForm({ onCalculate }: CabalaFormProps) {
  const { t } = useLanguage();
  const [birthDate, setBirthDate] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<CabalaResult | null>(null);

  const handleCalculate = () => {
    if (!birthDate) return;

    // Converter a data para o formato necessário e calcular
    const [day, month, year] = birthDate.split('/');
    const results = calculateCabala(day, month, year);
    setResults(results);
    setShowResults(true);
    if (onCalculate) onCalculate(results);
  };

  const handleBack = () => {
    setShowResults(false);
    setBirthDate('');
    setResults(null);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ''); // Remove não-dígitos
    
    if (value.length <= 8) {
      // Formata como dd/mm/aaaa
      value = value.replace(/(\d{2})(\d)/, '$1/$2');
      value = value.replace(/(\d{2})(\d)/, '$1/$2');
    }
    
    setBirthDate(value);
  };

  const ResultadoItem = ({ icon, label, valor }: { 
    icon: React.ReactNode, 
    label: string, 
    valor?: { numero: number; orixa: string }
  }) => (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      p: 2,
      borderRadius: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }
    }}>
      {icon}
      <Typography>
        {label} - {valor ? (
          <span style={{ fontWeight: 'bold' }}>
            {valor.numero} - {valor.orixa}
          </span>
        ) : ''}
      </Typography>
    </Box>
  );

  return (
    <Paper elevation={3} sx={{ 
      p: { xs: 2, sm: 3, md: 5 }, 
      maxWidth: { xs: '100%', sm: '95%', md: '90%', lg: '1400px' }, 
      mx: 'auto', 
      mt: 4,
      minHeight: showResults ? '800px' : 'auto'
    }}>
      {!showResults ? (
        <Box component="form" noValidate autoComplete="off" sx={{ maxWidth: 600, mx: 'auto' }}>
          <TextField
            fullWidth
            label={t('form.birthDate')}
            value={birthDate}
            onChange={handleDateChange}
            placeholder="DD/MM/AAAA"
            sx={{ mb: 2 }}
          />
          <Button
            fullWidth
            variant="contained"
            onClick={handleCalculate}
            disabled={birthDate.length !== 10}
            sx={{
              background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
              color: 'white',
              py: 1.5,
              fontSize: '1.1rem'
            }}
          >
            {t('form.calculate')}
          </Button>
        </Box>
      ) : (
        <Box>
          <Grid container spacing={4}>
            <Fade in={showResults} timeout={800}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Grid container spacing={2}>
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                      <Grid item xs={6} key={num}>
                        <TextField
                          fullWidth
                          label={`${t('form.number')} ${num}`}
                          value={results?.numbers?.[`number${num}`].toString()}
                          disabled
                        />
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                      {t('results.title')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <ResultadoItem
                        icon={<AttachMoneyIcon />}
                        label={t('results.money')}
                        valor={results?.dinheiro}
                      />
                      <ResultadoItem
                        icon={<PeopleIcon />}
                        label={t('results.people')}
                        valor={results?.pessoas}
                      />
                      <ResultadoItem
                        icon={<FavoriteIcon />}
                        label={t('results.heart')}
                        valor={results?.coracao}
                      />
                      <ResultadoItem
                        icon={<PsychologyIcon />}
                        label={t('results.rational')}
                        valor={results?.racional}
                      />
                      <ResultadoItem
                        icon={<PublicIcon />}
                        label={t('results.destiny')}
                        valor={results?.destino}
                      />
                      <ResultadoItem
                        icon={<ChurchIcon />}
                        label={t('results.faith')}
                        valor={results?.fe}
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Fade>

            <Fade in={showResults} timeout={1000}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '400px', sm: '500px', md: '600px' },
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                    transform: 'scale(0.98)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1)',
                    }
                  }}
                >
                  <Image
                    src={`/images/${results?.destino?.numero}.jpg`}
                    alt={`Destino ${results?.destino?.numero}`}
                    fill
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                      color: 'white'
                    }}
                  >
                    <Typography variant="h5" gutterBottom>
                      {results?.destino?.orixa}
                    </Typography>
                    <Typography>
                      Número do Destino: {results?.destino?.numero}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Fade>
          </Grid>

          <Button
            fullWidth
            variant="outlined"
            onClick={handleBack}
            sx={{ 
              mt: 4,
              py: 1.5,
              fontSize: '1.1rem'
            }}
          >
            {t('form.back')}
          </Button>
        </Box>
      )}
    </Paper>
  );
} 