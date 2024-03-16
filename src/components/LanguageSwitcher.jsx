import React from 'react'
import EN from '../assets/EN.png'
import ES from '../assets/ES.png'

export function LanguageSwitcher () {
  return (
    <>
      <select className='w-28'>
        <option style={{ backgroundImage: `url(${EN})` }} value="EN">EN <img src={EN} alt="" /></option>
        <option value="ES">ES <img src={ES} alt="" /></option>
      </select>
    </>
  )
}
