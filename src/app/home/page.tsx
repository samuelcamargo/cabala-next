'use client';
import { Box, Typography, Button, Container } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Página Home 2
        </Typography>
        <Button variant="contained" color="primary">
          Botão de Exemplo
        </Button>
      </Box>
    </Container>
  );
} 