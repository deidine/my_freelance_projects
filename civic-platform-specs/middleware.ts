import { createI18nMiddleware } from 'next-international/middleware'

export default createI18nMiddleware({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
})

export const config = {
  matcher: ['/', '/(fr|en)/:path*'],
}
