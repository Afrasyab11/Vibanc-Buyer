//this component is for list with one heading, one paragraph and one icon. Will be used in infoScreen_1920 and Go to Enter Criteria_1920 (according to figma)

// CardList.js

import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

function CardList(props) {
  return (
    <article className='flex gap-4'>
      <div className='flex items-center justify-center'>
        <Image src={props.src} alt={props.alt} className='my-auto' />
      </div>
      <div className=''>
        <h1 className=' font-bold my-4 '>{props.heading}</h1>
        <h6 className='my-4  text-[16px] font-normal'>{props.paragraph}</h6>
      </div>
    </article>
  );
}

export default CardList;
