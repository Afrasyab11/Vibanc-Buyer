"use client";
import React, { useState } from 'react'
import Todo from './Todo'
import Summary from './Summary'
import PrivateInfo from './privateinformation/PrivateInfo'
import { AccordionComponent } from './privateinformation/AccordionComponent'
import Financials from './Financials'
import Metrics from './Metrics'
import MarkerText from './MarkerText'

import { DialogDemo } from '@/components/dialog/Dialog';

export default function CombineAll() {
    const [open, setOpen] = useState(true);

    const toggleModal = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className='my-8 mx-4'>

                <div className=' lg:flex justify-between  mx-auto mt-12'>
                    <div className='px-2 flex justify-center'>
                        <Todo />
                    </div>
                    <div className='px-2 flex justify-center'>
                        <MarkerText />
                    </div>
                </div>

                <div className='bg-white mx-auto mt-12'>
                    <div className='mx-auto shadow rounded-xl p-4 mt-12 lg:mt-0'>
                        <Summary />
                    </div>
                    {/* This div is for private information */}
                    {/* <div className='lg:w-[30%] mx-auto shadow rounded-xl p-4 mt-12 lg:mt-0 h-fit'>
                        <PrivateInfo />
                        <AccordionComponent />
                    </div> */}
                </div>
                {/* This div is for financials and metrics */}

                <div className='mt-6'   >
                    {/* First div for Financials */}
                    <div className='mx-auto shadow rounded-xl p-4 mt-12 lg:mt-0'>
                        <Financials />
                    </div>
                    {/* Second div that is for metrics */}

                    <div className='mx-auto shadow rounded-xl p-4 mt-12'>
                        <Metrics />
                    </div>
                </div>

                {open && <DialogDemo open={open}
                    setOpen={toggleModal} />}
            </div>
        </>
    )
}
