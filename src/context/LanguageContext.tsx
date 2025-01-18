'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import ptBR from '@/i18n/locales/pt-BR';
import en from '@/i18n/locales/en';
import es from '@/i18n/locales/es';

type Language = 'pt-BR' | 'en' | 'es';
type TranslationValue = string | Record<string, unknown>;
type Translations = Record<string, Record<string, TranslationValue>>;

const translations: Translations = {
  'pt-BR': ptBR,
  'en': en,
  'es': es
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt-BR');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: TranslationValue = translations[language];
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = value[k];
      }
      if (value === undefined) return key;
    }
    
    return String(value);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 