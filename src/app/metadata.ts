export const siteConfig = {
  title: 'Cabala Online - Descubra seus Orixás',
  description: 'Descubra quais Orixás regem sua vida através da numerologia sagrada. Calcule sua data de nascimento e entenda sua conexão espiritual.',
  keywords: 'cabala, orixás, numerologia sagrada, espiritualidade, candomblé, umbanda, destino espiritual',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cabalaonline.com.br',
    siteName: 'Cabala Online',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cabala Online - Descubra seus Orixás'
      }
    ]
  },
  twitter: {
    handle: '@cabalaonline',
    site: '@cabalaonline',
    cardType: 'summary_large_image',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code'
  },
  metadataBase: new URL('https://cabalaonline.com.br')
}; 