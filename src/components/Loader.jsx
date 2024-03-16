import React from 'react'

export function Loader () {
  return (
    <div className='flex justify-center items-center relative '>
      <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
        return (<div key={n} className='w-4 h-4 top-16 rounded-full bg-cyan-500 absolute animate-newPulse' style={{ opacity: 0, transform: `rotate(${n * (360 / 10)}deg) translateY(30px)`, animationDelay: `${n * 0.1}s` }}></div>)
      })}
      </div>
    </div>
  )
}
