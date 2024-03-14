import React from 'react';
import dynamic from 'next/dynamic';

const CombineAll = dynamic(() => import('@/components/seller_components/mylisting/CombineAll'), {
  ssr: false
});

 function Page(){
  return(
    <div>
      <CombineAll/>
    </div>

  )
}
export default Page;