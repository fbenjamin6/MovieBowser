import React from 'react'
import '../globals.css'
import { Header } from '../../components/ui/Header'
import { Footer } from '../../components/ui/Footer'
import { i18n } from '../../../i18n-config'
import { DM_Sans as DMSans } from 'next/font/google'

export const metadata = {
  title: {
    template: '%s | Movie Bowser',
    default: 'Movie Bowser'
  }
}

const DMSansFont = DMSans({ subsets: ['latin'], display: 'swap' })

export async function generateStaticParams () {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout ({ children, params }) {
  const { lang } = params
  return (
    <html lang={lang} className={`${DMSansFont.className} antialiased`}>
      <body>
        <Header lang={lang}/>
        <main className='relative'>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
