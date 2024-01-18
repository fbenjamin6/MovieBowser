import React from 'react'
import undefinedProfile from '../assets/undefinedProfile.png'

export function TopCast ({ Acting }) {
  return (
    <section className=' px-12 mb-28 mt-20'>
      <h2 className='text-2xl mb-6'>Cast</h2>
      <div className='flex flex-wrap gap-4 justify-between w-full rounded-md bg-gray-900'>
        {Acting?.map((star, index) => {
          return (
            <article key={index} className='flex w-1/4 p-6 items-center gap-6 '>
              <img src={star.profile_path ? `https://image.tmdb.org/t/p/original${star.profile_path}` : undefinedProfile} alt="" className='w-[100px] rounded-sm'/>
              <div>
                <h3 className='font-semibold'>{star.name}</h3>
                <span className='text-gray-400'>{star.character}</span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
