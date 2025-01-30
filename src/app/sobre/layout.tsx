import { siteConfig } from '../metadata';

export const metadata = {
  title: 'Sobre | Cabala Online',
  description: 'Entenda como funciona o cálculo dos Orixás através da numerologia sagrada. Descubra a influência dos números em sua vida espiritual.',
  openGraph: {
    ...siteConfig.openGraph,
    title: 'Sobre | Cabala Online',
    description: 'Entenda como funciona o cálculo dos Orixás através da numerologia sagrada. Descubra a influência dos números em sua vida espiritual.'
  }
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 