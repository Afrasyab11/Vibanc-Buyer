import React from 'react'

export default function Metrics() {

    let financData = [
        {
            id: 1,
            heading: "Connect customer metrics to get started",
            desc: "Metrics helps increase trust with buyers and helps answer initial questions to save you time",
            leftBtn: "Enter manually",
            rightBtn: "Connect Matrics",

        },
        {
            id: 2,
            heading: "Connect Google Analytics to get started",
            desc: "Metrics helps increase trust with buyers and helps answer initial questions to save you time",
            leftBtn: "Enter manually",
            rightBtn: "Connect Matrics",

        },
    ]
    return (
        <div>
            <div>
                <h1 className='text-[#234C46] text-xl font-bold my-2'>Metrics</h1>
                <p className='py-2 font-medium'>Connected performance metrics updated in real-time.</p>
            </div>

            {/* Map over financData array */}
            {financData.map((item) => ( 
                <div key={item.id} className='border-2 border-[#daf2ef]  text-center rounded-2xl mb-6 py-7 px-2'>
                    <h2 className='text-[16px] md:text-[18px] font-semibold py-3'>{item.heading}</h2>
                    <p className='py-2 text-[#7b8987] text-xs'>{item.desc}</p>
                    <div className='md:flex justify-center gap-x-5 mt-5'>
                        <button className='w-fit  h-fit px-6 mx-1  rounded-full py-2 border-[2px] border-[#234C46] text-xs font-medium'>{item.leftBtn}</button>
                        <button className='bg-[#234C46] text-xs font-medium w-fit my-2 md:my-0  h-fit px-6 rounded-full py-[10px] text-white'>{item.rightBtn}</button>
                    </div>
                    
                </div>
            ))}
        </div>
    );
}



