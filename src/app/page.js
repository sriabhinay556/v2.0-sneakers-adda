import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import CarouselApp from "./client_components/CarouselApp";
export default function Home() {

 const allImages = [
  {
    src:'/HomePageImages/image5.jpg',
    alt:"All Air Jordan 1",
    route:'Jordan1',
  },{
    src:'/HomePageImages/image3.jpg',
    alt:"All Air Jordan 3",
    route:'Jordan3',
  },{
    src:'/HomePageImages/image1.jpg',
    alt:"All Yeezy 350",
    route:'Yeezy350',
  },{
    src:'/HomePageImages/image4.jpg',
    alt:"All Yeezy 700",
    route:'Yeezy700',
  },{
    src:'/HomePageImages/image2.jpg',
    alt:"All Air Jordan 7",
    route:'Jordan7',
  },

]

// const shoe_brands = {
//   "results": [
//       "Jordan1",
//       "Jordan3",
//       "Yeezy350",
//       "Yeezy700",
//       "Jordan7",
//       "ASICS",
//       "ADIDAS",
//       "ALEXANDER MCQUEEN",
//       "BAIT",
//       "BALENCIAGA",
//       "BURBERRY",
//       "CHANEL",
//       "COMMON PROJECTS",
//       "CONVERSE",
//       "CROCS",
//       "DIADORA",
//       "DIOR",
//       "FENDI",
//       "GUCCI",
//       "JORDAN",
//       "LI-NING",
//       "LOUIS VUITTON",
//       "NEW BALANCE",
//       "NIKE",
//       "OFF-WHITE",
//       "PRADA",
//       "PUMA",
//       "REEBOK",
//       "SAINT LAURENT",
//       "SAUCONY",
//       "UNDER ARMOUR",
//       "VANS",
//       "VERSACE",
//       "YEEZY"
//   ]
// }
 
  return (  
    <div className="flex justify-center items-center p-5 mt-3 lg:mt-10">
     
   
      <div className="flex justify-center border border-gray-300 w-full max-w-[1000px] h-[500px] md:w-[1000px] md:h-[400px] lg:h-[420px] md:block sm:hidden overflow-y-auto" >
        <div className="flex justify-center flex-col items-center w-full">
            
            <CarouselApp images={allImages}/>
                        
        </div>
        
      </div>

      
    </div>
   
  );
}
