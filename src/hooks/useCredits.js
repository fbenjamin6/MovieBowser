import { useEffect, useState } from 'react'
import { searchCredits } from '../services/searchCredits'

export function useCredits ({ id }) {
  const [credits, setCredits] = useState({
    Acting: [],
    Writing: [],
    Directing: []
  })

  useEffect(() => {
    if (id === undefined) return

    searchCredits({ id })
      .then(movieCredits => {
        movieCredits.cast.forEach(person => {
          const newCredits = { ...credits }
          if (newCredits[person.known_for_department]?.length >= 10) return
          newCredits[person.known_for_department]?.push(person)
          setCredits(newCredits)
        })
        movieCredits.crew.forEach(person => {
          const newCredits = { ...credits }
          if (newCredits[person.department]?.length >= 3) return
          newCredits[person.department]?.push(person)
          setCredits(newCredits)
        })
      })
  }, [])
  console.log(credits)

  return { credits }
}
