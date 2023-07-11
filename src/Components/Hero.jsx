import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='relative max-h-[500px]'>
        <div className='absolute text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-200 w-full h-full px-4 max-h-[500px] bg-black/40 flex flex-col justify-center font-bold'>
            <h1>The<span className='text-orange-500 ml-2'>Best</span></h1>
            <h1><span className='text-orange-500 mr-2'>Foods</span>Delivered</h1>
        </div>
        <img className='max-h-[500px] w-full object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
      </div>
    </div>
  )
}

export default Hero
