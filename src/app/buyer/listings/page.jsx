import React from 'react'
import ListingCards from '@/components/buyer_components/listings/ListingCards';
import { graphics } from '@/assets/index.js';

const dummyData = [
    {
        icon: graphics.listingCardIcon,
        alt: 'Icon 1',
        heading: 'Listing 1',
        text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt quae eius eos tenetur. Ut voluptates placeat numquam perspiciatis sint!',
        isHidden: false,
        isStarred: true,
        revenue: 100000,
        profit: 50000,
        askingprice: 500000
    },
    {
        icon: graphics.listingCardIcon,
        alt: 'Icon 2',
        heading: 'Listing 2',
        text: 'Description of listing 2',
        isHidden: true,
        isStarred: false,
        revenue: 200000,
        profit: 75000,
        askingprice: 750000
    },
    // Add more dummy data as needed
];


function listings() {
    return (
        <>
            listings
            <ListingCards {...dummyData[0]} />
        </>
    )
}

export default listings