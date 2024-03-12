// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';
// import logo from '@/assets/images/bulb.png';
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// export default function Todo(props) {
//     const [index, setIndex] = useState(0);
//     const todoData = [
//         {
//             id: 1,
//             icon: logo,
//             title: "Market text",
//             heading: "Need some inspiration?",
//             desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
//             button: "Browse the marketplace"
//         },
//         {
//             id: 2,
//             icon: logo,
//             title: "Market text",
//             heading: "Need some inspiration? 1",
//             desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
//             button: "Browse the marketplace"
//         },
//     ];

//     const handleNext = () => {
//         setIndex(index + 1);
//     };

//     const handlePrevious = () => {
//         setIndex(index - 1);
//     };
//     return (
//         <div className="my-3 xl:my-0">
//             <div className='inline-flex p-4  md:p-8 shadow rounded-xl '>
//                 <div className='bg-white'>
//                     <div className='flex justify-between mt-2'>
//                         {/* Display icon and title */}
//                         <Image src={todoData[index].icon} alt="Icon" />
//                         <h1 className='bg-[#ffece3] text-[#ff7236] h-fit  px-3 rounded-lg'>{todoData[index].title}</h1>
//                     </div>
//                     <div className='xl:flex items-end gap-x-4'>
//                         <div>
//                             {/* Display heading and description */}
//                             <h1 className='text-[18px] font-semibold my-2'>{todoData[index].heading}</h1>
//                             <p className='text-xs font-medium'>{todoData[index].desc}</p>
//                         </div>
//                         <button className=' text-[11px] px-[3px] xl:mt-0 mt-4 font-medium w-[290px] h-fit rounded-full py-2 border-[2px] border-[#234C46] text-[#234C46]'>

//                             {todoData[index].button}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex w-full mt-4 mx-6 lg:mx-0">
//                 <div className="w-[50%] font-bold text-sm">{index + 1} of {todoData.length}</div>
//                 <div className="w-[50%] flex gap-2">
//                     <button className='cursor-pointer' onClick={handlePrevious} disabled={index === 0}><FaArrowLeftLong className={`${index === 0 ? 'text-gray-400' : ''}`} /></button>
//                     <button className='cursor-pointer' onClick={handleNext} disabled={index === 1} > <FaArrowRightLong className={`${index === 1 ? 'text-gray-400' : ''}`} /></button>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/bulb.png';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function MarkerText() {
    const [index, setIndex] = useState(0);
    const todoData = [
        {
            id: 1,
            icon: logo,
            title: "Market text",
            heading: "Need some inspiration?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            button: "Browse the marketplace"
        },
        {
            id: 2,
            icon: logo,
            title: "Market text",
            heading: "Need some inspiration? 1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            button: "Browse the marketplace"
        },
    ];

    const handleNext = () => {
        setIndex(prevIndex => (prevIndex + 1) % todoData.length);
    };

    const handlePrevious = () => {
        setIndex(prevIndex => (prevIndex - 1 + todoData.length) % todoData.length);
    };

    return (
        <div className="my-3 xl:my-0">
            {todoData.map((item, idx) => (
                <div key={idx} className={`inline-flex p-4 md:p-8 shadow rounded-xl ${idx !== index ? 'hidden' : ''}`}>
                    <div className='bg-white'>
                        <div className='flex justify-between mt-2'>
                            <Image src={item.icon} alt="Icon" />
                            <h1 className='bg-[#daf2ef] text-[#53b3a8] h-fit  px-3 text-sm rounded-lg'>{item.title}</h1>
                        </div>
                        <div className='xl:flex items-end gap-x-4'>
                            <div>
                                <h1 className='text-[14px] md:text-[18px] font-semibold my-2'>{item.heading}</h1>
                                <p className='text-xs font-medium'>{item.desc}</p>
                            </div>
                            <button className='text-[11px] px-[3px] xl:mt-0 mt-4 font-medium w-[250px] md:w-[290px] h-fit rounded-full py-2 border-[2px] border-[#234C46] text-[#234C46]'>
                                {item.button}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex w-full mt-4 pl-6 lg:mx-0">
                <div className="w-[50%] font-bold text-sm">{index + 1} of {todoData.length}</div>
                <div className="w-[50%] flex gap-2">
                    <button className='cursor-pointer' onClick={handlePrevious}><FaArrowLeftLong className={`${index === 0 ? 'text-gray-400' : ''}`} /></button>
                    <button className='cursor-pointer' onClick={handleNext}><FaArrowRightLong className={`${index === todoData.length - 1 ? 'text-gray-400' : ''}`} /></button>
                </div>
            </div>
        </div>
    );
}
