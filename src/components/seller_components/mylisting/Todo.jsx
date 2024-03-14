"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/Capa_1.png';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Todo(props) {
    const [index, setIndex] = useState(0);
    const todoData = [
        {
            id: 1,
            icon: logo,
            title: "To do",
            heading: "You’ve been pre-approved!",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            button: "Complete Your listing"
        },
        {
            id: 2,
            icon: logo,
            title: "To do",
            heading: "You’ve been pre-approved! 1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            button: "Complete Your listing"
        },
    ];

    const [open, setOpen] = useState(true);

    const toggleModal = () => {
        setOpen(!open)
    }
    const handleNext = () => {
        setIndex(index + 1);
    };

    const handlePrevious = () => {
        setIndex(index - 1);
    };

    return (
        <div className="my-3 xl:my-0">
            <div className='inline-flex p-4  md:p-8 shadow rounded-xl '>
                <div className='bg-white'>
                    <div className='flex justify-between mt-2'>
                        {/* Display icon and title */}
                        <Image src={todoData[index].icon} alt="Icon" />
                        <h1 className='bg-[#ffece3] text-[#ff7236] h-fit  px-3 text-sm rounded-lg'>{todoData[index].title}</h1>
                    </div>
                    <div className='xl:flex items-end gap-x-4'>
                        <div>
                            {/* Display heading and description */}
                            <h1 className='text-[14px] md:text-[18px] font-semibold my-2'>{todoData[index].heading}</h1>
                            <p className='text-xs font-medium'>{todoData[index].desc}</p>
                        </div>
                        <button className='bg-[#234C46] text-[11px] px-[3px] xl:mt-0 mt-4 font-medium w-[250px] md:w-[270px] h-fit rounded-full py-2 text-white'>
                            {/* Display button */}
                            {todoData[index].button}
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex w-full mt-4 pl-6 lg:mx-0">
                <div className="w-[50%] font-bold text-sm">{index + 1} of {todoData.length}</div>
                <div className="w-[50%] flex gap-2">
                    <button className='cursor-pointer' onClick={handlePrevious} disabled={index === 0}><FaArrowLeftLong className={`${index === 0 ? 'text-gray-400' : ''}`} /></button>
                    <button className='cursor-pointer' onClick={handleNext} disabled={index === 1} > <FaArrowRightLong className={`${index === 1 ? 'text-gray-400' : ''}`} /></button>
                </div>
            </div>

           
        </div>
    );
}

