import { useContext, useEffect, useRef, useState } from 'react'
import { VideoModalContext } from '../context/videoModalContext'

export function useVideoModal () {
  const { videoModal, setVideoModal } = useContext(VideoModalContext)
  const [opacity, setOpacity] = useState('opacity-0')
  const [display, setDisplay] = useState('hidden')
  const timeoutRef = useRef(0)

  const changeVideoModal = ({ key }) => {
    setVideoModal(key)
  }

  useEffect(() => {
    if (videoModal) {
      setDisplay('block')
      timeoutRef.current = setTimeout(() => {
        setOpacity('opacity-100')
      }, 50)
      return
    }

    setOpacity('opacity-0')
    timeoutRef.current = setTimeout(() => {
      setDisplay('hidden')
    }, 300)

    return () => { clearTimeout(timeoutRef.current) }
  }, [videoModal])

  return { changeVideoModal, videoModal, setVideoModal, opacity, display }
}

// timeoutRef.current = setTimeout(() => {
//   console.log({ opacity })
//   setOpacity(prevOpacity => prevOpacity === 0 ? 100 : 0)
// }, 100)

// return () => {
//   clearTimeout(timeoutRef.current)
// }
