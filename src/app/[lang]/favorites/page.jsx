import React from 'react'
import { FavoritesResult } from '@/components/media/FavoritesResult'
import { getUserSession } from '@/lib/auth/getUserSession'
import { redirect } from 'next/navigation'
import { getDictionary } from '@/lib/dictionaries/dictionary'

export default async function FavoritesPage ({ params }) {
  const { lang } = params
  const { favorites } = await getDictionary(lang)
  const { session } = await getUserSession()
  if (!session) return redirect(`/${lang}/auth`)

  return (
    <>
      <h2 className='pt-20 sm:pt-24 md:pt-26 px-4 md:px-16  text-2xl m-auto max-w-[1600px]'>
        {favorites}
      </h2>
      <FavoritesResult lang={lang} session={session} />
    </>

  )
}
