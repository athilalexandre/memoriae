import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './lib/session';

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith('/admin');
  const isLoginPage = pathname === '/admin/login';
  const isCreatePage = pathname === '/admin/create';

  // Se acessar /admin/login, redireciona para /admin/create (login desativado)
  if (isLoginPage) {
    return NextResponse.redirect(new URL('/admin/create', request.url));
  }

  // Permite acesso direto à página de criação, mesmo sem sessão
  if (isCreatePage) {
    return NextResponse.next();
  }

  // Para outras rotas admin, se desejar manter proteção por sessão, deixe como está
  if (isAdminRoute && !session) {
    return NextResponse.redirect(new URL('/admin/create', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
}; 