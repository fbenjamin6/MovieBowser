import { React, createContext, useState } from 'react'

const languageContext = createContext()

export function languageContextProvider ({ children }) {
  const [language, setLanguage] = useState(() => {
    const langFromLocalStorage = window.localStorage.getItem('lang')
    return langFromLocalStorage || 'EN'
  })

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  )
}
