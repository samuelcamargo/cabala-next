import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function NotFound() {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="bg-[#1a1a1a]">
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="text-center text-white p-8 rounded-lg">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl mb-4">Página Não Encontrada</h2>
            <p className="mb-8">Desculpe, a página que você está procurando não existe.</p>
            <Link
              href="/"
              className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              Voltar para o Início
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
} 