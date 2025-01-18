'use client';
import ComponentButton from '@/components/ComponentButton';
import { Box, Typography, Container } from '@mui/material';

export default function Sobre() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Página Sobre 2
        </Typography>
      </Box>
      <ComponentButton href="/home">Ir para a página Home</ComponentButton>
    </Container>
  );
} 