"use client";
import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import Image from "next/image";
import img from "@/assets/images/Image_Placeholder.png"
import CreateProfile from './CreateProfile';

export default function YourProfile() {
    const [profile, setProfile] = useState(true);

    const addProfile = () => {
        setProfile(false)
    }
    return (
        // Parent div
        <>
        {profile ? <> <div className='shadow rounded-xl w-[90%] md:w-[60%] px-4 md:px-8 py-6 my-8'>
            <div className='flex justify-between mb-10'>
                <h1 className='font-semibold text-[16px]'>Your Profile</h1>
                <button className='flex justify-between gap-x-3' onClick={addProfile}>
                    <CiEdit size={25} className='text-gray-400' />
                    <p className='text-gray-400'>Edit info</p>
                </button>
            </div>

            <div className='flex justify-start items-center gap-x-12'>
                <Image src={img} alt=""/>
                <div>
                    <h1 className='font-semibold text-[16px]'>Name Surname</h1>
                    <p className='pt-2 text-gray-400'>Seller role not filled</p>
                </div>
            </div>

            <div className='my-10'>
                <h1 className='font-semibold text-[16px]'>Location</h1>
                <p className='pt-3 font-medium'>Ukrain</p>
            </div>

            <div>
                <h1 className='font-semibold text-[16px]'>About</h1>
                <p className='pt-3 font-medium'>_</p>
            </div>
        </div>
        </>
        : <CreateProfile/>}
        </>
    )
}
