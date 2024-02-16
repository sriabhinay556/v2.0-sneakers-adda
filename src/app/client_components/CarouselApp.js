'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import Link from 'next/link';
function CarouselApp({ images }) {
  return (
    <div className="relative w-full h-full">
      {/* Horizontal Carousel (for medium and larger screens) */}
      <div className='hidden md:block'>
        <Carousel 
          useKeyboardArrows 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false} 
          autoPlay 
          centerMode 
          centerSlidePercentage={35}
        >
         {
          images.map((item) => {
            return <Link href={`/sneakers/${item.route}`} key={item.alt}>
              <div>
              <Image src={item.src} alt={item.alt} width={300} height={300} priority></Image>
              <p className="text-center py-10 text-white">{item.alt}</p>
              </div>
            </Link>
          })
        }
        </Carousel>
      </div>
      
    {/* work on this below code; this code only works for small screens!  */}
        <div className='md:hidden' style={{ maxHeight: '90vh' }}>
            <div className="flex flex-col items-center justify-center space-y-4">
            
            {
              images.map((item) => {
              return <Link href={`/sneakers/${item.route}`} key={item.alt}>
                <Image src={item.src} alt={item.alt} width={500} height={300} priority></Image>
                <p className="text-center py-10 text-white">{item.alt}</p>
              </Link>
              })
              }


          </div>
        </div>
     
    </div>
  );
}

export default CarouselApp;