'use client';

import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/context/LanguageContext';
import { MainContent } from './MainContent';
import ThemeRegistry from './ThemeRegistry';
import { AppThemeProvider } from '@/context/ThemeContext';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeRegistry>
        <AppThemeProvider>
          <LanguageProvider>
            <MainContent>
              {children}
            </MainContent>
          </LanguageProvider>
        </AppThemeProvider>
      </ThemeRegistry>
    </ThemeProvider>
  );
} 