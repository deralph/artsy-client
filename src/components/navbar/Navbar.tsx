import React from 'react'

const Navbar:React.FC = () => {
  return (
    <nav className="flex justify-between items-center w-screen py-[1%] px-[10%]">
        <img src="/Artsy.png" alt="logo"/>
        <ul className='flex text-[#1E1E1E] font-bold w-3/5 justify-between'>
          <li className='text-2xl'> Home</li>
          <li className='text-2xl '>Marketplace</li>
          <li className='text-2xl '>Collections</li>
          <li className='text-2xl flex items-center '>My Cart <span className='ml-3 p-1 bg-[#F4F4F4] rounded-[50%] text-xs'>01</span></li>
        </ul>
      </nav>
  )
}

export default Navbar
