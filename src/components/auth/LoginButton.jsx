import React from 'react'
import Link from 'next/link'

export function LoginButton ({ lang }) {
  return (
    <Link href={`/${lang}/auth`} aria-label='menuClickable' className='bg-slate-800/30 font-semibold py-1 px-4 mb-8 rounded-full border border-slate-600 transition-all duration-400 hover:border-cyan-500'>
      Login
    </Link>
  )
}
