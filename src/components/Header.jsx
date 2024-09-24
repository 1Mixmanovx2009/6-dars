import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-blue-500 py-5 '>
      <div className='container mx-auto px-5 flex justify-center items-center gap-10'>
        <NavLink className={'text-[25px] text-white font-bold'} to={'/'}>Home</NavLink>
        <NavLink className={'text-[25px] text-white font-bold'} to={'/cars'}>Cars</NavLink>
        <NavLink className={'text-[25px] text-white font-bold'} to={'/users'}>Users</NavLink>
      </div>
    </header>
  )
}

export default Header