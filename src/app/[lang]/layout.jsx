import React from 'react'
import '../globals.css'
import { Header } from '../../components/ui/Header'
import { Footer } from '../../components/ui/Footer'
import { i18n } from '../../../i18n-config'
import { DM_Sans as DMSans } from 'next/font/google'

export async function generateMetadata ({ params }) {
  const { lang } = params

  const metadata = {
    es: {
      metadataBase: new URL('https://movie-bowser.vercel.app'),
      title: {
        template: '%s | Movie Bowser',
        default: 'Movie Bowser'
      },
      description: 'Explora películas y series, desde clásicos icónicos hasta los últimos estrenos, en Movie Browser. Regístrate para seguir tus favoritos y nunca perderte lo mejor del cine y el streaming.',
      applicationName: 'Movie Bowser',
      referrer: 'origin-when-cross-origin',
      keywords: ['Movie Browser',
        'películas',
        'series',
        'programas de TV',
        'últimos estrenos',
        'películas clásicas',
        'streaming',
        'cine',
        'reseñas de películas',
        'ver tráilers',
        'películas favoritas',
        'series favoritas',
        'explorar películas',
        'descubrir series',
        'streaming online'
      ],
      authors: 'Federico Benjamín',
      creator: 'Federico Benjamín',
      publisher: 'Federico Benjamín',
      openGraph: {
        title: 'Movie Bowser',
        description: 'Explora películas y series, desde clásicos icónicos hasta los últimos estrenos, en Movie Browser. Regístrate para seguir tus favoritos y nunca perderte lo mejor del cine y el streaming.',
        url: 'https://movie-bowser.vercel.app',
        siteName: 'Movie Bowser',
        images: '/logo/bowserLogo.png',
        type: 'website'
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1
        }
      }
    },
    en: {
      metadataBase: new URL('https://movie-bowser.vercel.app'),
      title: {
        template: '%s | Movie Bowser',
        default: 'Movie Bowser'
      },
      applicationName: 'Movie Bowser',
      referrer: 'origin-when-cross-origin',
      description: 'Explore movies and series, from iconic classics to the latest releases, on Movie Browser. Sign up to follow your favorites and never miss the best of cinema and streaming.',
      keywords: ['Movie Browser',
        'movies',
        'series',
        'TV shows',
        'latest releases',
        'classic movies',
        'streaming',
        'cinema',
        'film reviews',
        'watch trailers',
        'favorite movies',
        'favorite series',
        'explore movies',
        'discover series',
        'online streaming'
      ],
      authors: 'Federico Benjamín',
      creator: 'Federico Benjamín',
      publisher: 'Federico Benjamín',
      openGraph: {
        title: 'Movie Bowser',
        description: '',
        url: 'https://movie-bowser.vercel.app',
        siteName: 'Movie Bowser',
        images: '/logo/bowserLogo.png',
        type: 'website'
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1
        }
      }
    }
  }

  return metadata[lang] || metadata.es
}

const DMSansFont = DMSans({ subsets: ['latin'], display: 'swap' })

export async function generateStaticParams () {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout ({ children, params }) {
  const { lang } = params
  return (
    <html lang={lang} className={`${DMSansFont.className} antialiased`}>
      <body className='grid min-h-[90vh] grid-rows-[min-content] '>
        <Header lang={lang}/>
        <main className='relative overflow-hidden min-h-[90vh]'>{children}</main>
        <Footer lang={lang}/>
      </body>
    </html>
  )
}
