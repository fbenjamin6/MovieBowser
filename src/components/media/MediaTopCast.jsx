import React from 'react'
import { searchCredits } from '../../services/searchCredits'

export async function MediaTopCast ({ id, lang, mediaType }) {
  const { Acting } = await searchCredits({ id, lang, mediaType })
  return (
    <div className='MovieTopCast gap-8 w-full  '>
      {Acting?.map((star, index) => {
        return (
          <article key={index} className='flex p-6 items-center gap-6 bg-gray-900 rounded-md'>
            <img src={star.profile_path ? `https://image.tmdb.org/t/p/original${star.profile_path}` : '/ui/undefinedProfile.png'} alt="" className='w-[100px] aspect-[2/3] rounded-sm'/>
            <div>
              <h3 className='font-semibold'>{star.name}</h3>
              <span className='text-gray-400'>{star.character}</span>
            </div>
          </article>
        )
      })}
    </div>

  )
}
