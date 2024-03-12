import React from 'react'
import { IoIosArrowUp } from "react-icons/io";


const Footer = () => {
  return (
    <div className='w-full flex justify-between px-20 max-sm:px-5 py-4 border-t border-t-[#234C46]'>
         <p className=' max-md:text-sm max-sm:text-xs'>2023 Vibanc.com, Inc ™</p>
         <div className='flex gap-2 items-center  max-md:text-sm max-sm:text-xs'><p>Support & more</p>
         <IoIosArrowUp />
         </div>
    </div>
  )
}

export default Footer