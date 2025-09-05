module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'kz', 'ru', 'uz'],
    localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
