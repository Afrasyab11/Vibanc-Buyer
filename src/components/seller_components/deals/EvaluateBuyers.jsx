"use client"
import React, { useState } from 'react';
import Image from "next/image";
import img1 from "@/assets/images/link.png";
import img2 from "@/assets/images/report.png";
import { FilterModal } from '@/components/dialog/FilterModal';

export default function EvaluateBuyers() {
    // const [isMdodalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(!open)
    }
    return (
        // Parent div
        <div className='lg:w-[600px]'>

            {/* first head div */}
            <div className='md:flex justify-between items-center'>
                {/* left side */}
                <div className=' flex flex-col md:flex-row w-fit mx-auto   gap-y-3 gap-x-5'>
                    <button className='border-[2px] text-xs border-black rounded-full md:px-1 lg:px-4 px-4 py-[2px] lg:py-1'>Approved 0</button>
                    <button className='border rounded-full text-xs md:px-1 lg:px-4 px-4 py-[2px] lg:py-1'>Requested 0</button>
                    <button className='border rounded-full text-xs md:px-1 lg:px-4 px-4 py-[2px] lg:py-1'>Denied 0</button>
                </div>
                {/* Right side */}
                <div className='flex mx-auto justify-center h-fit gap-x-1 mt-6 md:mt-0'>

                    <Image src={img2} className='p-2 hover:cursor-pointer' />

                    <Image

                        src={img1}
                        className='p-2 hover:cursor-pointer'
                        onClick={toggleModal}
                    />
                </div>

            </div>


            {/* Second div for content */}
            <div className='bg-[#efedeb] border-l-4 border-[#ff7236] p-4 rounded mt-12'>
                <h2 className='font-medium mb-2'>No buyers with approved access</h2>
                <p className='text-xs'>You’ll see buyers appear here after you’ve approved access to your startup.</p>
            </div>
            {open && <FilterModal open={open}
                setOpen={toggleModal} />}
        </div>
    )
}
