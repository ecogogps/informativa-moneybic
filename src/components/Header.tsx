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
  'https://drive.google.com/drive/folders/1BBfKHajYvCM9bDhsBSJ5dBWE7LtvZVDu?usp=sharing';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoUrl = 'https://i.postimg.cc/Jzd6XVzQ/MONEYBIC-LOGO.png';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:pt-5 pointer-events-none">
      <div className="container mx-auto max-w-6xl pointer-events-auto">
        <div className="flex min-h-[4.75rem] sm:min-h-[5.25rem] items-center justify-between px-6 sm:px-8 py-3 rounded-full bg-card/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 transition-all">
          {/* Logo con mayor tamaño */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={logoUrl}
              alt="MONEYBIC Logo"
              width={240}
              height={65}
              className="object-contain h-10 sm:h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Navegación Desktop - Botones de menú de cada sección */}
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
              className="pill-button hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/20 transition-all"
            >
              <span>Descargar App</span>
              <Download className="h-4 w-4" />
            </a>

            {/* Botón Hamburguesa Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menú desplegable Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 rounded-3xl bg-card/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-3 duration-200">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
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
                <span>Descargar App</span>
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
