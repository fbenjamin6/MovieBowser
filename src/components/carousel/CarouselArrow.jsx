import React from 'react'
import Image from 'next/image'

export function CarouselArrow ({ direction, isFirst, isScrollNeeded, handleSlide }) {
  const imgSrc = direction === 'prev' ? '/ui/carouselLeft.svg' : '/ui/carouselRight.svg'
  const classes = direction === 'prev'
    ? `md:-left-[60px] rounded-r-lg  ${isFirst ? 'opacity-0 md:opacity-0 md:group-hover:opacity-0 pointer-events-none' : 'opacity-100 md:group-hover:opacity-100 cursor-pointer'}`
    : `right-0 md:-right-[60px] rounded-l-lg ${isScrollNeeded ? 'opacity-100 md:group-hover:opacity-100 cursor-pointer ' : 'opacity-0 md:opacity-0 md:group-hover:opacity-0 pointer-events-none '} `

  return (
    <button className={'absolute max-md:-translate-y-1/2 max-md:top-2/4 p-1 lg:p-2 z-30 bg-slate-950/60 md:bg-gray-900/50 h-1/4 md:h-full flex items-center transition-all md:grayscale md:hover:grayscale-0  md:opacity-0 ' + classes} onClick={() => handleSlide(direction)}>
      <Image className='max-sm:w-6 max-md:w-8' src={imgSrc} width={45} height={100} alt="" />
    </button>
  )
}
