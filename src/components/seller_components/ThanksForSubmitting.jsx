import React from 'react'
import { VibancButton } from '../common/VibancButtons'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import CardList from '../CardList'
import { graphics, icons } from '@/assets'
import { useRouter } from 'next/navigation'

const CardListData = [
    {
        src: icons.craft,
        alt: 'craft_icon',
        heading: 'Craft the perfect listing',
        paragraph: 'Attract more interest with help from our customer success team.'
    },
    {
        src: icons.connect,
        alt: 'connect_icon',
        heading: 'Connect with qualified buyers',
        paragraph: 'Find the right buyer with advice from our acquisition experts.'
    },
    {
        src: icons.prepare,
        alt: 'prepare_icon',
        heading: 'Prepare for an easy exit',
        paragraph: 'Get help with data rooms, legal documents, and much more.'

    }
]

function ThanksForSubmitting() {
    const router=useRouter()
    return (
        <>
            <section className="flex flex-col lg:flex-row gap-4 justify-center items-center p-4 m-auto">


                <section id="submittingText">
                    <Card className="border-none">
                        <CardHeader>
                            <CardTitle className='text-[#234C46] text-2xl font-bold'>Thank you for submitting!</CardTitle>
                            <CardDescription className="max-w-[500px]">{`Our curation team will let you know within 24 business hours if you're
                            a good fit. Feel free to finish your listing in the meantime.`}</CardDescription>
                            <p className='font-semibold text-[#234C46]'>How we help you sell your business</p>
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
                            <div className='flex gap-x-4'>

                                <VibancButton text="Awesome let's finish my listing" isIcon={true} className='' onClick={()=>{router.push("/seller/my-listing")}} />
                            </div>
                        </CardFooter>

                    </Card>
                </section>
                <section id="submittingGraphic">
                    <div>
                        <Image src={graphics.submittingGraphics} alt='thanks for submitting' className='' />
                    </div>

                </section>
            </section>

        </>
    )
}

export default ThanksForSubmitting