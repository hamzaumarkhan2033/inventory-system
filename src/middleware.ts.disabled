import NextAuth from 'next-auth';
import { authConfig } from './auth.config'; // We need to split config to avoid edge runtime issues with prisma

export default NextAuth(authConfig).auth;

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
