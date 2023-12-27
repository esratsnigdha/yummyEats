import React from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose,AiFillTag} from 'react-icons/ai'

const TopNav = () => {
  return (
    <div className='max-w-[1620px] mx-auto flex justify-between items-center p-3'>
          <div className='flex items-center'>
            <div className='cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                yummy
                <span>Eats</span>
              </h1>
              <div className='hidden lg:flex items-center whitespace-nowrap bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-orange-700 text-white rounded-full p-2 text-bold'>Free</p>
                <p className='p-2 text-bold'>Delivery</p> 
              </div>
            </div>
          <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25}/>
                <input className='bg-transparent p-2 w-full focus:outline-none '
                  type='text'
                  placeholder='search meal'
                />
              </div>
              <button className='bg-orange-700 text-white hidden rounded-full md:flex items-center p-2 '>
                Cart
                </button>
    </div>
  )
}

export default TopNav