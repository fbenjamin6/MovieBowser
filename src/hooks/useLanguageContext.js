import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext'

export function useLanguageContext () {
  const { language, setLanguage } = useContext(LanguageContext)
  const langToUse = language === 'EN' ? 'en-US' : 'es-AR'
  const isEN = language === 'EN'
  return { language, setLanguage, langToUse, isEN }
}
