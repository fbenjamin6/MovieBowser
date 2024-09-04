'use client'
import React, { useEffect, useState } from 'react'
import { searchMedia } from '@/lib/services/searchMedia'
import { MediaCard } from './MediaCard'
import { SearchMediaSkeleton } from '../Skeletons'

export function FavoritesResult ({ lang, session }) {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    updateFavorites()
  }, [session])

  async function updateFavorites () {
    setLoading(true)
    const { favorites } = await fetch('https://movie-bowser.vercel.app/api/db/getAllFavorites',
      {
        method: 'POST',
        body: JSON.stringify({ session }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => {
      return res.json()
    })

    const newFavorites = await Promise.all(
      favorites?.map(async ({ mediaId, mediaType }) => {
        const { media } = await searchMedia({ searchType: 'byId', mediaType, id: mediaId, lang })
        return ({ media, mediaType })
      })

    )
    setFavorites(newFavorites)
    setLoading(false)
  }

  return (

    <>
      {loading
        ? <SearchMediaSkeleton/>
        : (<section className='GroupOfMovies gap-2 sm:gap-4 md:gap-5 pt-5 sm:pt-7 md:pt-12 px-4 md:px-16 mb-24 md:mb-36'>
            {favorites.map(({ media, mediaType }) => {
              return (
              <MediaCard key={media[0].id} media={media[0]} mediaType={mediaType}/>
              )
            })}
          </section>
          )
      }
    </>

  )
}
