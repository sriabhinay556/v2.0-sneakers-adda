'use server'
import React from 'react'
import Carousel_App from '@/app/client_components/CarouselApp' //client code

async function GetHomePageImages() {
 
 const allImages = [
    {
      src:'/HomePageImages/image5.jpg',
      alt:"All Air Jordan 1",
      route:'AJ1',
    },{
      src:'/HomePageImages/image3.jpg',
      alt:"All Air Jordan 3",
      route:'AJ3',
    },{
      src:'/HomePageImages/image1.jpg',
      alt:"All Yeezy 350",
      route:'Y350',
    },{
      src:'/HomePageImages/image4.jpg',
      alt:"All Yeezy 700",
      route:'Y700',
    },{
      src:'/HomePageImages/image2.jpg',
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