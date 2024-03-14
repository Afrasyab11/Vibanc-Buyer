import React, { useState } from 'react';
import { BiCheckDouble } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import img from "@/assets/images/mobIcon.png"
import Pagination from '@/components/pagination/Paginations';

export default function Notifications() {

    const [selected, setSelected] = useState(null);

    const [page, setPage] = useState(1);

    const toggleSelected = (index) => {
        setSelected(index === selected ? null : index);
    };

    const notificationData = [
        {
            icon: img,
            notification: "Notification 1",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 2",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 2",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 2",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 2",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 2",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 2",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 1",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 2",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 2",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 2",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 2",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 2",
            time: "2h",
            dot: <GoDotFill />,
        },
        {
            icon: img,
            notification: "Notification 2",
            time: "2h",
            dot: <GoDotFill />,
        },

    ];



    return (
        <div className='mx-3 md:mx-8'>
            <div className='flex justify-between items-center'>
                <h1 className='py-5'>Businesses matching your criteria</h1>
                <div className='flex gap-x-4'>
                    <BiCheckDouble />
                    <BsThreeDots />
                </div>
            </div>

            <div>
                {notificationData.map((notification, index) => (
                    // <div key={index} className="flex justify-between items-center border my-3 rounded-xl px-4 py-3">
                    <div key={index} className={`flex justify-between items-center my-3 rounded-xl px-4 py-3 ${selected === index ? 'bg-[#fff8f5] border border-orange-400' : 'border border-[#53b3a8]'}`} onClick={() => toggleSelected(index)}>
                        <div className="flex items-center">
                            <Image
                                src={notification.icon}
                                alt="Startup Image"
                                className='bg-[#e6f1ee] p-2 rounded-full'
                                width={35}
                                height={35}
                            />


                            <p className="ml-2">{notification.notification}</p>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <p>{notification.time}</p>


                            {/* <p className='text-orange-400'>{notification.dot}</p> */}
                            <p className={`${selected === index ? "block text-orange-400" : " hidden"}`}>
                                {notification.dot}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination
                page={page}
                setPage={(newPage) => setPage(newPage)}
                total={notificationData.length}
            
                
            />
        </div>
    );
}
