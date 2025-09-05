import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from 'next/font/google'
import { appWithTranslation } from 'next-i18next'
import '../i18n'

const inter = Inter({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  variable: '--font-inter',
})

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
