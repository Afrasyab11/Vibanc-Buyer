import React from 'react';
import { BsThreeDots } from "react-icons/bs";

export default function Summary() {
    let summaryData = [
        {
            id: 1,
            heading: "Tell us About your startup",
            desc: "General information that every buyer needs.",
            btn: "Add information"
        },
        {
            id: 2,
            heading: "Company Overview",
            desc: "What's make your startup special?",
            btn: "Add information"
        },
        {
            id: 3,
            heading: "Acquisition details",
            desc: "Let buyers know your reasons for seeking an acquisition.",
            btn: "Add information"
        },
    ];

    return (
        // Parent div
        <div>
            <div className='mb-4'>
                <div className='flex justify-between'>
                    <h1 className='text-[#234C46] text-xl font-bold my-2'>Summary</h1>
                    <div className='flex justify-between items-center gap-x-5'>
                        <button className='hidden md:block font-medium bg-[#daf2ef] text-[#53b3a8] px-2 rounded-lg'>
                            Marker Text
                        </button>
                        <BsThreeDots  className='mx-3'/>
                    </div>
                </div>
                <p className='font-medium text-sm pt-4'>A public introduction to your startup, growth opportunity, and reason for selling.</p>
            </div>

            {summaryData.map((item) => (
                <div key={item.id} className='border-2 border-[#daf2ef]  text-center rounded-2xl mb-8 py-7'>
                    <h1 className='text-[18px] font-semibold py-3'>{item.heading}</h1>
                    <p className='py-2 text-[#7b8987] text-xs'>{item.desc}</p>
                    <button className='bg-[#abd0c6] text-xs px-3 py-2 font-semibold my-3 rounded-full'>{item.btn}</button>
                </div>
            ))}
        </div>
    );
}
