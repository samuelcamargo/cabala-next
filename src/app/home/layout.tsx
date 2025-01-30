import { siteConfig } from '../metadata';

export const metadata = {
  title: 'Início | Calcule seus Orixás',
  description: 'Descubra os Orixás que regem sua vida através da numerologia sagrada. Faça seu cálculo personalizado baseado em sua data de nascimento.',
  openGraph: {
    ...siteConfig.openGraph,
    title: 'Início | Calcule seus Orixás',
    description: 'Descubra os Orixás que regem sua vida através da numerologia sagrada. Faça seu cálculo personalizado baseado em sua data de nascimento.'
  }
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 