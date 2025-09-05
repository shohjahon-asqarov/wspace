import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'kz', 'ru', 'uz']
const defaultLocale = 'en'

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Get locale from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language')
    let locale = defaultLocale

    if (acceptLanguage) {
      const preferredLocale = acceptLanguage
        .split(',')
        .map((lang) => lang.split(';')[0].trim())
        .find((lang) => locales.includes(lang.split('-')[0]))

      if (preferredLocale) {
        locale = preferredLocale.split('-')[0]
      }
    }

    // Redirect to the pathname with the locale prefix
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export function middleware(request: NextRequest) {
  return getLocale(request)
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
