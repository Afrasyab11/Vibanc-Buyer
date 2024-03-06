//this page will render the seller components conditionally one by one progressively.
import React from 'react'
import GetReadyForMarketPlace from '@/components/seller_components/GetReadyForMarketPlace'
import DescribeStartup from '@/components/seller_components/DescribeStartup'
import ThanksForSubmitting from '@/components/seller_components/ThanksForSubmitting'

function page() {
  return (
   <>
    {/* <GetReadyForMarketPlace/> */}
    {/* <DescribeStartup/> */}
    <ThanksForSubmitting/>
    

   
   </>
  )
}

export default page