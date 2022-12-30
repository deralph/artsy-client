import React from 'react'
import { FaBars } from "react-icons/fa";

const Home:React.FC = () => {
  return (
    <section className='home h-screen w-screen'>
      <nav className="flex justify-between items-center w-screen py-[2%] px-[10%] lg:px-[5%] sm:py-[5%]">
        <img src="/Artsy.png" alt="logo"  className='bg-white'/>
        <ul className='flex text-white font-medium w-3/5 justify-between text-2xl lg:w-[70%] md:text-base sm:hidden'>
          <li className=''> Creatives</li>
          <li className=' '>Marketplace</li>
          <li className=' '>Collections</li>
          <li className=''>Sign up</li>
        </ul>

<FaBars className='hidden sm:block text-white text-2xl'/>

      </nav>
        <article className='flex justify-center items-center h-4/5 mt-[2%] w-screen '><div className='w-3/5 text-center h-auto md:w-full md:px-8 '>

          <h2 className='font-primary font-bold text-[28px] text-white mb-[5%] md:text-2xl'>A journal of creativity</h2>
          <p className='text-white font-secondary font-normal text-[50px] mb-[5%] tracking-wider md:text-[40px] sm:text-[30px]'>FROM THE STUDIO TO YOUR DOORSTEP</p>
          <a href="/" className='bg-white rounded-3xl px-[10%] py-[1.5%] font-primary text-3xl font-bold sm:text-xl'>Explore</a>
        </div>
        </article>
      
    </section>
  )
}

export default Home
