"use client"

import React, { useState } from 'react';
import Evaluating from './Evaluating';
import All from './All';
import CustomListName from './CustomListName';
import { Input } from '@/components/ui/input';
import { SlMagnifier } from "react-icons/sl";
import { LuSearchCheck } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { TbTextPlus } from "react-icons/tb";
import img1 from "@/assets/images/link.png";
import Image from 'next/image';
import { CiMenuKebab } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { SortAndFilterModalForBuyer } from '@/components/dialog/SortAndFilterModalForBuyer';

const DealsSidebar = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [open, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(!open)
    }

    // Array to hold step details
    const steps = [
        {
            index: 0,
            name: 'Evaluating',
            icon: <LuSearchCheck />,
            desc: "Startups you’ve requested access to and are evaluating before making an offer",
            component: <Evaluating />
        },
        {
            index: 1,
            name: 'All',
            icon: <TbListDetails />,
            desc: "All your favorited startups",
            component: <All />
        },
        {
            index: 2,
            name: 'Custom List Name',
            icon: <TbTextPlus />,
            desc: "Startups you’ve favorited or contacted but created a list for yet.",
            component: <CustomListName />
        },
    ];

    // Function to handle step click
    const handleStepClick = (index) => {
        setCurrentStep(index);
    };

    return (
        <>
            <h1 className='mx-5 mt-12 font-bold text-xl md:text-2xl text-[#1C2C29] '>My deals</h1>
            <div className="md:flex gap-x-12 items-start p-4 md:mt-5">
                <div className='mb-6 md:mb-0'>
                    {steps.map((step, index) => (
                        <React.Fragment key={step.index}>
                            <div className="flex items-center" onClick={() => handleStepClick(step.index)}>
                                <div className={` flex items-center justify-center rounded-full ${currentStep === step.index ? 'text-[#009f88]' : 'text-[#000000]'}`}>
                                    {step.icon}
                                </div>
                                <span className={`ml-2 text-[12px] hover:cursor-pointer font-medium ${currentStep === step.index ? 'text-[#009f88]' : 'text-[#234C46]'} `}>{step.name}</span>
                            </div>
                            {index === 0 &&
                                <div className='flex justify-between items-center gap-x-8'>
                                    <h2 className="mt-4 font-semibold text-sm w-[140px]">My Favourites</h2>
                                    <FaPlus size={15} className='text-zinc-400 mt-3'/>
                                </div>}
                            {step.index < steps.length - 1 && <div className="h-3 mx-[12px]"></div>}
                        </React.Fragment>
                    ))}


                </div>

                <div>

                    <div className='md:flex justify-between mb-12'>

                        <div>
                            <h2 className='font-semibold pb-3'>{steps[currentStep].name}</h2>
                            <p className='text-[14px] text-gray-300'>{steps[currentStep].desc}</p>
                        </div>


                        <div className='flex items-center'>
                            <div className='flex items-center justify-between border px-2 h-[30px]  rounded-lg'>
                                <SlMagnifier size={15} />
                                <Input type="search" placeholder="Search" className="border-0 h-[25px] lg:w-[300px]" />

                            </div>

                            <Image
                                src={img1}
                                className='p-2 hover:cursor-pointer'
                                onClick={toggleModal}
                            />
                            {currentStep === 2 &&
                                <CiMenuKebab
                                    size={30}
                                    className='border p-1 rounded-lg'
                                    onClick={toggleModal}
                                />
                            }

                        </div>

                    </div>
                    <div className='mt-12 md:mt-0 w-full'>
                        {steps[currentStep].component}
                    </div>
                </div>
                {open && <SortAndFilterModalForBuyer open={open}
                    setOpen={toggleModal} />}
            </div>
        </>
    );
};

export default DealsSidebar;
