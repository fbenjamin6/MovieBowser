import React from 'react'
import '../globals.css'
import { Header } from '../../components/ui/Header'
import { Footer } from '../../components/ui/Footer'
import { i18n } from '../../../i18n-config'
import { DM_Sans } from 'next/font/google'

const DMSans = DM_Sans({ subsets: ['latin'], display: 'swap' })

export async function generateStaticParams () {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout ({ children, params }) {
  const { lang } = params
  return (
    <html lang={lang} className={`${DMSans.className} antialiased`}>
      <body>
        <Header lang={lang}/>
        <main className='relative'>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
