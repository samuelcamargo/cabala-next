'use client';
import { useLanguage } from '@/context/LanguageContext';
import Home from './home/page';

export default function Page() {
  const { t } = useLanguage();

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

  return <Home />;
}
