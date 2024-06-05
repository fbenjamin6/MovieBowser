import React from 'react'
import Image from 'next/image'

export function Accordion ({ isEnabled, title, handleAccordion, children, height }) {
  return (
    <div className={`${isEnabled ? 'border-cyan-900/70 bg-slate-900/80' : 'border-transparent'} transition-all border-y px-4`}>
      <button onClick={() => handleAccordion()} className={`${isEnabled ? 'text-cyan-400' : 'text-white'} transition-colors flex justify-between items-center w-full text-lg`}>
        {title}
        <Image width={20} height={20} src='/ui/chevronRight.png' className={`${isEnabled ? 'rotate-90 ' : '-rotate-90 grayscale'} transition-all`}/>
      </button>
      <ul className={`${isEnabled ? `h-[${height}px] mt-1.5` : 'h-0'} overflow-hidden transition-all duration-500 flex flex-col gap-2 pl-7`}>
        {children}
      </ul>
    </div>
  )
}

// grid grid-cols-2 gap-y-3 gap-x-8 PARA GENEROS
