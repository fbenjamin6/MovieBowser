import { useEffect, useState } from 'react'
import { searchCredits } from '../services/searchCredits'
import { useLanguageContext } from './useLanguageContext'

export function useCredits ({ id }) {
  const [credits, setCredits] = useState({
    Acting: [],
    Writing: [],
    Directing: []
  })
  const { langToUse } = useLanguageContext()

  useEffect(() => {
    if (id === undefined) return

    searchCredits({ id, lang: langToUse })
      .then(movieCredits => {
        const newCredits = {
          Acting: [],
          Writing: [],
          Directing: []
        }
        movieCredits.cast.forEach((person) => {
          if (newCredits.Acting.length >= 12) return
          newCredits[person.known_for_department]?.push(person)
          setCredits(newCredits)
        })
        movieCredits.crew.forEach(person => {
          if (person.department !== 'Writing') return
          if (newCredits.Writing.length >= 3) return
          if (isAlreadyIncluded(newCredits.Writing, person.name) === true) return
          newCredits[person.department]?.push(person)
          setCredits(newCredits)
        })
        movieCredits.crew.forEach(person => {
          if (person.department !== 'Directing' || person.job !== 'Director') return
          if (newCredits.Directing.length >= 3) return
          if (isAlreadyIncluded(newCredits.Directing, person.name) === true) return
          newCredits[person.department]?.push(person)
          setCredits(newCredits)
        })
      })
  }, [id, langToUse])

  const isAlreadyIncluded = (array, nameToCompare) => {
    let included = false
    array.forEach((item) => {
      item.name === nameToCompare ? included = true : included = false
    })
    return included
  }

  return { Acting: credits.Acting, Writing: credits.Writing, Directing: credits.Directing }
}
