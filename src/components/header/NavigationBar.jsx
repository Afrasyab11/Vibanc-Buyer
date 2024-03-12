"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Link from "next/link";
import logo from "@/assets/images/logo.png"
import { AiOutlineUser } from "react-icons/ai";
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
    const pathname=usePathname()
    const [toggle, setToggle] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [userDropdown, setUserDropdown] = useState(false);


    const toggleMenu = () => {
        setToggle(!toggle);
    };

    const toggleUserDropdown = () => {
        setUserDropdown(!userDropdown);
    };

    const navLinks = [
        { id: 1, heading: 'My Listing', link: "/seller/my-listing" },
        { id: 2, heading: 'My Deals', link: '/seller/deals' },
        { id: 3, heading: 'Inbox', link: '/seller/inbox' },
    ];

    return (
        <div className={`flex justify-between items-center py-2 md:px-16 lg:px-24 bg-white border-b border-[#234C46] sticky top-0 z-10`}>
            <div className='flex justify-between gap-x-20'>
                <div id="vibancLogo">
                    <Image src={logo} alt="vibanc logo" width={160} height={40} />
                </div>
                {pathname !=="/seller/get-ready" && false &&  <div className='hidden md:flex justify-between items-center gap-x-5'>
                    {navLinks.map(link => (
                        <Link href={link.link} key={link.id}>
                            <h3 className={`text-[16px] font-medium text-gray-500 hover:text-[#009f88] ${pathname==link.link?"text-[#009f88]":""}`}>{link.heading}</h3>
                        </Link>
                    ))}
                </div>}
            </div>

            <div className='hidden md:flex justify-between items-center gap-x-8'>
                <h1 className=''>Upgrade</h1>
                <div className="relative">
                    <AiOutlineUser size={35} onClick={toggleUserDropdown} className='bg-[#d7d4f4] rounded-full p-1 hover:cursor-pointer' />
                    {userDropdown && (
                        <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <div className='flex gap-x-3 items-center border-b border-b-gray-400 p-2 pl-8'>
                                <AiOutlineUser size={30} className='bg-[#d7d4f4] rounded-full p-1' />
                                <h1>Name Surname</h1>
                            </div>
                            <div className="py-1 px-4">
                                <Link href = "/seller/profile">

                                    <li  className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100">Profile</li>
                                </Link>
                                <a href="#" className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100">Settings</a>
                                <a href="#" className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100">Explore marketplace</a>
                                <Link href="/auth/login" className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100">Logout</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="block md:hidden px-2 py-2 z-10">
                {toggle ? (
                    <IoMdClose
                        size={30}
                        onClick={toggleMenu}
                        className='cursor-pointer hover:text-[#ff7236]'
                    />
                ) : (
                    <IoMdMenu
                        size={30}
                        onClick={toggleMenu}
                        className='cursor-pointer hover:text-[#ff7236]'
                    />
                )}
                <div className={`absolute h-[80%] top-14 left-0 ${toggle ? 'translate-x-0' : '-translate-x-full'}  md:hidden top-[52px] bg-white text-black w-full px-3 transform duration-1000 z-10`}>
                    <nav className='mt-8 bg-white'>
                        {navLinks.map(link => (
                            <Link href={link.link} key={link.id}>
                                <h3 className="text-[16px] font-medium text-gray-500 hover:text-[#009f88] py-2">{link.heading}</h3>
                            </Link>
                        ))}
                    </nav>
                    <div className='flex justify-start md:justify-between items-center gap-x-8 bg-white'>
                        {/* <h1>Upgrade</h1> */}
                        <div className="relative">
                            <AiOutlineUser size={35} onClick={toggleUserDropdown} className='bg-[#d7d4f4] rounded-full p-1' />
                            {userDropdown && (
                                <div className="absolute w-56 bg-white mt-5  rounded-xl shadow ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div className='flex gap-x-3 items-center border-b border-b-gray-400 p-2 px-4'>
                                        <AiOutlineUser size={30} className='bg-[#d7d4f4] rounded-full p-1' />
                                        <h1>Name Surname</h1>
                                    </div>
                                    <div className="py-1 px-4">

                                        <a href="#" className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100">Profile</a>
                                        <a href="#" className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100">Settings</a>
                                        <a href="#" className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100">Explore marketplace</a>
                                        <a href="#" className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100">Logout</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
