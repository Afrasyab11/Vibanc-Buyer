"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6'
import { RiLoader4Line } from 'react-icons/ri';
import { Button } from '@/components/ui/button'
import whatYouWantToDo from "@/assets/images/whatYouWantToDo.png"
import { useRouter } from 'next/navigation';
import { VibancButton } from './VibancButtons';

function WhatDoYouWant() {
    const router = useRouter()
    const loader = false;
    const disabled = false;
    const [startUp, setStartUp] = useState("")
    console.log("startUP", startUp)

    const handledClick = () => {
        const pathMap = {
            seller: "/seller/get-ready",
            buyer: "/buyer/get-ready",
        };
    
        const path = pathMap[startUp];
        if (path) {
            router.push(path);
        }
    };
    return (
        <>
            <section className='container mx-auto flex flex-col md:flex-row justify-center content-center gap-2 py-12'>

                <section className='px-4 flex flex-col justify-center content-center gap-y-12'>
                    {/* heading --> */}
                    <div>
                        <h1 className='text-[#234C46] text-2xl font-bold'>What Do you want to do on Vibanc?</h1>
                    </div>
                    {/* checkboxes for startUp --> */}
                    <div>
                        {/* chaning div outline based on checked input */}
                        <div className={`
                        sellStartup outline outline-1 outline-[#cccccc] rounded-md  py-2 px-4 my-2
                        
                        `}>

                            <input type="radio" value="seller"
                                onChange={(e) => {
                                    setStartUp(e.target.value);
                                }}
                                checked={startUp === "seller"}

                                name="doWithStartup" id="sellStartup" className=' checked:accent-[#009F88]' />
                            <label htmlFor="sellStartup" className='mx-2 text-lg font-normal '>I want to sell my startup</label>
                        </div>
                        <div className="buyStartup outline outline-1 outline-[#cccccc] rounded-md  py-2 px-4 my-2">

                            <input type="radio"
                            value="buyer"
                                onChange={(e) => {
                                    setStartUp(e.target.value);
                                }}
                                checked={startUp === "buyer"}

                                name="doWithStartup" id="buyStartup" className=' checked:accent-[#009F88]' />
                            <label htmlFor="buyStartup" className='mx-2 text-lg font-normal' >I want to buy a startup</label>
                        </div>
                    </div>
                    {/* next button for submission --> */}
                    <div id="nextButton">
                        {/* <Button disabled={disabled} className={disabled ? `rounded-full bg-[#519187] px-6` : `rounded-full bg-[#234c46] px-6`}>
                            {
                                loader ? (
                                    <>
                                        <RiLoader4Line size={17} className="text-white animate-spin mr-1" />
                                        Next <FaArrowRight color='#FF7236' className='inline-block ml-2' />
                                    </>
                                ) : (<>
                                    Next <FaArrowRight color='#FF7236' className=' inline-block ml-2' />
                                </>)
                            }



                        </Button> */}
                        <VibancButton text={"Next"} isIcon={true} onClick={handledClick} />

                    </div>
                </section>
                <section>
                    <Image src={whatYouWantToDo} alt="what do you want" />


                </section>
            </section>

        </>
    )
}

export default WhatDoYouWant