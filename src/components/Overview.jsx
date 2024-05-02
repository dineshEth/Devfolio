import React from 'react'
import { profile } from '../assets'

function Overview() {
  return (
    <div className="md:mt-20">
      <div className='flex flex-col items-start justify-center gap-4'>
      <h2 className='text-subtitle sm:py-2 py-1 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>Introduction</h2>
      <h1 className='font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-1 text-white'>Overview</h1>
      </div>
      <div className='flex my-2 flex-col gap-2 sm:flex-row flex-wrap justify-between items-start '>
        <div className='max-w-[520px] w-full'>
          <p className='text-subtitle font-normal sm:text-xl text-base'>
          Based in India, I'm a seasoned frontend engineer specializing in immersive 3D visuals, dynamic web applications, and captivating user interfaces. With <span className='bg-pink-600 px-1'> 3 years of experience</span> and over <span className='text-orange-600'> 50 UI projects </span> under my belt, I bring expertise and creativity to every project I undertake.
            </p>
        </div>
        <div className='w-full bg-title max-w-[380px] rounded-2xl  '>
          <img src={profile} alt="" className='rounded-2xl hover:rotate-12  duration-[1s] ease-in-out transition-all' />
        </div>

      </div>
    </div>
  )
}

export default Overview