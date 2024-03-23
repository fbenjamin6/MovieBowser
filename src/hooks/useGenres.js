import { useLanguageContext } from './useLanguageContext'
import { searchGenres } from '../services/searchGenres'
import { useEffect, useState } from 'react'

export function useGenres () {
  const { langToUse } = useLanguageContext()
  const [genres, setGenres] = useState([])

  const getGenres = async () => {
    const newGenres = await searchGenres({ lang: langToUse })
    setGenres(newGenres)
  }

  useEffect(() => {
    getGenres()
  }, [langToUse])

  return { genres }
}
