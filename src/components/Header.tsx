'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Cómo obtenerlo', href: '/#como-obtenerlo' },
  { label: 'Contacto', href: '/#contacto' },
  { label: 'Preguntas frecuentes', href: '/#faq' },
];

const downloadUrl =
  'https://testmoneybic.vercel.app';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoUrl = '/assets/moneybichorizontal.png';

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Barra verde superior */}
      <div className="w-full bg-[#5da03b] text-white py-2 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide">
        0% de interés en tu primer préstamo. Pídelo hoy.
      </div>

      {/* Navegación principal limpia sin contenedor redondeado */}
      <div className="w-full bg-background/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src={logoUrl}
                alt="MONEYBIC Logo"
                width={300}
                height={85}
                className="object-contain h-10 sm:h-13 md:h-14 w-auto"
                priority
              />
            </Link>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-2 rounded-full text-sm xl:text-[15px] font-semibold text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Botón Descargar y Toggle Mobile */}
            <div className="flex items-center gap-3">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/20 transition-all"
              >
                <span>Solicitar Préstamo</span>
                <Download className="h-4 w-4" />
              </a>

              {/* Botón Hamburguesa Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú desplegable Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-2xl px-6 py-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="pt-3 border-t border-white/10">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="pill-button w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-xs font-bold uppercase tracking-wider"
              >
                <span>DESCARGAR APP</span>
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
