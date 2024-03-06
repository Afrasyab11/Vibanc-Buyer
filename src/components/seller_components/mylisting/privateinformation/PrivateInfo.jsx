import React from 'react';
import { RiLock2Fill } from "react-icons/ri";

export default function PrivateInfo() {
    return (
        // Parent div
        <div>
            <div>
                <h1 className='text-[#234C46] text-lg font-semibold pb-2 text-center md:text-left'>Private Inforamtion</h1>
                <p className='text-xs p-2 font-semibold mb-4'>Buyers will see this after you grant them access to your startup</p>
            </div>

            <div className='border-[2px] border-[#daf2ef] rounded-2xl'>
                <div className='bg-[#e3f3ef] flex justify-center items-center rounded-t-xl'>
                    <RiLock2Fill size={50} className='text-[#009f88] ml-2 mr-1' />
                    <div className='text-[10px] px-2 py-4'>
                        <h3 className='font-semibold pb-2'>Your private information is protected</h3>
                        <p>All buyers must sign a mutual NDA when requesting access to your private information.</p>
                    </div>

                </div>
                <div className='text-center my-4 mx-3'>
                    <h1 className='text-xs font-semibold'>Save time with auto-sign</h1>
                    <p className='text-[10px] py-2'>Auto-sign NDAs to cut admin and unlock the option to auto-approve access requests.</p>
                    <button className='bg-[#234C46] text-sm font-semibold px-5 py-2 text-white rounded-full'>Set up</button>
                </div>
            </div>
        </div>
    )
}
