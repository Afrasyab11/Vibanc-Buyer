import React from 'react';
import Image from "next/image";
import img from "@/assets/images/inbox-buyer.png";
import { Button } from "@/components/ui/button";
import { IoMdArrowForward } from "react-icons/io";


export default function Messages() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm place-items-center min-h-screen mx-3">
            <div className="col-span-1 md:col-span-2 lg:col-span-1 mt-5 md:mt-0">
                <p>Your connnection will appera here</p>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1 h-full bg-[#ebeaff] px-3 text-center flex flex-col justify-center items-center">
                <Image src={img} w={400} h={500} alt="image" />
                <h1 className='font-semibold text-lg py-6 px-6'>Upgrade your account to request startup access and chat with sellers</h1>
                <p className='px-6'>You need a Premium account or higher to chat with sellers</p>

                <div className=" flex items-center rounded-full bg-[#234C46] px-6 mx-auto my-4">
                    <Button
                        type="submit"
                        className=" hover:bg-transparent bg-transparent px-6"
                    >
                        Learn more and join

                    </Button>
                    <IoMdArrowForward size={20} className='text-orange-400'/>
                </div>

            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <p>Chat details will appera here</p>
            </div>
        </div>
    )
}
