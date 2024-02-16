import React, { Suspense } from 'react';
import Link from 'next/link';
import NotFound from './not-found';
import Image from 'next/image';
import { unstable_noStore } from 'next/cache';
import Sneakers_Page from '@/app/server_components/Sneakers_Page';
import Skeleton from './Skeleton';

// export async function generateStaticParams() {
//   return [ { sneaker_category: 'yeezy' } ,  { sneaker_category: 'Yeezy350' } ]
  
// }

async function Page({ params }) {
    params = params.sneaker_category.toString()
    //console.log(params)
    return (
      <div>
    
        <Suspense fallback={<Skeleton/>}>
          <Sneakers_Page params={params}/>
        </Suspense>
        
      </div>
    );
    
}

export default Page;
