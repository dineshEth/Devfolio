import React from 'react'
import { instagram, linkedn, youtube, twitter } from '../assets'
import { Tilt } from 'react-tilt'

function Footer() {
  return (
    <div className='my-20  w-full'>
    <div className='flex flex-row flex-wrap w-full gap-24 justify-center items-center'>
      <Tilt className="w-12">
        <a href="https://www.instagram.com/cs_dinezh" className='text-white w-12 '>
            <img src={instagram} alt="social" className='w-full object-contain' />
        </a>
      </Tilt >
       
       <Tilt className="w-12">
          <a href="https://www.youtube.com/@dineshTechfi" className='text-white w-12'>
              <img src={youtube} alt="social" />
          </a>
       </Tilt>
       
        
        <Tilt className="w-12">
          <a href="https://www.linkedin.com/in/dineshprajapati41/" className='text-white w-12 '>
              <img src={linkedn} alt="social" />
          </a>
       </Tilt>
        

        <Tilt className="w-12">
          <a href="https://www.x.com/dinesh_eth" className='text-white w-12 '>
              <img src={twitter} alt="social" />
          </a>
       </Tilt>
        
    </div>  
</div>
  )
}

export default Footer