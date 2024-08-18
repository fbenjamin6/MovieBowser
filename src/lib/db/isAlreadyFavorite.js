export async function isAlreadyFavorite ({ id, currentMediaType, session }) {
  if (!session) return
  try {
    return await fetch('https://movie-bowser.vercel.app/api/db/getAllFavorites',
      {
        method: 'POST',
        body: JSON.stringify({ session }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => res.json())
      .then(({ favorites }) => {
        const isInFavorites = favorites?.some(({ mediaId, mediaType }) => {
          return mediaId === id && mediaType === currentMediaType
        })

        return isInFavorites || false
      })
  } catch (error) {
    return Error({ message: error })
  }
}
