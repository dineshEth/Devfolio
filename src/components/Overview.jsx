import React from 'react'
import { profile } from '../assets'
import { Tilt } from 'react-tilt'
import { web1, blockchain, xvr, ui, resume } from '../assets'
import Skills from './Skills'


const services = [
  {
    title: 'Web Development',
    icon : web1
  },
  {
    title: 'Blockchain Development',
    icon : blockchain
  },
  {
    title: 'Web Design',
    icon : xvr
  },
  {
    title: 'Teaching',
    icon : ui
  }

]

const Card = ({title, icon}) => {
  return (
    <Tilt className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#090321] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-24 h-24 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
  )
}

function Overview() {
  return (
    <div className="-mt-20 md:mt-20">
      <div className='flex flex-col items-start justify-center gap-4'>
        <h2 className='text-subtitle sm:text-[18px] text-[14px] uppercase '>Introduction</h2>
        <h1 className='font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-1 text-white'>Overview.</h1>
      </div>
      <div className='flex my-2 flex-col gap-2 sm:flex-row flex-wrap justify-between items-start '>
        <div className='max-w-[520px] w-full'>
          <p className='text-subtitle font-normal sm:text-xl text-base'>
          Based in India, I'm a seasoned frontend engineer specializing in immersive 3D visuals, dynamic web applications, and captivating user interfaces. With <span className='bg-pink-600 px-1'> 3 years of experience</span> and over <span className='text-orange-600'> 50 UI projects </span> under my belt, I bring expertise and creativity to every project I undertake.
          </p>
          <div className='flex flex-col bg-subtitle p-4 rounded-2xl my-4 gap-1 '>
            <p className='text-2xl text-black font-black '>Education</p>
            <p className='text-black font-bold'>B.Tech Computer Engineering <span className=' italic font-semibold'> [ Oct 2021 - Oct 2025 ]</span></p>
            <p className='font-light text-black/85'>Swarrnim Startup & Innovation University</p>
            <p>Gandhinagar, India</p>
          </div>
          <button className=' bg-green-500 w-full font-semibold text-black  p-1 px-2 rounded-md'>
            <a href={resume} download className=' list-none no-underline '>Resume</a>
          </button>
        </div>
        <Tilt className='w-full my-6 sm:my-0 bg-title max-w-[380px] rounded-2xl  '>
          <img src={profile} alt="" className='rounded-2xl hover:rotate-6 duration-[1s] ease-in-out transition-all' />
        </Tilt>
      </div>
      <div className='flex w-full flex-row mx-auto my-10 flex-wrap justify-around items-start gap-10'>
        {
          services.map((card)=>(
            <Card key={card.title} title={card.title} icon={card.icon} />
          ))
        }
      </div>
      <div className='w-full mx-auto my-10'>
        <Skills />
      </div>
    </div>
  )
}

export default Overview