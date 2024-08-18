import React from 'react'
import { getUserSession } from '@/lib/db/getUserSession'
import { searchMedia } from '@/lib/services/searchMedia'
import { MediaCard } from './MediaCard'

export async function FavoritesResult ({ lang }) {
  const { session } = await getUserSession()
  const { favorites } = await fetch('https://movie-bowser.vercel.app/api/db/getAllFavorites',
    {
      method: 'POST',
      body: JSON.stringify({ session }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(res => res.json())

  return (

    <section className='GroupOfMovies gap-2 sm:gap-4 md:gap-5 pt-5 sm:pt-7 md:pt-12 px-4 md:px-16'>
      {favorites.map(async ({ mediaId, mediaType }) => {
        const { media } = await searchMedia({ searchType: 'byId', mediaType, id: mediaId, lang })
        return (
          <MediaCard key={mediaId} media={media[0]} mediaType={mediaType}/>
        )
      }) }

    </section>

  )
}
