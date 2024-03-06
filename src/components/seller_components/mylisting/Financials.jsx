import React from 'react'

export default function Financials() {

    let financData = [
        {
            id: 1,
            heading: "Connect financial metrics to get started",
            desc: "We’ll build a P&L and financial snapshot for you that will help increase trust with buyers and helps answer initial questions to save you time",
            leftBtn: "Enter manually",
            rightBtn : "Connect financials",
            
        },
         ]
    return (
        <div>
            <div>
                <h1 className='text-[#234C46] text-xl font-bold my-2'>Financials</h1>
                <p className='py-2 font-medium'>Your past and projected financial performance.</p>
            </div>

            {/* Map over financData array */}
            {financData.map((item) => (
                <div key={item.id} className='border-2 border-[#daf2ef]  text-center rounded-2xl mb-6 py-7 px-2'>
                    <h2 className='text-[18px] font-semibold py-3'>{item.heading}</h2>
                    <p className='py-2 text-[#7b8987] text-xs'>{item.desc}</p>
                    <div className='md:flex justify-center gap-x-5 mt-4'>
                        <button  className='w-fit  h-fit px-8 mx-1 rounded-full py-2 border-[2px] border-[#234C46] text-xs font-medium'>{item.leftBtn}</button>
                        <button className='bg-[#234C46] text-xs font-medium w-fit my-2 md:my-0  h-fit px-6 rounded-full py-[10px] text-white'>{item.rightBtn}</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
