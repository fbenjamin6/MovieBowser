import React from 'react'
import { getDictionary } from '@/lib/dictionaries/dictionary'
import Link from 'next/link'
import Image from 'next/image'

export async function Footer ({ lang }) {
  const { footer } = await getDictionary(lang)
  return (
    <footer className="w-full z-10 relative place-self-end  bg-gradient-to-b from-cyan-500/10  to-gray-950 border-t border-t-cyan-500/20 pb-1 ">
      <div className='max-w-[95%] md:max-w-[90%] xl:max-w-[1100px] m-auto  md:px-16 py-12 flex lg:gap-28 justify-around lg:justify-center  border-b border-gray-700/70'>
        <div>
          <h3 className='font-medium mb-1'>{footer.creator}</h3>
          <ul className='flex flex-col gap-1'>
          <li className='text-gray-400 hover:text-cyan-500 transition-colors group'>
              <Link target='_blank' href={'https://www.linkedin.com/in/federicobenjamin/'} className='flex gap-1 items-center'>
                <Image src={'/ui/linkedinIcon.png'} alt='Linkedin icon' width={20} height={20} className='transition-all grayscale group-hover:grayscale-0'/>
                <span>Linkedin</span>
              </Link>
            </li>
            <li className='text-gray-400 hover:text-cyan-500 transition-colors group'>
              <Link target='_blank' href={'https://github.com/fbenjamin6'} className='flex gap-1 items-center'>
                <Image src={'/ui/gitHubIcon.png'} alt='GitHub icon' width={20} height={20} className='transition-all grayscale group-hover:grayscale-0'/>
                <span>GitHub</span>
              </Link>
            </li>
            <li className='text-gray-400 hover:text-cyan-500 transition-colors group'>
              <Link target='_blank' href={'https://www.federicobenjamin.com/'} className='flex gap-1 items-center'>
                <Image src={'/ui/portfolioIcon.png'} alt='Portfolio icon' width={20} height={20} className='transition-all grayscale group-hover:grayscale-0'/>
                <span>Portfolio</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-medium mb-1'>MOVIE BOWSER</h3>
          <ul className='flex flex-col gap-1'>
            <li className='text-gray-400 hover:text-cyan-500 transition-colors'>
              <Link href={`/${lang}/`}>
                {footer.home}
              </Link>
            </li>
            <li className='text-gray-400 hover:text-cyan-500 transition-colors'>
              <Link href={`/${lang}/movie/search?genre=28`}>
                {footer.genres}
              </Link>
            </li><li className='text-gray-400 hover:text-cyan-500 transition-colors'>
              <Link href={`/${lang}/favorites`}>
               {footer.favorites}
              </Link>
            </li>
          </ul>
        </div>

        <div className=' max-md:hidden'>
          <h3 className='font-medium mb-1'>{footer.movies}</h3>
          <ul className='flex flex-col gap-1'>
            <li className='text-gray-400 hover:text-cyan-500 transition-colors'>
              <Link href={`/${lang}/movie/list?type=popular`}>
                {footer.popular}
              </Link>
            </li>
            <li className='text-gray-400 hover:text-cyan-500 transition-colors'>
              <Link href={`/${lang}/movie/list?type=trending`}>
                {footer.trending}
              </Link>
            </li>
            <li className='text-gray-400 hover:text-cyan-500 transition-colors'>
              <Link href={`/${lang}/movie/list?type=top_rated`}>
                {footer.top_rated}
              </Link>
            </li>
          </ul>
        </div>

        <div className=' max-md:hidden'>
          <h3 className='font-medium mb-1'>{footer.tv}</h3>
          <ul className='flex flex-col gap-0.5'>
            <li className='text-gray-400 hover:text-cyan-500 transition-colors'>
              <Link href={`/${lang}/tv/list?type=popular`}>
                {footer.popular}
              </Link>
            </li>
            <li className='text-gray-400 hover:text-cyan-500 transition-colors'>
              <Link href={`/${lang}/tv/list?type=trending`}>
                {footer.trending}
              </Link>
            </li>
            <li className='text-gray-400 hover:text-cyan-500 transition-colors'>
              <Link href={`/${lang}/tv/list?type=top_rated`}>
                {footer.top_rated}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h5 className='text-gray-700 py-3 w-full text-center'>Creado por Federico Benjamín |  © 2024</h5>
    </footer>
  )
}
