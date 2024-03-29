import React, { useState } from 'react'
import EN from '../assets/EN.png'
import ES from '../assets/ES.png'
import { useLanguageContext } from '../hooks/useLanguageContext'

export function LanguageSwitcher () {
  const { language, setLanguage } = useLanguageContext()
  const [isVisible, setIsVisible] = useState(false)

  function handleClick (e) {
    setIsVisible(!isVisible)
  }

  function handleLanguage (lang) {
    setIsVisible(false)
    if (lang === language) return
    setLanguage(lang)
    window.localStorage.setItem('lang', lang)
  }

  return (
    <div className='relative font-semibold' onPointerLeave={() => setIsVisible(false)}>
      <button onClick={handleClick} className={`relative w-20 flex items-center gap-2  justify-center rounded border transition-colors duration-200 ${isVisible ? 'border-cyan-500 bg-slate-800' : 'border-white bg-slate-800/40'} text-white bg-opacity-90 py-0.5 z-50`}>{language} <img className='w-6' src={language === 'EN' ? EN : ES} alt="" /></button>
      <div className={`absolute w-full bg-slate-800 bg-opacity-90 rounded-b transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : ' opacity-0 -translate-y-2 pointer-events-none'}`}>
        <ul>
          <li onClick={() => handleLanguage('EN')} className='flex items-center justify-center gap-2 my-1 cursor-pointer'>EN <img className='w-6' src={EN} alt="" /></li>
          <li onClick={() => handleLanguage('ES')} className='flex items-center justify-center gap-2.5 my-1 cursor-pointer'>ES <img className='w-6' src={ES} alt="" /></li>
        </ul>
      </div>
    </div>
  )
}
