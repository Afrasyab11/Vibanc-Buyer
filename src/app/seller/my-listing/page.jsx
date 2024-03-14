import React from 'react';
import dynamic from 'next/dynamic';

const CombineAll = dynamic(() => import('@/components/seller_components/mylisting/CombineAll'), {
  ssr: false
});

const MyListingPage = () => <CombineAll />;

// Set display name for debugging
MyListingPage.displayName = 'MyListingPage';

export default MyListingPage;
