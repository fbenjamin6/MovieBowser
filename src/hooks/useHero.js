import { useRef, useEffect, useContext, useState } from 'react'
import { MovieIndexContext } from '../context/movieIndex'

export function useHero (index) {
  const { movieIndex, setMovieIndex, isClicked, setIsClicked } = useContext(MovieIndexContext)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const intervalRef = useRef(0)

  useEffect(() => {
    if (movieIndex !== index) return
    const time = isClicked ? 25000 / 17 : 6000 / 17
    const currentInterval = setInterval(() => {
      setLoadingProgress((prevNum) => {
        if (prevNum < 16) {
          const newProgress = prevNum += 1
          return newProgress
        }
      })
    }, (time))
    intervalRef.current = currentInterval
    return () => {
      clearInterval(intervalRef.current)
      setLoadingProgress(0)
    }
  }, [movieIndex])

  useEffect(() => {
    if (loadingProgress < 16) return
    setMovieIndex(prevIndex => {
      if (prevIndex === 4) return 0
      const newIndex = prevIndex += 1
      return newIndex
    })
    if (isClicked) setIsClicked(false)
  }, [loadingProgress])

  const handleClick = (index) => {
    setIsClicked(true)
    setMovieIndex(index)
  }

  return { movieIndex, isClicked, handleClick, loadingProgress }
}
