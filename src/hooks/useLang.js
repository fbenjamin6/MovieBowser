'use client'
import { usePathname } from 'next/navigation'

export function useLang () {
  const pathname = usePathname()
  const lang = pathname.split('/')[1]
  return lang
}
