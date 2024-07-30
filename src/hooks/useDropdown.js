import { useState } from 'react'

export function useDropdown () {
  const [isOpen, setIsOpen] = useState(false)

  function blurHandler (e) {
    if (e.relatedTarget && e.relatedTarget?.ariaLabel !== e.target.ariaLabel) return
    setIsOpen(false)
  }
  function openHandler () {
    setIsOpen(!isOpen)
  }

  return { isOpen, blurHandler, openHandler }
}
