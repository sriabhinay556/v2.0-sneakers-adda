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
          centerSlidePercentage={30}
        >
          {images.map((item) => (
            <Link key={item.alt} href={`/sneakers/${item.route}`}>
            <div className="flex flex-col items-center justify-center">
              <Image src={item.src} alt={item.alt} width={500} height={300} layout="responsive" />
              <p className="text-center font-bold py-10">{item.alt}</p>
            </div>
            </Link>
          ))}
        </Carousel>
      </div>
      
    {/* work on this below code; this code only works for small screens!  */}
              <div className='md:hidden' style={{ maxHeight: '90vh' }}>
          <div className="flex flex-col items-center justify-center space-y-4">
            {images.map((item) => (
              <Link key={item.alt} href={`/sneakers/${item.route}`}>
              <div className=" flex flex-col items-center justify-center px-4">
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  width={500} 
                  height={300} 
                  layout="responsive" />
                <p className="text-center font-bold mt-2">{item.alt}</p>
              </div>
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
}

export default CarouselApp;