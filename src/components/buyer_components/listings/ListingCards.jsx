"use client";
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import convertToScientificNotation from '@/utils/scientificNotationFormatter';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import { images, icons } from "@/assets/index.js";
import Link from 'next/link';
import useListings from '@/hooks/useListings';


function ListingCards(props) {


    const { isOverflowing, elementRef } = useListings(props.text);

    return (
        <Card className="rounded-2xl">
            <CardHeader>
                <section className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <Image src={props.icon} alt={props.alt} />
                        <h4 className='font-bold'>{props.heading}</h4>
                    </div>
                    <div className='flex gap-3 items-center bg-green-300'>
                        {props.isHidden ? <Image src={icons.hide} alt="hide" width={22} height={22} /> : <Image src={icons.hide} alt="hide" width={22} height={22} />}
                        {props.isStarred ? <Image src={icons.star} alt="star" width={22} height={22} /> : <Image src={icons.starred} alt="star" width={22} height={22} />}
                    </div>
                </section>
            </CardHeader>
            <CardContent className="py-1.5 min-h-[80px]" >
                <p ref={elementRef} className='font-normal text-sm' style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{props.text}</p>
                {isOverflowing && (
                    <Link
                        href={`/listing/${props.heading}`}
                        target='_blank'
                        className="text-xs underline mt-2 inline cursor-pointer"

                    >
                        See more
                    </Link>
                )}
            </CardContent>
            <CardFooter className="px-0 justify-between items-center">
                <div>
                    <h4 className='text-gray-500 text-xs '>TTM REVENUE</h4>
                    <div className='text-sm font-semibold'>{`$ ${convertToScientificNotation(props.revenue)}`}</div>
                </div>
                <div>
                    <h4 className='text-gray-500 text-xs '>TTM PROFIT</h4>
                    <div className='text-sm font-semibold'>{`$ ${convertToScientificNotation(props.profit)}`}</div>
                </div>
                <div>
                    <h4 className='text-gray-500 text-xs '>ASKING PRICE</h4>
                    <div className='text-sm font-semibold'>{`$ ${convertToScientificNotation(props.askingprice)}`}</div>
                </div>
            </CardFooter>
        </Card>
    );
}
export default ListingCards;