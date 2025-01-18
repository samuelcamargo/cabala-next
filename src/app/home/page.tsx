'use client';
import ComponentButton from '@/components/ComponentButton';
import { Box, Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Página Home 2
        </Typography>
      </Box>
      <ComponentButton href="/sobre">Ir para a página Sobre</ComponentButton>
    </Container>
  );
} 