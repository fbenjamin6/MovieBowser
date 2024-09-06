import React, { Children } from 'react'
import { ChevronDownIcon } from './Icons'

export function Accordion ({ isEnabled, title, handleAccordion, children }) {
  const numberOfChildren = Children.count(children)
  const height = numberOfChildren > 8 ? (numberOfChildren * (21 + 8) + 6) / 1.6 : numberOfChildren * (21 + 8) + 6

  const gridOrFlex = numberOfChildren > 8 ? 'grid grid-cols-2 gap-y-2 gap-x-4 place-content-start' : 'flex flex-col gap-2'

  return (
    <div className={`${isEnabled ? 'border-cyan-900/70 bg-slate-900/80' : 'border-transparent'} transition-all border-y px-4`}>
      <button onClick={() => handleAccordion()} className={`${isEnabled ? 'text-cyan-400' : 'text-white'} transition-colors flex justify-between items-center w-full text-lg`}>
        {title}
        <ChevronDownIcon isEnabled={isEnabled}/>
      </button>
      <ul className={`${isEnabled ? 'mt-1.5' : ''} ${gridOrFlex} overflow-hidden transition-all duration-500  pl-7`} style={{ height: isEnabled ? height : '0px' }}>
        {children}
      </ul>
    </div>
  )
}
