import React, {useEffect, useState} from 'react';
import { Dlogo } from '../assets';

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed py-2 z-30 px-2 top-0 left-0 right-0 w-full ${scrolled ? "bg-primary" : "bg-transparent" }  text-white `}>
      <div className='flex flex-row h-14 max-w-7xl w-full mx-auto justify-between items-center'>
        <div className=' w-full gap-1 flex flex-row items-center'>
          <img src={Dlogo} alt="" className='w-10 h-10' />
          <div className='hidden md:flex flex-row justify-between items-center gap-1'>
            <p className='text-xl font-semibold'>Dinesh</p>
            <p className='text-2xl font-bold'> | </p>
            <p className='text-xl font-semibold text-nowrap'>Software Enginner</p>
          </div>
        </div>
        <button className='bg-green-500 text-black p-1 px-2 rounded-md'>Github</button>
      </div>
    </nav>
  )
}

export default Navbar