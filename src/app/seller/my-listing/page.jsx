// import CombineAll from '@/components/seller_components/mylisting/CombineAll'
import React from 'react'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('@/components/seller_components/mylisting/CombineAll'), {
  ssr: false
})
export default () => <DynamicComponentWithNoSSR />
// export default function page() {
//   return (

//     <div>
//       <CombineAll />
//     </div>

//   )
// }

