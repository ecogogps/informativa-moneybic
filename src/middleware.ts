import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Omitir middleware para archivos estáticos, API y la propia página de error
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/no-disponible' ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Detectar país desde encabezados comunes (Vercel, GCP, Cloudflare, etc.)
  const country = request.headers.get('x-vercel-ip-country') || 
                  request.headers.get('x-appengine-country') ||
                  request.headers.get('cf-ipcountry') ||
                  request.headers.get('x-country-code');

  // Países permitidos
  const allowedCountries = ['MX', 'EC'];

  // En desarrollo se omite el bloqueo para permitir pruebas y vista previa sin fallos por proxies de red
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next();
  }

  // Solo bloqueamos si el encabezado está presente y el país NO es permitido.
  if (country && !allowedCountries.includes(country)) {
    return NextResponse.redirect(new URL('/no-disponible', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}