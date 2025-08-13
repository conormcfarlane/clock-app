import React from 'react'
import iconArrowDown from "../assets/images/desktop/icon-arrow-down.svg"
import iconArrowUp from "../assets/images/desktop/icon-arrow-up.svg"
export default function Button({isMenuOpen,MenuToggle}) {
  return (
    <button className='flex items-center bg-white p-2 pl-5 rounded-full justify-between gap-3 w-35'>
      <p className='font-semibold text-black'>{!isMenuOpen ? "M O R E" : "L E S S"}</p>
      <div className=' rounded-full flex items-center justify-center '>
        <img src={iconArrowUp} alt="menu toggle button" onClick={MenuToggle} className={`w-10 h-10 ${!isMenuOpen ? "rotate-180" : "rotate-0"}`} />
      </div>
      
    </button>
  ) 
}
