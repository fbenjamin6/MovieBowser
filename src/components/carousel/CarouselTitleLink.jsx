import React from 'react'
import Link from 'next/link'

export function CarouselTitleLink ({ href, children }) {
  return (
    <Link href={href}
    className={`RowOfMovies relative text-xl sm:text-2xl md:text-3xl inline-block mb-4 md:mb-5
    before:content-chevronRight before:grayscale before:hover:grayscale-0 before:transition-all before:duration-500 before:absolute before:-right-11 before:scale-[0.65] sm:before:scale-75 lg:before:scale-90 before:-top-2.5 sm:before:-top-2 lg:before:-top-1 before:hover:-right-12`}>
        {children}
      <div className='RowOfMovies-border mt-0.5 lg:mt-1 w-1/3 h-[3.5px] bg-cyan-500 rounded transition-all duration-500'></div>
    </Link>
  )
}
