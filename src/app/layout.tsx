import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'MONEYBIC',
  description: 'Finanzas inteligentes con MONEYBIC.',
  openGraph: {
    title: 'MONEYBIC',
    description: 'Finanzas inteligentes con MONEYBIC.',
  },
  verification: {
    google: 'uhb7hk4hBTHGUSlzbMsg0YU_3fAQ_CN-4fGvRgyG2nY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoUrl = 'https://i.postimg.cc/Jzd6XVzQ/MONEYBIC-LOGO.png';

  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Header />

        <main className="flex-1 eth-grid-bg relative pt-24 sm:pt-28">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 eth-radial-glow pointer-events-none" />
          {children}
        </main>

        <footer className="border-t border-white/10 py-12 bg-card/40 backdrop-blur-md relative">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src={logoUrl}
                alt="MONEYBIC Logo"
                width={140}
                height={40}
                className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>

            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
              <Link
                href="/politica-de-privacidad"
                className="badge-text text-[11px] text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/acuerdo-de-servicio-al-usuario"
                className="badge-text text-[11px] text-muted-foreground hover:text-primary transition-colors"
              >
                Acuerdo de Servicio
              </Link>
              <Link
                href="/terminos-y-condiciones"
                className="badge-text text-[11px] text-muted-foreground hover:text-primary transition-colors"
              >
                Términos y Condiciones
              </Link>
              <Link
                href="/politica-de-cancelaciones-y-reembolsos"
                className="badge-text text-[11px] text-muted-foreground hover:text-primary transition-colors"
              >
                Cancelaciones y Reembolsos
              </Link>
            </nav>

            <p className="text-muted-foreground text-sm">
              &copy; 2026 MONEYBIC. Todos los derechos reservados.
            </p>
            <p className="badge-text text-[10px] mt-2 text-primary/70">
              Fecha de Publicación: 19/03/2026
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
