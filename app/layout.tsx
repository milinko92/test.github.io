import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kubernix Blog',
  description: 'DevOps • Homelab • Linux • Cloud'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className="bg-brand-dark text-brand-bg">
        <div className="min-h-screen">
          <header className="mx-auto max-w-5xl px-6 py-8">
            <h1 className="text-4xl font-bold text-brand-light">Kubernix Blog</h1>
            <p className="text-brand-accent">DevOps • Homelab • Linux • Cloud</p>
          </header>
          {children}
          <footer className="mt-16 bg-brand-mid/60">
            <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-brand-light/80">
              © {new Date().getFullYear()} Kubernix — Hashnode (CMS) + Next.js (frontend)
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
