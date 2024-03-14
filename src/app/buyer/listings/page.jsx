// import React from 'react'
// import ListingTabs from '@/components/buyer_components/listings/ListingTabs';

// function listings() {
//     return (
//         <>
//         {/* <ListingTabs/> */}
//         </>
//     )
// }

// export default listings

import React from "react";
import dynamic from "next/dynamic";
// import ListingTabs from "@/components/buyer_components/listings/ListingTabs"
const ListingTabs = dynamic(
  () => import("@/components/buyer_components/listings/ListingTabs"),
  {
    ssr: false,
  }
);

function listings() {
  return (
    <>
      <ListingTabs />
    </>
  );
}

export default listings;
