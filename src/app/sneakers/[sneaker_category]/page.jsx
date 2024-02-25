import React, { Suspense } from 'react';
import Link from 'next/link';
import NotFound from './not-found';
import Image from 'next/image';
import { unstable_noStore } from 'next/cache';
import Sneakers_Page from '@/app/server_components/Sneakers_Page';
import Skeleton from './Skeleton';
import Search from '@/app/client_components/Search';

export async function generateStaticParams() {
  return [ { sneaker_category: 'Jordan 1' } ,  
  { sneaker_category: 'Jordan 3' },
  { sneaker_category: 'Yeezy 350' },
  { sneaker_category: 'Yeezy 700' },
  { sneaker_category: 'Jordan 7' } ]
  
}

async function Page({ params }) {
    params = params.sneaker_category.toString()
    //console.log(params)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center w-full mb-6">
            <Link href="/" className="px-5 py-3 text-gray-400 rounded-md hover:text-gray-200 transition duration-150 ease-in-out">
              ← 
            </Link>
            <div className="flex justify-center lg:justify-end lg:mx-7 w-full">
              <Search />
            </div>

          </div>
          <Suspense fallback={<Skeleton />}>
            <Sneakers_Page params={params} />
          </Suspense>
        </div>
      </div>
    );
    
}

export default Page;