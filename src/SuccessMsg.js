import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";

const SuccessMsg = ({message}) => {
  return (
    <div className="fixed inset-0 bg-gray-100 z-50 flex vw-100 vh-100 justify-center items-center" style={{ zIndex: 1000 }}>
    <div className='flex gap-3 flex-col items-center justify-center'>
    <p className='text-xl text-red-400'>{message}</p>
    <Link className='text-decoration-none text-red-400' to='/'><IoHome />Go back to home page!</Link>
    </div>
  </div>
  )
}

export default SuccessMsg