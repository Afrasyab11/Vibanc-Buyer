import React from 'react'
import Image from 'next/image'
import logo from "@/assets/images/logo.png"
import { Button } from '../ui/button'

export default function NavigationBar(props) {
    return (
        <>
            <nav className='outline outline-1 outline-[#ABD0C6] px-2 sticky z-10 top-0 md:px-20 bg-white'>
                <div className='flex justify-between items-center py-1'>

                    <div id="vibancLogo">
                        <Image src={logo} alt="vibanc logo" width={160} height={40} />
                    </div>
                    <div id="logOut">
                        <Button variant="ghost" className="text-gray-700">Log Out</Button>
                    </div>
                </div>
            </nav>

        </>
    )
}
