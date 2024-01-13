import React, { createContext, useState } from 'react'

export const MovieIndexContext = createContext()

export function MovieIndexProvider ({ children }) {
  const [movieIndex, setMovieIndex] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <MovieIndexContext.Provider value={{ movieIndex, setMovieIndex, isClicked, setIsClicked }}>
      {children}
    </MovieIndexContext.Provider>
  )
}
