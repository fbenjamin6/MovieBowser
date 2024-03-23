import { React, createContext, useState } from 'react'

export const LanguageContext = createContext()

export function LanguageContextProvider ({ children }) {
  const [language, setLanguage] = useState(() => {
    const langFromLocalStorage = window.localStorage.getItem('lang')
    return langFromLocalStorage || 'EN'
  })

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
