import React from 'react'
import { DesktopCanvas } from '../canvas';

function Hero() {
  return (
    <section className='relative w-full h-[680px] mx-auto md:h-screen'>

    <div className={`absolute sm:px-16 px-6 inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-title' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={` font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}>
            Hi, I'm <span className='text-title'>Dinesh</span>
          </h1>
          <p className="text-subtitle sm:py-4 py-2 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          I develop immersive 3D visuals, <br className='sm:block hidden' />
          captivating user interfaces,<br className='sm:block hidden' /> and dynamic web applications.
          </p>
        </div>
    </div>
    <DesktopCanvas />
    </section>
  )
}

export default Hero