'use client'
import { useEffect, useRef, useState } from 'react'

export function useCarousel ({ type }) {
  const [itemsToShow, setItemsToShow] = useState()
  const [isFirst, setIsFirst] = useState(true)
  const [isScrollNeeded, setIsScrollNeeded] = useState(true)
  const carouselRef = useRef()

  useEffect(() => {
    calculateItemsToShow(window.innerWidth)

    const handleResize = () => {
      calculateItemsToShow(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    handleScrollNeeded()
  }, [itemsToShow])

  function calculateItemsToShow (screenWidth) {
    if (screenWidth > 1536) return setItemsToShow(type === 'movie' ? 7 : 4)
    if (screenWidth > 1280) return setItemsToShow(type === 'movie' ? 6 : 3)
    if (screenWidth > 1024) return setItemsToShow(type === 'movie' ? 5 : 3)
    if (screenWidth > 768) return setItemsToShow(type === 'movie' ? 3 : 2)
    else return setItemsToShow(type === 'movie' ? 2 : 1)
  }

  function handleScrollNeeded () {
    if (!carouselRef.current) return
    const carousel = carouselRef.current
    const itemWidth = carousel.firstElementChild?.clientWidth || 0

    if (itemWidth * carousel.childElementCount < carousel.clientWidth) setIsScrollNeeded(false)
    else setIsScrollNeeded(true)
  }

  function handleSlide (direction) {
    const carousel = carouselRef.current
    const isAtTheEnd = carousel.scrollLeft + carousel.offsetWidth === carousel.scrollWidth
    const itemWidth = carousel.firstElementChild?.clientWidth || 0

    if (direction === 'next') {
      isAtTheEnd ? carousel.scrollLeft = 0 : carousel.scrollLeft += (itemWidth * itemsToShow)
      isAtTheEnd ? setIsFirst(true) : setIsFirst(false)
    }

    if (direction === 'prev') {
      carousel.scrollLeft -= (itemWidth * itemsToShow)
      carousel.scrollLeft - (itemWidth * itemsToShow) < 100 ? setIsFirst(true) : setIsFirst(false)
    }
  }

  return { carouselRef, itemsToShow, isFirst, handleSlide, isScrollNeeded, handleScrollNeeded }
}
