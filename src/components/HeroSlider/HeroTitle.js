import React from 'react'

const HeroTitle = ({title}) => {
  return (
    <div 
      className='w-100 bg-blue-900 justify-center flex items-center text-2xl h-[100px]'><h2 className='text-white font-bold'>{title}</h2></div>
  )
}

export default HeroTitle