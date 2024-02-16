'use server'
import React, { Suspense } from 'react';
import Link from 'next/link';
import DemoData from '../../client_components/DemoData';
import Image from 'next/image';
import { unstable_noStore } from 'next/cache';
import { data } from 'autoprefixer';
const convertToUSD = priceCents => (priceCents / 100).toFixed(2);

export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }]
  }

async function Page({ params }) {
   //console.log(params)
    
    return (
      <>
      demo
      <Suspense fallback={<p>loading...</p>}>
        <DemoData data={params.id}/>
      </Suspense>
      this is all server side code
      </>
    );
    
}




export default Page;
