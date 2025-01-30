'use client';

import GradientBackground from '@/components/GradientBackground';
import ComponentNavbar from '@/components/ComponentNavbar';
import ComponentFooter from '@/components/ComponentFooter';

export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ComponentNavbar titulo="Cabala Online" />
      <GradientBackground>
        <main className="flex-grow">{children}</main>
      </GradientBackground>
      <ComponentFooter />
    </div>
  );
} 