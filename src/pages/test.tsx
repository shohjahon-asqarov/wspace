import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import Navbar from '@/components/sections/Navbar'

export default function TestPage() {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
              {t('navbar.products')} - Internationalization Test
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-700">
                Current Language: {router.locale}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-600">Navigation Items:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{t('navbar.products')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{t('navbar.solution')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{t('navbar.resource')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{t('navbar.pricing')}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-600">Action Buttons:</h3>
                  <div className="space-y-3">
                    <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                      {t('navbar.login')}
                    </button>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      {t('navbar.tryFree')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Use the language switcher in the navbar to test different languages:
              </p>
              <div className="flex justify-center gap-4 text-sm text-gray-500">
                <span>🇺🇸 English</span>
                <span>🇰🇿 Қазақша</span>
                <span>🇷🇺 Русский</span>
                <span>🇺🇿 O'zbek</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
