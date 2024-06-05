import React from 'react'
import Link from 'next/link'

export function CarouselTitleLink ({ href, children }) {
  return (
    <Link href={href}
    className={`RowOfMovies relative text-3xl inline-block mb-7
    before:content-chevronRight before:grayscale before:hover:grayscale-0 before:transition-all before:duration-500 before:absolute before:-right-11 before:scale-90 before:-top-1 before:hover:-right-12`}>
        {children}
      <div className='RowOfMovies-border mt-1 w-1/3 h-[4px] bg-cyan-500 rounded transition-all duration-500'></div>
    </Link>
  )
}
