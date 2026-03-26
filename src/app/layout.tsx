import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'MONEYBIC',
  description: 'Finanzas inteligentes con MONEYBIC.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoUrl = "https://i.postimg.cc/Jzd6XVzQ/MONEYBIC-LOGO.png";

  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body min-h-screen flex flex-col bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
          <div className="container mx-auto flex h-20 items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src={logoUrl} 
                alt="MONEYBIC Logo" 
                width={130} 
                height={36} 
                className="object-contain"
                priority
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="badge-text hover:text-primary transition-colors">Inicio</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-6 py-12 max-w-4xl">
          {children}
        </main>

        <footer className="border-t border-white/5 py-12 bg-card/30">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-6 flex justify-center">
              <Image 
                src={logoUrl} 
                alt="MONEYBIC Logo" 
                width={140} 
                height={40} 
                className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
            
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
              <Link href="/politica-de-privacidad" className="badge-text text-[10px] hover:text-primary transition-colors">Política de Privacidad</Link>
              <Link href="/acuerdo-de-servicio-al-usuario" className="badge-text text-[10px] hover:text-primary transition-colors">Acuerdo de Servicio</Link>
              <Link href="/terminos-y-condiciones" className="badge-text text-[10px] hover:text-primary transition-colors">Términos y Condiciones</Link>
              <Link href="/politica-de-cancelaciones-y-reembolsos" className="badge-text text-[10px] hover:text-primary transition-colors">Cancelaciones y Reembolsos</Link>
            </nav>

            <p className="text-muted-foreground text-sm">
              &copy; 2026 MONEYBIC. Todos los derechos reservados.
            </p>
            <p className="badge-text text-[10px] mt-2 text-primary/60">
              Fecha de Publicación: 19/03/2026
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
