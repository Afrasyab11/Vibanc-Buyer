"use client";
import React from 'react'
import InputCard from '../common/InputCard'
//IMPORTING ICONS
import { icons } from '@/assets'
import { useForm, watch } from "react-hook-form";
import { startupTypeSchema } from '@/schemas/sellerRegistrationSchema'
import { DevTool } from '@hookform/devtools';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';


const inputCards = [
    {
        id: 'content',
        text: 'Content',
        icon: icons.content,
    },
    {
        id: 'agency',
        text: 'Agency',
        icon: icons.agency,
    },
    {
        id: 'ecommerce',
        text: 'E-commerce',
        icon: icons.ecommerce,
    },
    {
        id: 'other',
        text: 'Other',
        icon: icons.other,
    },
    {
        id: 'saaS',
        text: 'SaaS',
        icon: icons.saaS,
    },
    {
        id: 'shopify',
        text: 'Shopify',
        icon: icons.shopify,
    },
    {
        id: 'mobileapp',
        text: 'Mobile App',
        icon: icons.mobileapp,
    },
    {
        id: 'marketplace',
        text: 'Marketplace',
        icon: icons.marketplace,
    },

]

function DescribeStartup() {
    //validate with zod schema
    const { control, register, field, handleSubmit, watch, formState: { errors, isLoading, isDirty } } = useForm({
        defaultValues: {
            startupType: ''
        }
    });

    const selectedStartupType = watch("startupType"); // Use watch hook
    console.log(">>>>startup type",selectedStartupType);
    const onSubmit = (data) => {
        // Use data for further processing or submission
        console.log(data);
    };
    return (
        <>
            <div className='w-full px-2 py-6 md:w-3/4 mx-auto flex flex-col gap-y-12 justify-center'>
                <section className=' mx-auto '>
                    <h1 className='w-fit md:mt-9 text-[#234C46] text-2xl font-bold'>How would you describe your startup?</h1>
                </section>
                <section>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className='w-3/4 md:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-sm lg:p-4 mx-auto'>
                            {inputCards.map((card) => (
                                <div key={card.id} className="inputCard">
                                    <label htmlFor={card.id}>
                                        <Card className={`outline-2 outline ${selectedStartupType === card.id ? 'outline-green-500' : ''}`}
                                        >
                                            <input
                                                type="radio"
                                                id={card.id}
                                                className=""
                                                {...register("startupType", startupTypeSchema)}

                                            />
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
                    </form>
                </section>
            </div>

            <DevTool control={control} placement="top-right" />
        </>
    )
}

export default DescribeStartup