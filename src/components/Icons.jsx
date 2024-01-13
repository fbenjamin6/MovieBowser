import React from 'react'
import star from '../assets/star2.png'

export function StarRateIcon ({ classes }) {
  const className = `w-[22px] inline ${classes}`
  return (
    <img src={star} alt='' className={className}></img>
  )
}
