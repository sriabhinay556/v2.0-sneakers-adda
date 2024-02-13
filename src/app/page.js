import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import CarouselApp from "./client_components/CarouselApp";
export default function Home() {

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
    <div className="flex justify-center items-center p-5 mt-10">
     
   
      <div className="flex justify-center border border-gray-300 w-full max-w-[1000px] h-[500px] md:w-[1000px] md:h-[400px] lg:h-[420px] md:block sm:hidden overflow-y-auto" >
        <div className="flex justify-center flex-col items-center w-full">
            
            <CarouselApp images={allImages}/>
                        
        </div>
      </div>

      
    </div>
   
  );
}