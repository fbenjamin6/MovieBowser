import React from 'react'
import carouselLeft from '../assets/carouselLeft.svg'
import carouselRight from '../assets/carouselRight.svg'

export function CarouselArrow ({ direction, isFirst, isScrollNeeded, handleSlide }) {
  const imgSrc = direction === 'prev' ? carouselLeft : carouselRight
  const classes = direction === 'prev'
    ? `-left-[70px] ${isFirst ? 'opacity-0 lg:opacity-0 lg:group-hover:opacity-0 pointer-events-none' : 'opacity-100 lg:group-hover:opacity-100 cursor-pointer'}`
    : `-right-[60px] ${isScrollNeeded ? 'opacity-100 lg:group-hover:opacity-100 cursor-pointer ' : 'opacity-0 lg:opacity-0 lg:group-hover:opacity-0 pointer-events-none '} `

  return (
    <button className={'absolute p-2 bg-gray-900 bg-opacity-70 rounded-lg h-full flex items-center transition-all lg:grayscale lg:hover:grayscale-0  lg:opacity-0 ' + classes} onClick={() => handleSlide(direction)}>
      <img src={imgSrc} alt="" />
    </button>
  )
}
