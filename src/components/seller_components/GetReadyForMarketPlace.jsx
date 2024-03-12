import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import CardList from '../CardList';
import { graphics, icons } from "@/assets/index.js";
import { VibancButton, GhostVibancButton, } from "@/components/common/VibancButtons";
import { useRouter } from 'next/navigation';
//data from figma design:
const CardListData = [
    {
        src: icons.tell_icon,
        alt: 'tell_icon',
        heading: 'Tell us about your startup',
        paragraph: 'Answer a few questions to build your basic listing.'
    },
    {
        src: icons.price_icon,
        alt: 'price_icon',
        heading: 'We\'ll recommend an asking price',
        paragraph: 'Attract offers with an estimate based on real acquisition data.'
    },
    {
        src: icons.approve_icon,
        alt: 'approve_icon',
        heading: 'Get pre-approved in 24 hours',
        paragraph: 'This should take about 2 minutes to complete.'

    }
]




function GetReadyForMarketPlace({ setGetReadyStep }) {

    const router=useRouter()
    const handledClick = () => {
        setGetReadyStep("describe_startup")
    }
    return (
        <>
            <section className="flex flex-col lg:flex-row gap-4 justify-center items-center p-4 m-auto">


                <section id="getReadyText">
                    <Card className="border-none shadow-none">
                        <CardHeader>
                            <CardTitle className='text-[#234C46] text-2xl font-bold'>Let’s get you ready for the marketplace</CardTitle>
                            <CardDescription>Get pre-approved for listing</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className='flex flex-col gap-y-6'>

                                {
                                    CardListData.map((item, index) => {
                                        return (
                                            <CardList
                                                key={index}
                                                src={item.src}
                                                alt={item.alt}
                                                heading={item.heading}
                                                paragraph={item.paragraph}
                                            />
                                        )
                                    })
                                }
                            </div>

                        </CardContent>

                        <CardFooter>
                            <div>
                            <div className='flex gap-x-4'>
                                <GhostVibancButton text='Not Now' className=''  onClick={()=>{router.push("/seller/my-listing")}} />
                                <VibancButton text="Awesome let's go" isIcon={true} className='' onClick={handledClick} />
                            </div>
                            <div className='text-[16px] font-normal my-4 px-3 '>
                                This should take about 2 minutes to complete.
                            </div>
                            </div>
                            
                           
                        </CardFooter>
                       
                       
                    </Card>

                </section>
                <section id="getReadyGraphic">
                    <div>
                        <Image src={graphics.GetReadyForMarketplace} alt='get_ready' className='' />
                    </div>

                </section>
            </section>

        </>
    )
}

export default GetReadyForMarketPlace