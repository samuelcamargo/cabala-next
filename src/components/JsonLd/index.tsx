'use client';
import { siteConfig } from '@/app/metadata';

export default function JsonLd() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.openGraph.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.openGraph.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cabala Online',
    url: siteConfig.openGraph.url,
    logo: `${siteConfig.openGraph.url}/images/logo.png`,
    sameAs: [
      'https://facebook.com/cabalaonline',
      'https://instagram.com/cabalaonline',
      'https://twitter.com/cabalaonline'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contato@cabalaonline.com.br',
      contactType: 'customer service'
    }
  };

  const spiritualServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cálculo de Orixás',
    description: 'Descubra quais Orixás regem sua vida através da numerologia sagrada',
    provider: {
      '@type': 'Organization',
      name: 'Cabala Online'
    },
    serviceType: 'Numerologia Espiritual',
    areaServed: 'BR',
    availableLanguage: ['Portuguese', 'English', 'Spanish']
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Como a Numerologia dos Orixás Influencia Sua Vida',
    description: 'Entenda como os números e os Orixás se conectam para revelar aspectos importantes da sua vida',
    image: `${siteConfig.openGraph.url}/images/og-image.jpg`,
    author: {
      '@type': 'Organization',
      name: 'Cabala Online'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cabala Online',
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.openGraph.url}/images/logo.png`
      }
    },
    datePublished: '2024-01-30',
    dateModified: '2024-01-30'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spiritualServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
} 