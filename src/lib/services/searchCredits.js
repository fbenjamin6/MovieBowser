import { API_OPTIONS, LANGS } from '../utils/constants'

export async function searchCredits ({ id, lang, mediaType }) {
  if (id === undefined) return
  const isAlreadyIncluded = (array, nameToCompare) => {
    let included = false
    array.forEach((item) => {
      item.name === nameToCompare ? included = true : included = false
    })
    return included
  }
  return fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/credits?language=${LANGS[lang]}`, API_OPTIONS)
    .then(response => response.json())
    .then(movieCredits => {
      const newCredits = {
        Acting: [],
        Writing: [],
        Directing: []
      }
      movieCredits.cast.forEach((person) => {
        if (newCredits.Acting?.length >= 12) return
        newCredits[person.known_for_department]?.push(person)
      })
      movieCredits.crew.forEach(person => {
        if (person.department !== 'Writing') return
        if (newCredits.Writing?.length >= 3) return
        if (isAlreadyIncluded(newCredits.Writing, person.name) === true) return
        newCredits[person.department]?.push(person)
      })
      movieCredits.crew.forEach(person => {
        if (person.department !== 'Directing' || person.job !== 'Director') return
        if (newCredits.Directing?.length >= 3) return
        if (isAlreadyIncluded(newCredits.Directing, person.name) === true) return
        newCredits[person.department]?.push(person)
      })

      return { Acting: newCredits.Acting, Writing: newCredits.Writing, Directing: newCredits.Directing }
    })
    .catch(err => console.error(err))
}
