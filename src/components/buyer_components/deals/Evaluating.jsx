import React from 'react'
import Image from "next/image";
import img from "@/assets/images/deals-evaluating.png";
export default function Evaluating() {
  return (
    <div>
      <div className='py-4 text-center px-3 bg-[#d9eee8] lg:w-[750px] xl:w-[950px] 2xl:[1300px] rounded-xl'>
        <Image width={260} src={img} alt="image" className='mx-auto ' />
        <h3 className='font-semibold pb-2 '>Nothing in your pipeline just yet</h3>
        <p className='text-sm'>When you request access to startups you’re interested in, they’ll appear here.</p>
      </div>
    </div>
  )
}
