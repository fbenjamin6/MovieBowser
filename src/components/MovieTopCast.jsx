import React from 'react'
import undefinedProfile from '../assets/undefinedProfile.png'

export function MovieTopCast ({ Acting }) {
  return (
    <section className=' px-16 mb-28 mt-20'>
      <h2 className='text-2xl mb-6'>Cast</h2>
      <div className='MovieTopCast gap-8 w-full  '>
        {Acting?.map((star, index) => {
          return (
            <article key={index} className='flex p-6 items-center gap-6 bg-gray-900 rounded-md'>
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
