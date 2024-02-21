import React from 'react'
import {BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify} from 'react-icons/bs'

function Header({opensidebar}) {
  return (
    <header className='header'>
<div className='menu-icon'>
    <BsJustify className='icon' onClick={opensidebar}/>
    </div>


    </header>
    
  )
}

export default Header