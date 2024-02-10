import React from 'react'
import Carousel_App from '@/app/client_components/CarouselApp' //client code
import image1 from '../../../public/HomePageImages/image1.jpg'
import image2 from '../../../public/HomePageImages/image2.jpg'
import image3 from '../../../public/HomePageImages/image3.jpg'
import image4 from '../../../public/HomePageImages/image4.jpg'
import image5 from '../../../public/HomePageImages/image5.jpg'
async function GetHomePageImages() {
 
 const allImages = [
    {
      src:image1,
      alt:'title1'
    },{
      src:image2,
      alt:'title2'
    },{
      src:image3,
      alt:'title3'
    },{
      src:image4,
      alt:'title4'
    },{
      src:image5,
      alt:'title5'
    },

  ]
  return (
    <>
      <Carousel_App images={allImages}/>
    </>
  )
}

export default GetHomePageImages