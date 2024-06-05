import React from 'react'
import Image from 'next/image'

export function StarRateIcon ({ classes, width }) {
  const className = `w-[${width}px] inline ${classes}`
  return (
    <Image src='/ui/star.png' width={26} height={26} alt='' className={className}/>
  )
}

export function PlayIcon ({ classes }) {
  const className = `${classes}`
  return (
    <Image src='/ui/playIcon.png' alt='' className={`${className} inline w-[17px]`} width={17} height={17}
    style={{ filter: 'invert(34%) sepia(60%) saturate(1891%) hue-rotate(164deg) brightness(101%) contrast(94%)' }}/>
  )
}

export function BowserIcon ({ classes }) {
  const className = `w-11 mr-2 w ${classes}`
  return (
    <Image className={className} width={48} height={49} src='/logo/bowserLogo.png' alt="" />
  )
}

export function LoupeIcon () {
  return (
    <Image className=' max-w-[14px]' width={14} height={14} src='/ui/loupe.png' alt="" />
  )
}

export function FlagESIcon () {
  return (
    <Image className='w-6' width={24} height={16} src='/ui/FlagES.png' alt="" />
  )
}

export function FlagENIcon () {
  return (
    <Image className='w-6' width={24} height={13} src='/ui/FlagEN.png' alt="" />
  )
}

export function HamburgerIcon () {
  return (
    <Image width={30} height={30} src='/ui/hamburger.svg' alt='' />
  )
}

export function CloseIcon () {
  return (
    <Image width={25} height={25} src='/ui/close.svg' alt=''/>
  )
}

export function MovieMenuIcon ({ isEnabled }) {
  return (
    <Image className={`${isEnabled ? 'grayscale-0' : 'grayscale'} inline-block transition-colors pb-1`} width={20} height={20} src='/ui/movieMenu.png' alt=''/>
  )
}

export function TVMenuIcon ({ isEnabled }) {
  return (
    <Image className={`${isEnabled ? 'grayscale-0' : 'grayscale'} inline-block transition-colors`} width={20} height={20} src='/ui/tvMenu.png' alt=''/>
  )
}

export function GenreMenuIcon ({ isEnabled }) {
  return (
    <Image className={`${isEnabled ? 'grayscale-0' : 'grayscale'} inline-block transition-colors`} width={20} height={20} src='/ui/genreMenu.png' alt=''/>
  )
}

export function StarMenuIcon () {
  return (
    <Image width={25} height={25} src='/ui/starMenu.png' alt=''/>
  )
}
