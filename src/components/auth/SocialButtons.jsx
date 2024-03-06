import React from 'react';
import { 
    FaLinkedinIn,
    FaApple,  
    FaFacebook } from 'react-icons/fa';
    import { FcGoogle } from "react-icons/fc";
const socialMediaPlatforms = [
    { icon: <FaLinkedinIn  />, name: 'LinkedIn' },
    { icon: <FaApple  className="text-black" />, name: 'Apple ID'},
    { icon: <FcGoogle className="text-red-400" />, name: 'Google'},
    { icon: <FaFacebook  />, name: 'Facebook' }
];
export default function SocialButtons() {
    return (

        <div className="grid grid-cols-1  sm:grid-cols-2 gap-x-4  place-items-center justify-center">
            {socialMediaPlatforms.map((platform, index) => (
                <div key={index} className="w-full mb-3">
                    <button className={` w-full md:w-[216px]   flex items-center border-2 border-${platform.color}  mx-auto px-2 py-2 md:py-1 rounded-xl border-2 border-[#0077B5]`}>
                        <span size={20} className='text-[#0077B5] ml-1'> {platform.icon} </span>
                        <p className={`text-${platform.color} ${platform.name === 'Apple ID' || platform.name === 'Google' ? 'text-black' : '' } text-[#0077B5] font-semibold mx-auto text-16px`}>Login with {platform.name}</p>
                    </button>
                </div>
            ))}
        </div>
    )
}
