import React from 'react';
import Image from "next/image";
import logo from "../../assets/images/logo.png";
export default function Header() {
  return (
    <div className='fixed top-0 w-full z-10 bg-white px-6 md:px-20 lg:px-28 py-2 border border-b-[#234C46]'>
        <div>
        <Image src={logo} alt="vibanc logo" width={160} height={40} />
      
        </div>
      
    </div>
  );
}
