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
      src:image5,
      alt:"All Air Jordan 1",
      route:'AJ1',
    },{
      src:image3,
      alt:"All Air Jordan 3",
      route:'AJ3',
    },{
      src:image1,
      alt:"All Yeezy 350",
      route:'Y350',
    },{
      src:image4,
      alt:"All Yeezy 700",
      route:'Y700',
    },{
      src:image2,
      alt:"All Air Jordan 7",
      route:'AJ7',
    },

  ]
  return (
    <>
      <Carousel_App images={allImages}/>
    </>
  )
}

export default GetHomePageImages