import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {

    const [nav , setNav] = useState(false)


  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>
      <div className='flex items-center'>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer '>
           <AiOutlineMenu size={30}/>
        </div>
        <h2 className=' text-2xl sm:text-3xl lg:text-4xl px-2'>
           Best <span className='font-bold'>
                   Eats
                </span>
        </h2>
        <div className='lg:flex hidden bg-gray-200 p-1 rounded-full items-center text-[14px] '>
            <p className='bg-black text-white rounded-full p-2'>
                 Delivery
            </p>
            <p className='p-2'>
              Pickup
              </p>
        </div>
      </div>
        <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px] '>
         <AiOutlineSearch size={25}/>
         <input type='text' placeholder='Search foods' className='bg-transparent w-full focus:outline-none p-2' />
        </div>
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
          <BsFillCartFill className='mr-2' size={20} />
           Cart
        </button>
        
        {/* ------------------------Mobile Menu------------------------------------ */}
        {/* ------------Overlay----------- */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> :''}
        

        {/* -------------Side drawer menu---------------- */}
        <div className={ nav ? 'fixed bg-white top-0 left-0 w-[300px] h-screen z-10 duration-300 ' : 'fixed bg-white top-0 left-[-100%] w-[300px] h-screen z-10 duration-300 '}>
            <AiOutlineClose size={30} onClick={()=>setNav(!nav)} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>
                Best <span className='font-bold'>Eats</span>
            </h2>
            <nav>
              <ul className='flex text-xl space-y-4 flex-col p-4 text-gray-800'>
                  <li className='flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                  <li className='flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                  <li className='flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                  <li className='flex'><MdHelp size={25} className='mr-4' /> Help</li>
                  <li className='flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                  <li className='flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                  <li className='flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
              </ul>
            </nav>
        </div>
        
       
    </div>
  )
}

export default Navbar
