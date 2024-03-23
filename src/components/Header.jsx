import React from 'react'
import bowserIcon from '../assets/bowserIcon.png'
import { Link } from 'wouter'
import { Menu } from './Menu'

export function Header () {
  return (
    <header className='fixed w-full  bg-gray-800 bg-opacity-50 backdrop-blur z-30'>
      <nav className='m-auto flex items-center justify-between p-2  max-w-[1600px] h-16 px-12 '>
        <Link href='/' className='flex items-center w-[250px]'>
          <img className='w-12 pr-2' src={bowserIcon} alt="" />
          <h4 className=' text-xl'>Movie Bowser</h4>
        </Link>
        <Menu/>
      </nav>
    </header>
  )
}
