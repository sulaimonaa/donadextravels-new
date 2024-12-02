import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/dtr-logo.png'

const Navigation1 = () => {
  return (
    <div className='w-full py-4'>
        <div className='w-11/12 mx-auto flex justify-between items-center'>
            <div>
              <NavLink to='/'>
              <img src={Logo} alt='logo' className='w-32 lg:w-48' />
              </NavLink></div>
            <div className='flex items-center gap-2'>
                <NavLink to='../' className={({ isActive }) => isActive ? 'bg-gray-200 font-bold py-2 px-6 rounded-full' : 'text-gray-700 text-xs md:text-sm'}>Flight</NavLink>
                <NavLink to='../hotel' className={({ isActive }) => isActive ? 'bg-gray-200 font-bold py-2 px-6 rounded-full' : 'text-gray-700 text-xs md:text-sm'}>Hotel</NavLink>
                <NavLink to='../visa' className={({ isActive }) => isActive ? 'bg-gray-200 font-bold py-2 px-6 rounded-full' : 'text-gray-700 text-xs md:text-sm'}>Visa</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navigation1