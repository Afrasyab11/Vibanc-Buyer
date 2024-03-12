import React from 'react'
import convertToScientificNotation from '@/utils/scientificNotationFormatter'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { images, icons } from "@/assets/index.js"

// {icon, alt, heading, isHidden, isStarred}
function ListingCards(props) {
    return (
        <>
            <Card>
                <CardHeader>
                    <section className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <Image src={props.icon} alt={props.alt} />
                            <h4 className='font-bold'>{props.heading}</h4>
                        </div>
                        <div className='flex gap-3'>
                            {
                                props.isHidden ? <Image src={icons.hide} alt="hide" /> : <Image src={icons.hide} alt="hide" />
                            }

                            {
                                props.isStarred ? <Image src={icons.star} alt="star" /> : <Image src={icons.starred} alt="star" />
                            }
                        </div>
                    </section>
                </CardHeader>
                <CardContent>
                    <p className='font-normal'>{props.text}</p>
                </CardContent>
                <CardFooter className="px-0 justify-between  items-center">
                    <div>
                        <h4 className='text-gray-500' >TTM REVENUE</h4>
                        <div>{convertToScientificNotation(props.revenue)}</div>
                    </div>
                    <div>
                        <h4>TTM PROFIT</h4>
                        <div>{convertToScientificNotation(props.profit)}</div>
                    </div>
                    <div>
                        <h4>ASKING PRICE</h4>
                        <div>{convertToScientificNotation(props.askingprice)}</div>
                    </div>
                </CardFooter>
            </Card>



        </>
    )
}

export default ListingCards