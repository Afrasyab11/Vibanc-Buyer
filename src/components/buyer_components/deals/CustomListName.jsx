"use client"
import React, { useState } from 'react';
import Image from "next/image";
import img from "@/assets/images/mobIcon.png";
import { MdOutlineStarBorder } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";

export default function CustomListName() {

  const [open, setOpen] = useState(false);

  const toggleModal = () => {
      setOpen(!open)
  }

  const startupData = [
    {
      pic: img,
      heading: "Mobile",
      msgIcon: <FiMessageCircle size={20} />,
      starIcon: <MdOutlineStarBorder size={20} />,
      desc: "Award-winning health assistant who makes advanced health data analytics simple and fun.",
      statusheading: "Status",
      statusDesc: "Awaiting access request",
      ttmRevnueHeading: "TTM REVENUE",
      ttmRevenuseDesc: "$6k",
      ttmPrfitHeading: "TTM PROFIT",
      ttmProfitDesc: "$5k",
      askingPriceHeading: "Asking Price",
      askingPriceDesc: "$10k",
    },

    {
      pic: img,
      heading: "Mobile",
      msgIcon: <FiMessageCircle size={20} />,
      starIcon: <MdOutlineStarBorder size={20} />,
      desc: "Award-winning health assistant who makes advanced health data analytics simple and fun.",
      statusheading: "Status",
      statusDesc: "Awaiting access request",
      ttmRevnueHeading: "TTM REVENUE",
      ttmRevenuseDesc: "$6k",
      ttmPrfitHeading: "TTM PROFIT",
      ttmProfitDesc: "$5k",
      askingPriceHeading: "Asking Price",
      askingPriceDesc: "$10k",
    },
    // Add more startup data objects here if needed
  ];

  return (
    <>
      {startupData.map((startup, index) => (
        <div key={index} className='rounded-lg border border-green p-4 mt-5'>

          {/* This div is for icons and heading */}
          <div className='flex justify-between'>
            <div className='flex justify-between items-center gap-x-4 mb-5'>
              <Image
                src={startup.pic}
                alt="Startup Image"
                className='bg-[#e6f1ee] p-2 rounded-full'
                width={35}
                height={35}

              />
              <h2 className='font-semibold'>{startup.heading}</h2>
            </div>
            <div className='flex justify-between gap-x-4'>
              <p className='text-zinc-400'>  {startup.msgIcon} </p>
             
              <p className='text-orange-300'> {startup.starIcon} </p>
            </div>
          </div>

          <div className='lg:flex justify-between'>
            <div className='md:w-[35%] text-xs mb-4 lg:mb-0'>
              <p> {startup.desc} </p>
            </div>
            {/* <div className='flex'> */}
              <div className='md:flex gap-x-12'>
                <div>
                  <p className='text-xs text-zinc-400 uppercase font-medium'>{startup.statusheading}</p>
                  <p className='font-semibold text-xs mt-2'>{startup.statusDesc}</p>
                </div>

                <div>
                  <p className='text-xs text-zinc-400 uppercase font-medium'>{startup.ttmRevnueHeading}</p>
                  <p className='font-semibold text-xs mt-2'>{startup.ttmRevenuseDesc}</p>
                </div>

                <div>
                  <p className='text-xs text-zinc-400 uppercase font-medium'>{startup.ttmPrfitHeading}</p>
                  <p className='font-semibold text-xs mt-2'>{startup.ttmProfitDesc}</p>
                </div>


                <div>
                  <p className='text-xs text-zinc-400 uppercase font-medium'>{startup.askingPriceHeading}</p>
                  <p className='font-semibold text-xs mt-2'>{startup.askingPriceDesc}</p>
                </div>
              </div>
            {/* </div> */}
          </div>
        
        </div>
      ))}
    </>
  );
}
