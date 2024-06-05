import React from 'react'

export const dynamicParams = false

export async function generateStaticParams () {
  return [{ mediaType: 'movie' }, { mediaType: 'tv' }]
}

export default async function MediaTypeLayout ({ children }) {
  return (
    <>
      {children}
    </>
  )
}
