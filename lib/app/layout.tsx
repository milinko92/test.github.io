import './styles/globals.css';
export const metadata = { title: 'Moj Blog', description: 'DevOps • Homelab • Cloud' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className="bg-brand-dark text-brand-bg">
        <header className="mx-auto max-w-5xl px-6 py-8">
          <h1 className="text-4xl font-bold text-brand-light">Moj Blog</h1>
          <p className="text-brand-accent">DevOps • Homelab • Linux • Cloud</p>
        </header>
        {children}
      </body>
    </html>
  );
}
