'use client';
import { Box, Container, TextField, Button, Typography, Tooltip, Zoom, Fade } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { calcularCabala } from '@/utils/cabala';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PublicIcon from '@mui/icons-material/Public';
import ChurchIcon from '@mui/icons-material/Church';
import { ResultadoCabala, ResultadoOrixa } from '@/types/cabala';
import { useLanguage } from '@/context/LanguageContext';
import ComponentSlideshow from '@/components/ComponentSlideshow';

export default function Home() {
  const theme = useTheme();
  const [numeros, setNumeros] = useState(['', '', '', '', '', '', '', '']);
  const [resultado, setResultado] = useState<ResultadoCabala | null>(null);
  const [error, setError] = useState('');
  const { t } = useLanguage();

  const handleChange = (index: number, value: string) => {
    if (value === '' || (Number(value) >= 0 && Number(value) <= 9)) {
      const novosNumeros = [...numeros];
      novosNumeros[index] = value;
      setNumeros(novosNumeros);
      setError('');
    }
  };

  const handleCalcular = (e: React.FormEvent) => {
    e.preventDefault();
    if (numeros.some(n => n === '')) {
      setError('Por favor, preencha todos os números');
      return;
    }
    const resultadoCabala = calcularCabala(numeros);
    setResultado(resultadoCabala);
  };

  const ResultadoItem = ({ icon, label, valor, tooltip }: { 
    icon: React.ReactNode, 
    label: string, 
    valor?: ResultadoOrixa,
    tooltip: string 
  }) => (
    <Tooltip title={tooltip} arrow TransitionComponent={Zoom}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1,
        p: 1.5,
        borderRadius: 1,
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'rgba(255, 255, 255, 0.05)' 
          : 'rgba(0, 0, 0, 0.02)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.05)',
          transform: 'translateX(5px)'
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
    </Tooltip>
  );

  const slides = [
    {
      title: t('slides.slide1.title'),
      description: t('slides.slide1.description'),
      backgroundImage: "/images/slide1.jpg"
    },
    {
      title: t('slides.slide2.title'),
      description: t('slides.slide2.description'),
      backgroundImage: "/images/slide2.jpg"
    },
    {
      title: t('slides.slide3.title'),
      description: t('slides.slide3.description'),
      backgroundImage: "/images/slide3.jpg"
    }
  ];

  return (
    <>
      <ComponentSlideshow slides={slides} />
      <Container 
        maxWidth="md"
        disableGutters
        sx={{
          px: { xs: 2, sm: 3 }
        }}
      >
        <Box sx={{ 
          mt: 2,
          p: 4, 
          backgroundColor: theme => theme.palette.mode === 'dark' 
            ? 'rgba(0, 0, 0, 0.6)' 
            : 'rgba(255, 255, 255, 0.9)',
          borderRadius: 2,
          boxShadow: theme => theme.palette.mode === 'dark'
            ? '0 8px 32px rgba(0, 0, 0, 0.5)'
            : '0 8px 32px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          <form onSubmit={handleCalcular}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={resultado ? 6 : 12}>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: 3,
                  p: 3,
                  backgroundColor: theme => theme.palette.mode === 'dark' 
                    ? 'rgba(0, 0, 0, 0.4)' 
                    : 'rgba(255, 255, 255, 0.8)',
                  borderRadius: 2,
                  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  {numeros.map((numero, index) => (
                    <TextField
                      key={index}
                      type="number"
                      label={`${t('form.number')} ${index + 1}`}
                      variant="outlined"
                      value={numero}
                      onChange={(e) => handleChange(index, e.target.value)}
                      error={error !== '' && numero === ''}
                      inputProps={{
                        min: 0,
                        max: 9,
                        style: { textAlign: 'center' }
                      }}
                      fullWidth
                    />
                  ))}
                  {resultado && (
                    <>
                      <TextField
                        label="Soma 1"
                        value={resultado.dinheiro.numero}
                        disabled
                        fullWidth
                      />
                      <TextField
                        label="Soma 2"
                        value={resultado.pessoas.numero}
                        disabled
                        fullWidth
                      />
                    </>
                  )}
                </Box>
                {error && (
                  <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
                    {error}
                  </Typography>
                )}
              </Grid>

              <Fade in={!!resultado} timeout={800}>
                <Grid item xs={12} md={6} sx={{ 
                  display: resultado ? 'block' : 'none',
                  transition: 'all 0.3s ease'
                }}>
                  <Box 
                    sx={{ 
                      height: '100%',
                      minHeight: '280px',
                      backgroundColor: theme => theme.palette.mode === 'dark' 
                        ? 'rgba(0, 0, 0, 0.4)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      borderRadius: 2,
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                      opacity: resultado ? 1 : 0,
                      transform: resultado ? 'translateX(0)' : 'translateX(20px)'
                    }}
                  >
                    {resultado && (
                      <>
                        <Fade in={true} timeout={1000}>
                          <Typography variant="h6" gutterBottom>
                            {t('results.title')}
                          </Typography>
                        </Fade>
                        {[
                          {
                            icon: <AttachMoneyIcon />,
                            label: t('results.money'),
                            valor: resultado.dinheiro,
                            tooltip: t('tooltips.money'),
                            delay: 200
                          },
                          {
                            icon: <PeopleIcon />,
                            label: t('results.people'),
                            valor: resultado.pessoas,
                            tooltip: t('tooltips.people'),
                            delay: 400
                          },
                          {
                            icon: <FavoriteIcon />,
                            label: t('results.heart'),
                            valor: resultado.coracao,
                            tooltip: t('tooltips.heart'),
                            delay: 600
                          },
                          {
                            icon: <PsychologyIcon />,
                            label: t('results.rational'),
                            valor: resultado.racional,
                            tooltip: t('tooltips.rational'),
                            delay: 800
                          },
                          {
                            icon: <PublicIcon />,
                            label: t('results.destiny'),
                            valor: resultado.destino,
                            tooltip: t('tooltips.destiny'),
                            delay: 1000
                          },
                          {
                            icon: <ChurchIcon />,
                            label: t('results.faith'),
                            valor: resultado.fe,
                            tooltip: t('tooltips.faith'),
                            delay: 1200
                          }
                        ].map((item, index) => (
                          <Fade 
                            key={item.label} 
                            in={true} 
                            timeout={800}
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            <div>
                              <ResultadoItem 
                                icon={item.icon}
                                label={item.label}
                                valor={item.valor}
                                tooltip={item.tooltip}
                              />
                            </div>
                          </Fade>
                        ))}
                      </>
                    )}
                  </Box>
                </Grid>
              </Fade>

              <Grid item xs={12}>
                <Button 
                  type="submit"
                  variant="contained" 
                  color="primary" 
                  fullWidth
                  size="large"
                  sx={{ 
                    mt: 2,
                    py: 2,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #1a237e 30%, #1976d2 90%)',
                    boxShadow: '0 3px 5px 2px rgba(25, 118, 210, .3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #15196e 30%, #1565c0 90%)',
                    }
                  }}
                >
                  {t('form.calculate')}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  );
} 