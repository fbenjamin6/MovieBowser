import React from 'react'
import starIcon from '../assets/star2.png'
import playIcon from '../assets/playIcon.png'

export function StarRateIcon ({ classes }) {
  const className = `w-[22px] inline ${classes}`
  return (
    <img src={starIcon} alt='' className={className}></img>
  )
}

export function PlayIcon ({ classes }) {
  const className = `${classes}`
  return (
    <img src={playIcon} alt='' className={className}></img>
  )
}
