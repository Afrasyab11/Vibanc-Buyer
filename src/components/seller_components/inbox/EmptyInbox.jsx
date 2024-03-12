import React from 'react';
import Image from "next/image";
import img from "@/assets/images/image.png";

export default function EmptyInbox() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm place-items-center min-h-screen mx-3">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <p>Your connnection will appera here</p>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1 h-full bg-[#ebeaff] px-3 text-center flex flex-col justify-center items-center">
               <Image src={img} w={400} h={600} alt = "image" />
               <h1 className='font-semibold text-lg py-6'>Your inbox is empty</h1>
               <p className=''>{"Buyers have to make the first move - and once they do, you'll chat with them here."}</p>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
                <p>Chat details will appera here</p>
            </div>
        </div>
    )
}
