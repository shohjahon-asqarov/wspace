import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import TypeScript files
import enTranslations from './locales/en/common'
import kzTranslations from './locales/kz/common'
import ruTranslations from './locales/ru/common'
import uzTranslations from './locales/uz/common'

const resources = {
  en: {
    translation: enTranslations
  },
  kz: {
    translation: kzTranslations
  },
  ru: {
    translation: ruTranslations
  },
  uz: {
    translation: uzTranslations
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
