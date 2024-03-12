"use client";
import React, { useState } from 'react'
import InputCard from '../common/InputCard'
//IMPORTING ICONS
import { icons } from '@/assets'
import { useForm, watch } from "react-hook-form";
import { startupTypeSchema } from '@/schemas/sellerRegistrationSchema'
import { DevTool } from '@hookform/devtools';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { VibancButton } from '../common/VibancButtons';
function DescribeStartup({setGetReadyStep}) {
    const [inputCards, setInputCards] = useState([
        {
            id: 'content',
            text: 'Content',
            icon: icons.content,
            status: false,
        },
        {
            id: 'agency',
            text: 'Agency',
            icon: icons.agency,
            status: false,
        },
        {
            id: 'ecommerce',
            text: 'E-commerce',
            icon: icons.ecommerce,
            status: false,
        },
        {
            id: 'other',
            text: 'Other',
            icon: icons.other,
            status: false,
        },
        {
            id: 'saaS',
            text: 'SaaS',
            icon: icons.saaS,
            status: false,
        },
        {
            id: 'shopify',
            text: 'Shopify',
            icon: icons.shopify,
            status: false,
        },
        {
            id: 'mobileapp',
            text: 'Mobile App',
            icon: icons.mobileapp,
            status: false,
        },
        {
            id: 'marketplace',
            text: 'Marketplace',
            icon: icons.marketplace,
            status: false,
        },

    ])
    //validate with zod schema
    // const { control, register, field, handleSubmit, watch, formState: { errors, isLoading, isDirty } } = useForm({
    //     defaultValues: {
    //         startupType: ''
    //     }
    // });
    const describeStartupValue = (id) => {
        console.log("id==>", id)
        setInputCards(prevCards => {
            return prevCards.map(card => {
                if (card.id === id) {
                    return { ...card, status: !card.status };
                }
                return card;
            });
        });


    }
    const onSubmit = (data) => {
        // Use data for further processing or submission
        console.log(data);
    };
    const handleClick=()=>{
        setGetReadyStep("startup_url")


    }
    return (
        <>
            <div className='w-full px-2 py-6 md:w-3/4 mx-auto flex flex-col gap-y-12 justify-center'>
                <section className=' mx-auto '>
                    <h1 className='w-fit md:mt-9 text-[#234C46] text-2xl font-bold'>How would you describe your startup?</h1>
                </section>
                <section>
                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <section className='w-3/4 md:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-sm lg:p-4 mx-auto'>
                        {inputCards.map((card) => (
                            <div key={card.id} className="">
                                <label htmlFor={card.id}>
                                    <Card onClick={() => describeStartupValue(card.id)} className={`cursor-pointer ${card.status && 'border-[2px] border-[#009F88]'}`}
                                    >

                                        <CardContent className="md:px-1 mt-5 flex flex-col justify-center items-center gap-y-2">
                                            <div className=''>
                                                <Image src={card.icon} alt="" />
                                            </div>
                                            <p className='w-fit'>{card.text}</p>
                                        </CardContent>
                                    </Card>
                                </label>
                            </div>
                        ))}


                    </section>
                    {/* </form> */}
                </section>
                <div className='flex justify-end mr-5 '>
                    <VibancButton text="Next" isIcon={true} className='' onClick={handleClick}/>
                </div>
            </div>

            {/* <DevTool control={control} placement="top-right" /> */}
        </>
    )
}

export default DescribeStartup