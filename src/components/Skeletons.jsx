import React from 'react'

const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-800/30 before:to-transparent'
const carouselClasses =
  `w-[calc((100%-2*0.6rem)/2)]
   sm:w-[calc((100%-3*0.6rem)/3)]
   md:w-[calc((100%-3*0.6rem)/3)]
   lg:w-[calc((100%-5*0.6rem)/5)]
   xl:w-[calc((100%-6*0.6rem)/6)]`

export function MediaCardSkeleton ({ classes }) {
  return (
    <div className={`${shimmer} ${classes} bg-gray-900/80 flex flex-col justify-end relative  overflow-hidden py-1.5 px-3 basis-auto grow-0 shrink-0 aspect-[2/3]
      `}
    >
      <div className='w-full h-5 bg-gray-950/80 rounded-md mb-3'></div>
      <div className='flex justify-between mt-1 mb-2'>
        <div className='w-2/5 h-5 bg-gray-950/80 rounded-md'></div>
        <div className='w-1/4 h-5 bg-gray-950/80 rounded-md'></div>
      </div>
    </div>
  )
}

// 900/80  800/40 x3 asi estaba antes

export async function CarouselOfMediaSkeleton () {
  return (
    <div className='w-full gap-[0.7rem] flex '>
      <MediaCardSkeleton classes={`${carouselClasses}`}/>
      <MediaCardSkeleton classes={`${carouselClasses} `}/>
      <MediaCardSkeleton classes={`${carouselClasses} max-sm:hidden`}/>
      <MediaCardSkeleton classes={`${carouselClasses} max-lg:hidden`}/>
      <MediaCardSkeleton classes={`${carouselClasses} max-lg:hidden`}/>
      <MediaCardSkeleton classes={`${carouselClasses} max-xl:hidden`}/>
      <MediaCardSkeleton classes={`${carouselClasses} max-2xl:hidden`}/>
    </div>
  )
}

