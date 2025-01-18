'use client';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../theme/theme';
import Navbar from '@/components/ComponentNavbar';
import Box from '@mui/material/Box';
import GradientBackground from '@/components/GradientBackground';
import { ThemeProvider } from '@/context/ThemeContext';
import { useTheme } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useTheme();

  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <GradientBackground>
        <Navbar titulo="Cabala Online" />
        <Box sx={{ flex: 1, py: 4 }}>
          {children}
        </Box>
      </GradientBackground>
    </MuiThemeProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>
        <LanguageProvider>
          <ThemeProvider>
            <RootLayoutContent>{children}</RootLayoutContent>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}