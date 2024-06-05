'use client'
import React from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export function SearchPageBrowser ({ mediaType }) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  const handleQuery = useDebouncedCallback(({ newQuery }) => {
    if (newQuery.length < 1) return
    const newParams = new URLSearchParams()
    newParams.set('query', newQuery)
    router.replace(`${pathname}?${newParams}`)
  }, 300)

  return (
    <>
      <input type="text" defaultValue={query}
      className='bg-slate-800/60 focus:bg-slate-800/80 transition-colors duration-400 w-2/3 border border-slate-700 focus:border-cyan-700 outline-none rounded-lg p-2 text-xl'
      onChange={(e) => handleQuery({ newQuery: e.target.value })} placeholder={`Search for ${mediaType === 'movie' ? 'movies' : 'TV shows'}...`} />
    </>
  )
}