export async function HeroSkeleton () {
  return (
    <div className='relative max-w-full h-[600px] md:h-[800px] bg-gray-950/10 overflow-hidden'>
      <div className='max-[1600px]:right-16 right-[calc((100vw-1600px)/2+56px)] absolute z-20 top-2/4 -translate-y-1/2 hidden md:flex flex-col gap-1 w-15 bg-gray-950/80 rounded items-center px-2 py-2 w-[46px]'>
        <div className='w-[20px] h-[24px] bg-gray-900/80 rounded'></div>
        <div className='w-[20px] h-[24px] bg-gray-900/80 rounded'></div>
        <div className='w-[20px] h-[24px] bg-gray-900/80 rounded'></div>
        <div className='w-[20px] h-[24px] bg-gray-900/80 rounded'></div>
        <div className='w-[20px] h-[24px] bg-gray-900/80 rounded'></div>
      </div>
      <div className='flex h-full w-full items-center justify-center'>
        <div className={`${shimmer}  w-[1600px] h-full z-10 flex items-center md:px-16 bg-gray-900/80`}>
          <div className='flex flex-col max-md:mt-auto  max-w-max max-md:min-w-full gap-1 md:gap-4 md:w-96 px-4 md:px-6 py-6 md:rounded-lg bg-gray-950/70 z-20'>

            <div className=' h-10 md:h-12 w-80 bg-gray-900/80 rounded'></div>
            <div className='flex gap-3 items-end'>
              <div className='w-[26px] h-[22px] md:h-[26px] bg-gray-900/80 rounded'></div>
              <div className='w-[55px] h-[20px] md:h-[24px] bg-gray-900/80 rounded'></div>
            </div>
            <div className='w-full h-[100px] md:h-[160px] bg-gray-900/80 rounded'></div>
            <div className='w-[166px] md:w-[178px] h-[34px] md:h-[38px] bg-gray-900/80 rounded' ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
// {`${shimmer} relative overflow-hidden`}
export async function MediaInfoSkeleton () {
  return (
    <div className='pt-16 px-4 md:px-16 mb-6 relative max-w-[1600px] m-auto '>
      <div className='w-full grid grid-cols-[40%_60%] lg:grid-cols-[auto_6fr] gap-x-3 lg:gap-x-8 grid-rows-[auto_6fr] pt-4'>
      {/* article */}
        <div className={`${shimmer} relative w-[400px] aspect-[2/3] bg-gray-900/80 max-w-full row-span-2 overflow-hidden`} ></div>

        {/* header */}
        <div className='flex flex-col xl:flex-row justify-between items-start lg:mt-1 mb-1 max-lg:flex-col gap-3'>
          <div>
            <div className={`${shimmer} relative overflow-hidden h-10 w-[50vw] md:w-96 bg-gray-900/80 rounded mb-2`}></div>
            {/* title */}
            <div>
              <div className={`${shimmer} relative overflow-hidden inline-block h-5 w-9 bg-gray-900/80 rounded`}></div>
              {/* year */}
              <div className=' inline-block mx-4'></div>
              <div className={`${shimmer} relative overflow-hidden  inline-block h-5 w-9 bg-gray-900/80 rounded`}></div>
              {/* duration */}
            </div>
          </div>
          <div className='flex items-center gap-2 shrink-0 max-xl:w-full '>
            <div className={`${shimmer} rounded-full  bg-gray-900/80 w-[40px] md:w-[50px] h-[40px] md:h-[50px] mr-4 max-xl:order-2 max-xl:ml-auto`}/>
            <div className={`${shimmer} relative overflow-hidden w-[28px] md:w-[38px] h-[28px] md:h-[38px] rounded-full bg-gray-900/80`}/>
            {/* star icon */}
            <div>
              <div className={`${shimmer} relative overflow-hidden w-[58px] h-[25px] mb-1 rounded bg-gray-900/80`}> </div>
              <div className={`${shimmer} relative overflow-hidden w-[28px] h-[17px] rounded bg-gray-900/80`}></div>
            </div>
          </div>
        </div>
        {/* fin de header */}

        <div className='flex flex-col gap-5 md:gap-7 mt-3 md:mt-6 max-lg:col-span-full '>
          <div className={`${shimmer} relative overflow-hidden w-[90vw] md:w-full h-28 bg-gray-900/80 rounded`}></div>
          {/* overview */}
          <div className='flex gap-3'>
          {/* genres */}
            <div className={`${shimmer} relative overflow-hidden h-[30px] md:h-[34px] w-24 rounded-3xl bg-gray-900/80`}></div>
            <div className={`${shimmer} relative overflow-hidden h-[30px] md:h-[34px] w-24 rounded-3xl bg-gray-900/80`}></div>
            <div className={`${shimmer} relative overflow-hidden h-[30px] md:h-[34px] w-24 rounded-3xl bg-gray-900/80`}></div>
          </div>
          {/* director */}
          <div className={`${shimmer} relative overflow-hidden h-[20px] md:h-[24px] w-[200px] bg-gray-900/80 rounded`}></div>
          {/* guion */}
          <div className={`${shimmer} relative overflow-hidden h-[20px] md:h-[24px] w-[65vw] md:w-[380px] bg-gray-900/80 rounded`}></div>
          {/* actores */}
          <div className={`${shimmer} relative overflow-hidden h-[20px] md:h-[24px] w-[69vw] md:w-[400px] bg-gray-900/80 rounded`}></div>
          {/* buttonwatchtrailer */}
          <div className={`${shimmer} relative overflow-hidden h-[34px] md:h-[38px] w-[177px] bg-gray-900/80 rounded-3xl`}></div>
        </div>
      </div>
    </div>)
}

export async function MediaVideoSkeleton ({ classes }) {
  return (
    <div className={`${classes} ${shimmer} overflow-hidden w-[calc((100%-1*0.7rem)/1)] sm:w-[calc((100%-2*0.7rem)/2)] lg:w-[calc((100%-3*0.7rem)/3)] 2xl:w-[calc((100%-4*0.7rem)/4)]
    flex relative basis-auto grow-0 shrink-0 aspect-[5/3] bg-gray-900/80 rounded p-2`}>
      <div className='absolute self-end z-10 p-1 bg-gray-950/80 rounded h-7 w-52 '></div>
    </div>
  )
}

export async function CarouselOfVideosSkeleton () {
  return (
    <div className='w-full gap-[0.7rem] flex '>
      <MediaVideoSkeleton />
      <MediaVideoSkeleton classes={'max-sm:hidden'}/>
      <MediaVideoSkeleton classes={'max-lg:hidden'}/>
      <MediaVideoSkeleton classes={'max-2xl:hidden'}/>
    </div>
  )
}

export async function CastCardSkeleton () {
  return (
    <div className={`${shimmer} relative overflow-hidden flex p-2 sm:p-6 items-center gap-3 sm:gap-6 bg-gray-900/80 rounded-md`}>

      <div className=' w-[50px] sm:w-[100px] aspect-[2/3] bg-gray-800/40'></div>
      <div>
        <div className='h-[22px] w-[80px] sm:w-[135px] rounded bg-gray-800/40 mb-2'></div>
        <div className='h-[22px] w-[80px] sm:w-[135px] rounded bg-gray-800/40'></div>
      </div>
    </div>
  )
}

export async function MediaTopCastSkeleton () {
  return (
    <div className='MovieTopCast gap-3 sm:gap-8 w-full  '>
      <CastCardSkeleton/>
      <CastCardSkeleton/>
      <CastCardSkeleton/>
      <CastCardSkeleton/>
      <CastCardSkeleton/>
      <CastCardSkeleton/>
      <CastCardSkeleton/>
      <CastCardSkeleton/>
      <CastCardSkeleton/>
      <CastCardSkeleton/>
      <CastCardSkeleton/>
      <CastCardSkeleton/>
    </div>
  )
}

export function SearchMediaSkeleton () {
  return (
    <div className='GroupOfMovies gap-2 sm:gap-4 md:gap-5 pt-5 sm:pt-7 md:pt-12 px-4 md:px-16 max-w-[1600px] m-auto mb-24 md:mb-36'>
      <MediaCardSkeleton/>
      <MediaCardSkeleton/>
      <MediaCardSkeleton/>
      <MediaCardSkeleton/>
      <MediaCardSkeleton/>
      <MediaCardSkeleton/>

      <MediaCardSkeleton/>
      <MediaCardSkeleton/>
      <MediaCardSkeleton/>
      <MediaCardSkeleton/>
      <MediaCardSkeleton/>
      <MediaCardSkeleton/>
    </div>
  )
}
