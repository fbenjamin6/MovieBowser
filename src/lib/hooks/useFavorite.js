import { useState } from 'react'

export function useFavorite ({ id, currentMediaType, session, initialIsFavorite }) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite)
  // entre navegaciones se mantiene le estado del favorito?
  async function addFavorite () {
    setIsFavorite(true)
    try {
      const response = await fetch('/api/db/addFavorite',
        {
          method: 'POST',
          body: JSON.stringify({
            mediaId: id,
            mediaType: currentMediaType,
            session
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then(res => res.json())
    } catch (error) {
      setIsFavorite(false)
      return Error('An error ocurred while trying to add a favorite')
    }
  }

  async function removeFavorite () {
    setIsFavorite(false)
    try {
      const response = await fetch('/api/db/removeFavorite',
        {
          method: 'POST',
          body: JSON.stringify({
            mediaId: id,
            mediaType: currentMediaType,
            session
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then(res => res.json())
    } catch (error) {
      setIsFavorite(true)
      return Error('An error ocurred while trying to delete a favorite')
    }
  }

  return ({ isFavorite, removeFavorite, addFavorite })
}