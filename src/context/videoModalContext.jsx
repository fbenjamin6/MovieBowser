import React, { createContext, useState } from 'react'

export const VideoModalContext = createContext()

export function VideoModalContextProvider ({ children }) {
  const [videoModal, setVideoModal] = useState()

  return (
    <VideoModalContext.Provider value={{ videoModal, setVideoModal }}>
      {children}
    </VideoModalContext.Provider>
  )
}
